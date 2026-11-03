// ============================================================
// CONFIG — Public publishable key — protected by Supabase RLS
// (INSERT only, no SELECT)
// ============================================================
var SUPABASE_URL = 'https://eksfjnngemgwryswgmad.supabase.co/rest/v1/bookings';
var SUPABASE_KEY = 'sb_publishable_YmjHhRgrXuPpyfiCh4YAsA__-Vq35VI';

// ============================================================
// INIT DATE RANGE
// ============================================================
(function initDate() {
  var dateInput = document.getElementById('f_date');
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var dd = String(today.getDate()).padStart(2, '0');
  var todayStr = yyyy + '-' + mm + '-' + dd;

  var maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 365);
  var myyy = maxDate.getFullYear();
  var mmm = String(maxDate.getMonth() + 1).padStart(2, '0');
  var mdd = String(maxDate.getDate()).padStart(2, '0');
  var maxStr = myyy + '-' + mmm + '-' + mdd;

  dateInput.min = todayStr;
  dateInput.max = maxStr;
})();

// ============================================================
// INIT TIME SLOTS (10:00-19:00, every 30 min)
// ============================================================
(function initTimeSlots() {
  var sel = document.getElementById('f_time');
  var startH = 10, endH = 19;
  for (var h = startH; h <= endH; h++) {
    var slots = (h === endH) ? [0] : [0, 30];
    for (var s = 0; s < slots.length; s++) {
      var m = slots[s];
      var hh = String(h).padStart(2, '0');
      var mm = String(m).padStart(2, '0');
      var label = hh + ':' + mm + ' น.';
      var val = hh + ':' + mm;
      var opt = document.createElement('option');
      opt.value = val;
      opt.textContent = label;
      sel.appendChild(opt);
    }
  }
})();

// ============================================================
// NOTE CHARACTER COUNT
// ============================================================
(function initNoteCount() {
  var textarea = document.getElementById('f_note');
  var counter = document.getElementById('note_count');
  textarea.addEventListener('input', function() {
    counter.textContent = textarea.value.length + ' / 500';
  });
})();

// ============================================================
// VALIDATION HELPERS
// ============================================================
function showError(fieldId, errId, show) {
  var field = document.getElementById(fieldId);
  var err = document.getElementById(errId);
  if (show) {
    field.setAttribute('aria-invalid', 'true');
    err.classList.add('visible');
  } else {
    field.removeAttribute('aria-invalid');
    err.classList.remove('visible');
  }
  return !show;
}

function validateName() {
  var v = document.getElementById('f_name').value.trim();
  return showError('f_name', 'err_name', v.length < 2);
}
function validatePhone() {
  var v = document.getElementById('f_phone').value.trim();
  return showError('f_phone', 'err_phone', !/^[0-9\-\s]{9,15}$/.test(v));
}
function validateService() {
  var v = document.getElementById('f_service').value;
  return showError('f_service', 'err_service', !v);
}
function validateDate() {
  var v = document.getElementById('f_date').value;
  return showError('f_date', 'err_date', !v);
}
function validateTime() {
  var v = document.getElementById('f_time').value;
  return showError('f_time', 'err_time', !v);
}
function validateConsent() {
  var v = document.getElementById('f_consent').checked;
  return showError('f_consent', 'err_consent', !v);
}

// Inline validation on blur
document.getElementById('f_name').addEventListener('blur', validateName);
document.getElementById('f_phone').addEventListener('blur', validatePhone);
document.getElementById('f_service').addEventListener('change', validateService);
document.getElementById('f_date').addEventListener('change', validateDate);
document.getElementById('f_time').addEventListener('change', validateTime);
document.getElementById('f_consent').addEventListener('change', validateConsent);

// ============================================================
// FORM SUBMIT
// ============================================================
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Run all validations
  var ok = true;
  ok = validateName() & ok;
  ok = validatePhone() & ok;
  ok = validateService() & ok;
  ok = validateDate() & ok;
  ok = validateTime() & ok;
  ok = validateConsent() & ok;

  if (!ok) {
    // Focus first invalid field
    var first = document.querySelector('[aria-invalid="true"]');
    if (first) first.focus();
    return;
  }

  var statusEl = document.getElementById('formStatus');
  var submitBtn = document.getElementById('submitBtn');

  // Gather values
  var honeypot = document.getElementById('hp_website').value;
  var name = document.getElementById('f_name').value.trim();
  var phone = document.getElementById('f_phone').value.trim();
  var service = document.getElementById('f_service').value;
  var preferred_date = document.getElementById('f_date').value;
  var preferred_time = document.getElementById('f_time').value;
  var noteRaw = document.getElementById('f_note').value.trim();
  var note = noteRaw === '' ? null : noteRaw;

  // Reset status
  statusEl.className = 'form-status';
  statusEl.textContent = '';

  // Disable button
  submitBtn.disabled = true;
  submitBtn.textContent = 'กำลังส่ง...';

  // HONEYPOT check — silent success
  if (honeypot !== '') {
    setTimeout(function() {
      showSuccess(statusEl, submitBtn);
    }, 600);
    return;
  }

  var payload = {
    name: name,
    phone: phone,
    service: service,
    preferred_date: preferred_date,
    preferred_time: preferred_time,
    note: note,
    consent: true,
    website: ''
  };

  fetch(SUPABASE_URL, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_KEY,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify(payload)
  })
  .then(function(res) {
    if (res.status === 201) {
      showSuccess(statusEl, submitBtn);
    } else {
      return res.text().then(function(body) {
        throw new Error('HTTP ' + res.status + ': ' + body);
      });
    }
  })
  .catch(function(err) {
    console.error('Booking error:', err);
    statusEl.className = 'form-status error-status';
    statusEl.textContent = 'เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง หรือติดต่อทางโทรศัพท์โดยตรง';
    submitBtn.disabled = false;
    submitBtn.textContent = 'ส่งคำขอจองคิว';
    statusEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
});

function showSuccess(statusEl, submitBtn) {
  statusEl.className = 'form-status success';
  statusEl.textContent = 'ได้รับคำขอจองแล้ว ทางร้านจะติดต่อกลับภายใน 24 ชม.';
  submitBtn.disabled = false;
  submitBtn.textContent = 'ส่งคำขอจองคิว';
  document.getElementById('bookingForm').reset();
  document.getElementById('note_count').textContent = '0 / 500';
  // Clear aria-invalid states
  ['f_name','f_phone','f_service','f_date','f_time','f_consent'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.removeAttribute('aria-invalid');
  });
  statusEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
