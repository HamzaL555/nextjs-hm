# 💍 Jewellery Navbar – Next.js Component

Şəkildəki Jewellery saytına oxşar tam funksional Navbar komponenti.

---

## 🚀 Başlamaq üçün addımlar

### 1. Asılılıqları yükləyin
```bash
npm install
```

### 2. Dev server başladın
```bash
npm run dev
```

### 3. Brauzerdə açın
```
http://localhost:3000
```

---

## 📁 Fayl strukturu

```
jewellery-navbar/
├── app/
│   ├── globals.css      ← Tailwind CSS
│   ├── layout.jsx       ← Root layout
│   └── page.jsx         ← Ana səhifə
├── components/
│   └── Navbar.jsx       ← ⭐ Əsas Navbar komponenti
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ✨ Navbar özəllikləri

| Özəllik | Təsvir |
|---|---|
| 🔔 Elan Barı | Avtomatik dönən elanlar (←/→ düymələri ilə) |
| 🔍 Axtarış | Klik ilə açılan axtarış inputu |
| 💰 Valyuta | INR, AED, USD, GBP seçimi |
| 👤 Hesab / ❤️ Wishlist / 🛍️ Səbət | İkonlar + səbət sayacı |
| 📱 Mobil Menyu | Hamburger menyu (kiçik ekranlarda) |
| 🔗 Nav linklər | Brands, Earrings, Necklaces, Rings... |

---

## 🎨 Mövcud layihəyə əlavə etmək

Əgər artıq Next.js layihəniz varsa, sadəcə `Navbar.jsx` faylını `components/` qovluğuna kopyalayın:

```jsx
// app/layout.jsx və ya istənilən səhifədə:
import Navbar from '@/components/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
```

> **Tələb olunan paket:** `lucide-react`
> ```bash
> npm install lucide-react
> ```
# nextjs-hm
