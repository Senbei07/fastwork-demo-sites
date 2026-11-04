# เช็กลิสต์ใช้แม่แบบกับลูกค้าจริง (Template Checklist)

ใช้ fork หรือสำเนาของโฟลเดอร์ที่ต้องการ (`cafe/`, `spa/`, `product/`) ไม่มี build step แก้ไฟล์แล้ว deploy ได้เลย

## 1. ข้อมูลที่ต้องเปลี่ยน
| รายการ | cafe | spa | product |
|---|---|---|---|
| ชื่อร้าน / `<title>` / meta / og | `index.html` | `index.html` | `index.html` |
| เบอร์โทร (`tel:`) | ปุ่มโทรและแถบมือถือ | ปุ่มโทรและส่วนติดต่อ | ไม่มี |
| LINE (`line.me/R/ti/p/@...`) | `@demo-cafe` | `@example` | `@demo-shop` |
| ที่อยู่ / พิกัดแผนที่ | ลิงก์ `google.com/maps?q=` | ส่วนติดต่อ | ไม่มี |
| เวลาทำการ | ตารางเวลาเปิด (สคริปต์วันนี้อ่านจากตาราง) | ตารางเวลา + ช่วงเวลาใน `booking.js` | ไม่มี |
| รายการบริการ/ราคา/เมนู | `index.html` | `index.html` + `<option data-duration>` | ราคาและโปรโมชัน |
| Pixel | ไม่มี | ไม่มี | แทน `YOUR_META_PIXEL_ID`, `YOUR_TIKTOK_PIXEL_ID` แล้วเอา comment ออก |
| Supabase | ไม่มี | `SUPABASE_URL`, `SUPABASE_KEY` ใน `booking.js` | ไม่มี |

## 2. ภาพและเครดิต
- เปลี่ยนภาพเป็นของลูกค้า หรือภาพ Pexels/Unsplash แปลงเป็น WebP โฮสต์เอง ใส่ width/height ให้ครบ
- `fetchpriority="high"` เฉพาะภาพ hero, ภาพอื่นใส่ `loading="lazy"`
- ทุกไฟล์ใน `img/` ต้องมีแถวใน `CREDITS.md` และเครดิตใน footer ตรงกัน
- ห้ามใช้โลโก้หรือภาพสินค้าของแบรนด์จริงที่ไม่ได้รับอนุญาต

## 3. ป้าย Demo
- เว็บตัวอย่างต้องคงป้าย "เว็บตัวอย่าง (Demo)" และหมายเหตุใน footer (ตาม `AGENTS.md`)
- เมื่อส่งมอบเว็บจริงตามข้อตกลงกับลูกค้า ให้ลบป้ายและหมายเหตุ Demo และเปลี่ยนข้อมูลสมมติทั้งหมด

## 4. สี ฟอนต์
- สีหลักอยู่ใน `:root{...}` ที่ต้น `<style>` ของแต่ละเว็บ เปลี่ยนจากตัวแปร
- แต่ละเว็บใช้คู่ฟอนต์ของตัวเอง (cafe: Taviraj + Sarabun, spa: Pridi + IBM Plex Sans Thai, product: Anuphan + Noto Sans Thai) ไฟล์อยู่ใน `fonts/`
- ลูกค้ารายใหม่ควรเปลี่ยนพาเลตต์และคู่ฟอนต์ ไม่ซ้ำกับลูกค้ารายอื่น
- favicon ตอนนี้เป็นค่าว่าง (`data:,`) ให้ใส่ไฟล์ของลูกค้า

## 5. ระบบจอง spa (PDPA)
- สร้างโปรเจกต์ Supabase ของลูกค้า และตาราง `bookings`
- เปิด RLS และอนุญาตเฉพาะ INSERT จาก anon เท่านั้น (ห้าม SELECT/UPDATE/DELETE)
- ใช้ publishable key เท่านั้น ห้ามใส่ service role key ในไฟล์เว็บ
- คง honeypot `website` และ checkbox ยินยอม PDPA, ทดสอบด้วย `node --test spa/booking.test.js`
- ปรับข้อความ PDPA (ระยะเวลาเก็บข้อมูล, ช่องทางขอลบข้อมูล) ให้ตรงกับนโยบายของลูกค้า

## 6. ตรวจก่อนส่งมอบ
1. Lighthouse มือถือทุกหมวด 90+ (เป้า 100) ไม่มี console error
2. `impeccable detect --json <site>/index.html` ไม่มี finding
3. ไม่มี horizontal scroll ที่ 375px, ตัวอักษรไทยไม่ถูกตัดสระ/วรรณยุกต์
4. ปุ่มโทรและ LINE ใช้งานได้จริง, แผนที่โหลดเมื่อกด
5. deploy: `npx wrangler pages deploy <folder> --project-name <name>`
