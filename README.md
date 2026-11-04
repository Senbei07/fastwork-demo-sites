# Fastwork Demo Sites: ตัวอย่างเว็บไซต์ Landing Page ภาษาไทย

ชุดเว็บ Landing Page ภาษาไทยแบบ Responsive สำหรับธุรกิจขนาดเล็ก ใช้เป็นผลงานตัวอย่างและแม่แบบเริ่มงานให้ลูกค้าบน Fastwork

> **คำชี้แจง / Disclaimer:** ร้านค้า แบรนด์ สินค้า และข้อมูลติดต่อทั้งหมดเป็น**ข้อมูลสมมติ** สร้างขึ้นเพื่อแสดงผลงานเท่านั้น
> ภาพถ่ายทั้งหมดเป็นภาพจริงจาก Pexels (Pexels License) โฮสต์เองในโฟลเดอร์ของแต่ละเว็บ ดูรายละเอียดใน `CREDITS.md` ของแต่ละเว็บ
>
> *English: All businesses and products are fictional demo sites. All photos are real Pexels photos, self-hosted and credited per site.*

## เว็บตัวอย่าง

| เว็บ | โฟลเดอร์ | Live URL | ฟอนต์ (หัวข้อ + เนื้อหา) | รายละเอียด |
| :--- | :--- | :--- | :--- | :--- |
| **บ้านกาแฟริมคลอง** | `cafe/` | https://demo-cafe-dt1.pages.dev | Taviraj + Sarabun | เมนู เวลาทำการ (แสดงสถานะวันนี้) แผนที่แบบกดก่อนโหลด แถบติดต่อด่วนบนมือถือ |
| **ณิชา เวลเนส** | `spa/` | https://demo-spa-6vb.pages.dev | Pridi + IBM Plex Sans Thai | บริการและราคา ฟอร์มจองคิวส่งเข้า Supabase `bookings` (honeypot + PDPA) |
| **ลูน่า เฮิร์บ เซรั่มใบบัวบก** | `product/` | https://demo-product.pages.dev | Anuphan + Noto Sans Thai | เซลเพจสินค้าเดี่ยว FAQ สั่งซื้อผ่าน LINE Meta/TikTok Pixel แบบ comment ไว้ |

## โครงสร้างโฟลเดอร์

```text
├── AGENTS.md          # กฎโปรเจกต์ (ป้าย Demo, ภาพจริง, ตัวอักษรไทย, Lighthouse 90+)
├── TEMPLATE.md        # เช็กลิสต์ใช้แม่แบบกับลูกค้าจริง
├── .agents/skills/    # สกิล impeccable + frontend-design สำหรับงานออกแบบ
├── cafe/  spa/  product/
│   ├── index.html     # หน้าเดียว CSS inline
│   ├── fonts/         # woff2 subset (ไทย + ละติน) โฮสต์เอง
│   ├── img/           # ภาพ WebP จาก Pexels
│   ├── CREDITS.md     # ที่มาภาพ ช่างภาพ สัญญาอนุญาต
│   ├── PRODUCT.md, DESIGN.md   # บรีฟและระบบดีไซน์
│   ├── _headers       # cache และ security headers (Cloudflare Pages)
│   └── robots.txt
└── spa/booking.js, spa/booking.test.js   # ตรรกะฟอร์มจอง และการทดสอบ
```

## คุณสมบัติทางเทคนิค
- Static HTML ล้วน ไม่มี build step ไม่มี CDN ภายนอก ฟอนต์โฮสต์เอง `font-display: swap`
- ภาพ WebP มี `width`/`height` ครบ `loading="lazy"` ยกเว้นภาพ hero ที่ใช้ `fetchpriority="high"`
- ผ่านการวัด Lighthouse มือถือ (เครื่องจำลองในเครื่อง): Performance 97–100, Accessibility 100, Best Practices 100, SEO 100
- เข้าถึงได้ง่าย: skip link, `:focus-visible`, landmark ครบ, alt ภาษาไทย

## ทดสอบและวัดผล
```bash
node --test spa/booking.test.js                                   # ตรรกะฟอร์มจอง
.agents/skills/impeccable/scripts/impeccable detect --json cafe/index.html
python3 -m http.server 8791 --bind 127.0.0.1                      # แล้วรัน Lighthouse ที่ http://127.0.0.1:8791/<site>/
```

## Deploy (Cloudflare Pages)
```bash
npx wrangler pages deploy cafe    --project-name demo-cafe
npx wrangler pages deploy spa     --project-name demo-spa
npx wrangler pages deploy product --project-name demo-product
```

## ใช้เป็นแม่แบบกับลูกค้าจริง
ดู [`TEMPLATE.md`](TEMPLATE.md) สำหรับรายการที่ต้องเปลี่ยน การตั้งค่า Supabase (RLS แบบ INSERT เท่านั้น) และเช็กลิสต์ก่อนส่งมอบ
