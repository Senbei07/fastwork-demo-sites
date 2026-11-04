var SUPABASE_URL = 'https://eksfjnngemgwryswgmad.supabase.co/rest/v1/bookings';
var SUPABASE_KEY = 'sb_publishable_YmjHhRgrXuPpyfiCh4YAsA__-Vq35VI';

// Dates and slots use Bangkok time regardless of the visitor's device timezone.
function bangkokNow(now) { return new Date(now.getTime() + 7 * 60 * 60 * 1000); }
function dateString(date) { return date.toISOString().slice(0, 10); }
function dateBounds(now) {
  var today = bangkokNow(now);
  var end = new Date(today.getTime() + 90 * 86400000);
  return [dateString(today), dateString(end)];
}
function normalizePhone(value) {
  var converted = value.replace(/[๐-๙]/g, function (digit) { return String(digit.charCodeAt(0) - 0x0e50); });
  if (!/^[0-9\s-]+$/.test(converted)) return null;
  var digits = converted.replace(/[\s-]/g, '');
  return /^0\d{8,9}$/.test(digits) ? digits : null;
}
function validDate(value, now) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  var parsed = new Date(value + 'T00:00:00Z');
  if (isNaN(parsed.getTime()) || dateString(parsed) !== value) return false;
  var bounds = dateBounds(now);
  return value >= bounds[0] && value <= bounds[1];
}
function availableSlots(date, duration, now) {
  if (!validDate(date, now) || !Number.isInteger(duration) || duration <= 0) return [];
  var day = new Date(date + 'T00:00:00Z').getUTCDay();
  var weekend = day === 0 || day === 6;
  var start = (weekend ? 9 : 10) * 60;
  var close = (weekend ? 21 : 20) * 60;
  var bangkok = bangkokNow(now);
  var current = bangkok.getUTCHours() * 60 + bangkok.getUTCMinutes();
  var slots = [];
  for (var time = start; time + duration <= close; time += 30) {
    if (date === dateString(bangkok) && time <= current) continue;
    slots.push(String(Math.floor(time / 60)).padStart(2, '0') + ':' + String(time % 60).padStart(2, '0'));
  }
  return slots;
}
if (typeof module !== 'undefined' && module.exports) module.exports = {normalizePhone: normalizePhone, validDate: validDate, availableSlots: availableSlots};

if (typeof document !== 'undefined') {
  (function () {
    var form = document.getElementById('bookingForm');
    var service = document.getElementById('f_service');
    var date = document.getElementById('f_date');
    var time = document.getElementById('f_time');
    var note = document.getElementById('f_note');
    var status = document.getElementById('formStatus');
    var submit = document.getElementById('submitBtn');
    function refreshBounds() { var bounds = dateBounds(new Date()); date.min = bounds[0]; date.max = bounds[1]; }
    function duration() { return Number(service.selectedOptions[0].dataset.duration || 0); }
    function refreshSlots() {
      refreshBounds();
      var previous = time.value;
      var slots = availableSlots(date.value, duration(), new Date());
      time.replaceChildren(new Option(slots.length ? 'เลือกเวลา' : 'เลือกบริการและวันที่เพื่อดูเวลา', ''));
      slots.forEach(function (slot) { time.add(new Option(slot + ' น.', slot)); });
      if (slots.indexOf(previous) !== -1) time.value = previous;
      document.getElementById('slot-help').textContent = date.value && duration() && !slots.length ? 'ไม่มีเวลาที่เลือกได้ในวันนี้ กรุณาเลือกวันอื่น' : 'เวลาที่แสดงเป็นเวลาเริ่มบริการในกรุงเทพฯ';
    }
    function showError(id, invalid) {
      var field = document.getElementById('f_' + id);
      if (invalid) field.setAttribute('aria-invalid', 'true'); else field.removeAttribute('aria-invalid');
      document.getElementById('err_' + id).hidden = !invalid;
      return !invalid;
    }
    function validate() {
      refreshBounds();
      var tests = {
        name: document.getElementById('f_name').value.trim().length >= 2,
        phone: !!normalizePhone(document.getElementById('f_phone').value),
        service: duration() > 0,
        date: validDate(date.value, new Date()),
        time: availableSlots(date.value, duration(), new Date()).indexOf(time.value) !== -1,
        consent: document.getElementById('f_consent').checked
      };
      Object.keys(tests).forEach(function (id) { showError(id, !tests[id]); });
      return Object.keys(tests).every(function (id) { return tests[id]; });
    }
    refreshBounds();
    service.addEventListener('change', refreshSlots);
    date.addEventListener('change', refreshSlots);
    note.addEventListener('input', function () { document.getElementById('note_count').textContent = note.value.length + ' / 500'; });
    document.querySelectorAll('[data-service]').forEach(function (button) {
      button.addEventListener('click', function () {
        service.value = button.dataset.service;
        refreshSlots();
        service.focus();
      });
    });
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!validate()) { form.querySelector('[aria-invalid]').focus(); return; }
      var payload = {
        name: document.getElementById('f_name').value.trim(),
        phone: normalizePhone(document.getElementById('f_phone').value),
        service: service.value,
        preferred_date: date.value,
        preferred_time: time.value,
        note: note.value.trim() || null,
        consent: true,
        website: ''
      };
      status.textContent = '';
      status.className = 'form-status';
      submit.disabled = true;
      submit.textContent = 'กำลังส่ง...';
      function success() {
        status.className = 'form-status success';
        status.textContent = 'ได้รับคำขอจองแล้ว ทางร้านจะติดต่อกลับเพื่อยืนยัน';
        form.reset();
        document.getElementById('note_count').textContent = '0 / 500';
        refreshSlots();
      }
      function finish() { submit.disabled = false; submit.textContent = 'ส่งคำขอจองคิว'; status.focus(); }
      if (document.getElementById('hp_website').value !== '') { success(); finish(); return; }
      fetch(SUPABASE_URL, {
        method: 'POST',
        headers: {'apikey': SUPABASE_KEY, 'Content-Type': 'application/json', 'Prefer': 'return=minimal'},
        body: JSON.stringify(payload)
      }).then(function (response) {
        if (response.status !== 201) throw new Error('Booking request failed');
        success();
      }).catch(function () {
        status.className = 'form-status error-status';
        status.textContent = 'ส่งข้อมูลไม่สำเร็จ กรุณาลองอีกครั้ง หรือติดต่อร้านทางโทรศัพท์หรือ LINE';
      }).finally(finish);
    });
  }());
}
