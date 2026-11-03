# Fastwork Demo Sites — ตัวอย่างเว็บไซต์ Landing Page ภาษาไทย

ชุดเว็บไซต์ Landing Page ภาษาไทยแบบ Responsive ประสิทธิภาพสูง ออกแบบสำหรับธุรกิจขนาดย่อม (SME) ในประเทศไทย เพื่อใช้เป็นผลงานตัวอย่าง (Portfolio Demos) บน Fastwork

> **คำชี้แจง / Disclaimer:**
> - ร้านค้า แบรนด์ สินค้า และข้อมูลการติดต่อทั้งหมดในโปรเจกต์นี้เป็น**ข้อมูลสมมติ** สร้างขึ้นเพื่อแสดงผลงานเท่านั้น ไม่ใช่ร้านค้าจริง
> - งานภาพประกอบและไอคอนทั้งหมดเป็น **Original SVG และ Pure CSS** ที่วาดขึ้นเองทั้งหมด ไม่มีการดาวน์โหลดรูปภาพ ไม่ใช้ฟอนต์ภายนอก และไม่มีการพึ่งพา CDN ใดๆ (No external fonts, No external CDNs)
> 
> *English: All businesses and products are entirely fictional demo sites. All artworks and illustrations are original hand-crafted SVG and CSS without external fonts or CDNs.*

---

## รายการเว็บตัวอย่าง (Demo Sites & Live URLs)

| เว็บไซต์ตัวอย่าง (Demo) | โฟลเดอร์ | Live URL | รายละเอียดโดยย่อ |
| :--- | :--- | :--- | :--- |
| **บ้านกาแฟริมคลอง** (Cafe) | `cafe/` | [https://demo-cafe.pages.dev](https://demo-cafe.pages.dev) | ร้านกาแฟบรรยากาศอบอุ่น เมนูเครื่องดื่ม-เบเกอรี่ ตารางเวลาเปิด-ปิด แผนที่ Google Maps แบบ Click-to-load และแถบติดต่อด่วนบนมือถือ (โทร / LINE) |
| **ณิชา เวลเนส สปา** (Spa & Clinic) | `spa/` | [https://demo-spa.pages.dev](https://demo-spa.pages.dev) | คลินิก/สปาเพื่อสุขภาพ รายการบริการ รีวิวลูกค้า แบบฟอร์มจองคิวออนไลน์เชื่อมต่อ Supabase REST API พร้อม Honeypot ป้องกันสแปม และช่องกดยินยอม PDPA |
| **เซรั่มใบบัวบก ลูน่า เฮิร์บ** (Single Product) | `product/` | [https://demo-product.pages.dev](https://demo-product.pages.dev) | หน้าเซลเพจสินค้าเดี่ยว โปรโมชัน สรรพคุณ วิธีใช้ คำถามที่พบบ่อย (FAQ Accordion) ปุ่มสั่งซื้อผ่าน LINE และโค้ด Meta / TikTok Pixel แบบ Commented-out พร้อมใช้งาน |

---

## โครงสร้างโฟลเดอร์ (Folder Layout)

```text
~/demo-sites/
├── .gitignore             # Git ignore configuration
├── README.md              # รายละเอียดโปรเจกต์ (Thai + English)
├── cafe/
│   ├── _headers           # Security & caching headers สำหรับ Cloudflare Pages
│   └── index.html         # Landing page ร้านกาแฟ (HTML + Inline CSS/SVG/JS)
├── spa/
│   ├── _headers           # Security & caching headers สำหรับ Cloudflare Pages
│   ├── booking.js         # Logic จัดการฟอร์มจองคิวและส่งข้อมูลไปยัง Supabase
│   └── index.html         # Landing page สปาและคลินิกเพื่อสุขภาพ
└── product/
    ├── _headers           # Security & caching headers สำหรับ Cloudflare Pages
    └── index.html         # Landing page เซลเพจสินค้าเดี่ยวพร้อม Pixel placeholders
```

---

## คุณสมบัติทางเทคนิค (Technical Specifications)

- **Pure Static Web:** ไม่มี Build step ไม่ใช้เฟรมเวิร์ก ทำงานได้ทันทีบน Web Server ทุกรูปแบบ
- **Zero External Dependencies:** ไม่โหลดฟอนต์ภายนอกหรือไลบรารีจาก CDN โหลดหน้าเว็บได้รวดเร็วทันใจ (Target PageSpeed 90+)
- **System Font Stack:** ใช้ชุดฟอนต์ระบบภาษาไทย `"Noto Sans Thai", "Sukhumvit Set", "Thonburi", "Leelawadee UI", system-ui, sans-serif`
- **SEO & Social Share Ready:** รองรับ `lang="th"`, `viewport`, `title`, `meta description`, Open Graph (`og:title`, `og:description`, `og:type`, `og:locale th_TH`), `theme-color` และ Favicon แบบ Inline SVG
- **Security Headers:** มีไฟล์ `_headers` กำหนดค่า `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `X-Frame-Options: DENY`, และ `Permissions-Policy`

---

## การนำขึ้นระบบ (Deployment to Cloudflare Pages)

สามารถ Deploy แต่ละเว็บไซต์ขึ้น Cloudflare Pages ด้วยคำสั่ง:

```bash
npx wrangler pages deploy <folder> --project-name <name>
```

### คำสั่งสำหรับแต่ละโปรเจกต์:

1. **Cafe:**
   ```bash
   npx wrangler pages deploy cafe --project-name demo-cafe
   ```
2. **Spa:**
   ```bash
   npx wrangler pages deploy spa --project-name demo-spa
   ```
3. **Product:**
   ```bash
   npx wrangler pages deploy product --project-name demo-product
   ```
