# Dokumentasi — Love Letter Website (Untuk Eli)

Dokumen ini menjelaskan struktur, komponen, dan cara kerja website love letter single-page untuk Valentine's Day.

---

## 1. Ringkasan Proyek

| Item | Keterangan |
|------|------------|
| **Nama** | Love Letter Website — "Untuk Eli" |
| **Tipe** | Single-page application (SPA) |
| **Tujuan** | Surat cinta digital untuk Eli, 14 Februari 2026 |
| **Stack** | React 19, TypeScript, Vite, Tailwind CSS v4 |

Website ini bersifat scroll-based, tanpa navigasi menu. Konten dibagi dalam 6 section: Hero → Sapaan → Momen Kita → Inti Surat → Penutup → Footer.

---

## 2. Tech Stack

| Teknologi | Versi | Fungsi |
|-----------|--------|--------|
| **React** | 19.x | UI components |
| **TypeScript** | 5.9 | Typing & maintainability |
| **Vite** | 7.x | Build tool & dev server |
| **Tailwind CSS** | 4.x | Styling (via `@tailwindcss/vite`) |

**Font (Google Fonts):**

- **Cormorant Garamond** — heading & sapaan
- **Lora** — body / isi surat
- **Dancing Script** — judul "Untuk Eli", kutipan, penutup

---

## 3. Struktur Folder

```
love-letter-website/
├── public/
│   ├── vite.svg
│   └── bgm.mp3          ← (opsional) file BGM, nama harus bgm.mp3
├── src/
│   ├── components/      # Komponen UI reusable
│   │   ├── FallingPetals.tsx
│   │   ├── LilyClosing.tsx
│   │   ├── LilyDivider.tsx
│   │   ├── LilyHero.tsx
│   │   ├── MusicPlayer.tsx
│   │   └── ScrollReveal.tsx
│   ├── hooks/           # Custom React hooks
│   │   ├── useFirstInteraction.ts
│   │   └── useIntersectionObserver.ts
│   ├── sections/        # Section halaman (urutan = urutan tampil)
│   │   ├── Hero.tsx
│   │   ├── Greeting.tsx
│   │   ├── Moments.tsx
│   │   ├── LoveLetter.tsx
│   │   ├── Closing.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css        # Global CSS + Tailwind + keyframes
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── DOCUMENTATION.md     # File ini
```

---

## 4. Komponen

### 4.1 `LilyHero`

- **File:** `src/components/LilyHero.tsx`
- **Fungsi:** Lily SVG di hero yang “mekar” (scale 0.3 → 1).
- **Props:** Tidak ada.
- **Animasi:** `lily-bloom` 2.5s ease-out (didefinisikan di `index.css`).
- **Warna:** Gradient putih–cream–pink di kelopak, gold di tengah, sage green di tangkai/daun.

### 4.2 `LilyDivider`

- **File:** `src/components/LilyDivider.tsx`
- **Fungsi:** Pemisah dekoratif antar section (garis + lily kecil di tengah).
- **Props:** Tidak ada.
- **Animasi:** Lily kecil memakai `lily-pulse` (scale 1 ↔ 1.05, loop).

### 4.3 `LilyClosing`

- **File:** `src/components/LilyClosing.tsx`
- **Props:** `visible?: boolean` — bila `true`, lily tampil dengan fade-in.
- **Fungsi:** Lily besar di section penutup; muncul saat section masuk viewport (scroll-triggered).
- **Animasi:** `fade-in-up` 1.5s saat `visible === true`.

### 4.4 `FallingPetals`

- **File:** `src/components/FallingPetals.tsx`
- **Fungsi:** Partikel/kelopak jatuh di background (fixed, pointer-events: none).
- **Jumlah:** 10 elemen dengan posisi & delay acak.
- **Animasi:** `petal-fall` 18–28s linear infinite; warna putih/cream/pink semi-transparan.

### 4.5 `ScrollReveal`

- **File:** `src/components/ScrollReveal.tsx`
- **Props:**
  - `children`: konten yang akan di-reveal
  - `className?`: class tambahan
  - `delay?`: delay (ms) sebelum animasi mulai
- **Fungsi:** Wrapper yang mendeteksi elemen masuk viewport (Intersection Observer), lalu fade-in dari bawah.
- **Transition:** opacity 0→1, translateY 24px→0, 0.8s ease-out.

### 4.6 `MusicPlayer`

- **File:** `src/components/MusicPlayer.tsx`
- **Props:** `onFirstPlay?: () => void` — callback (opsional) saat BGM pertama kali play.
- **Fungsi:**
  - Tombol play/pause (fixed bottom-right).
  - BGM dari `public/bgm.mp3` (loop, volume default 40%).
  - First interaction: play otomatis setelah click/scroll pertama (fade-in volume 0→0.4).
  - Ring berputar & equalizer bar saat playing; tooltip “Now Playing” / “Play Music” saat hover.
- **State:** `isPlaying`, `isHovered`; audio direferensi lewat `useRef`.

---

## 5. Hooks

### 5.1 `useIntersectionObserver`

- **File:** `src/hooks/useIntersectionObserver.ts`
- **Return:** `{ ref, isVisible }`.
- **Options:** `threshold`, `rootMargin`, `triggerOnce` (default true).
- **Kegunaan:** Mendeteksi elemen masuk viewport; dipakai oleh `ScrollReveal` dan section Closing (untuk `LilyClosing`).

### 5.2 `useFirstInteraction`

- **File:** `src/hooks/useFirstInteraction.ts`
- **Return:** `hasInteracted: boolean`.
- **Perilaku:** Listen `click`, `scroll`, `keydown`, `touchstart` di document; setelah event pertama, set `hasInteracted = true` dan hapus listener.
- **Kegunaan:** Di `MusicPlayer` untuk memicu auto-play BGM hanya setelah user berinteraksi (sesuai kebijakan browser).

---

## 6. Section (Urutan Konten)

| Section | File | Konten utama |
|--------|------|----------------|
| **Hero** | `Hero.tsx` | Lily bloom, "Untuk Eli", "A letter from my heart", scroll indicator |
| **Greeting** | `Greeting.tsx` | Divider, "Hai sayang,", paragraf intro |
| **Moments** | `Moments.tsx` | Divider, "Momen Kita", card momen (game bareng, COD Mobile), mini quote |
| **Love Letter** | `LoveLetter.tsx` | Divider, paragraf surat + pull quote ("Mungkin inilah ketenangan...") |
| **Closing** | `Closing.tsx` | Divider, kalimat Valentine, "With all my love 💐", Lily besar |
| **Footer** | `Footer.tsx` | "14 Februari 2026 💐", ikon lily kecil |

Semua teks dan urutan section bisa diubah langsung di file `.tsx` masing-masing.

---

## 7. Styling & Theme

### 7.1 Color palette (di `index.css` & inline)

| Nama | Hex / RGBA | Pemakaian |
|------|------------|-----------|
| Background utama | `#0a0a0f` | Body, base |
| Background alternatif | `#12121a` | Gradien |
| Section break | `#1a1a2e` | Overlay "Momen Kita" |
| Cream (text utama) | `#f5f0e8` | Teks body |
| Dusty rose | `#c9a0a0` | Highlight, border, tombol musik |
| Sage green | `#7a9e7e` | Lily, daun |
| Gold | `#d4af6a` | Stamen lily, aksen kecil |

### 7.2 Typography

- **Heading / sapaan:** Cormorant Garamond, letter-spacing 0.05em.
- **Body:** Lora, ~1rem (mobile) / 1.1rem (desktop), line-height 1.9.
- **Script / quote:** Dancing Script untuk "Untuk Eli", pull quote, "With all my love".

### 7.3 Keyframes (`index.css`)

| Nama | Efek |
|------|------|
| `lily-bloom` | Scale 0.3→1, opacity 0→1 |
| `fade-in-up` | translateY 24px→0, opacity 0→1 |
| `scroll-bounce` | Arrow scroll naik-turun |
| `lily-pulse` | Scale 1↔1.05 |
| `petal-fall` | Jatuh + rotasi (falling petals) |
| `ring-rotate` | Rotate 360° (ring musik) |
| `equalizer-bar` | Tinggi bar 6px↔18px (equalizer) |

---

## 8. Music Player & BGM

- **Sumber audio:** `<audio src="/bgm.mp3">` → file harus ada di `public/bgm.mp3`.
- **Perilaku:**
  - Awal: tidak auto-play (kebijakan browser).
  - Setelah first interaction (click/scroll): play dengan fade-in volume 0→0.4 (1.5s).
  - Loop: ya (`loop` attribute).
  - Volume default: 0.4 (40%).
- **UI:** Tombol 48px (desktop) / 42px (mobile), frosted glass, border dusty rose; ring + equalizer hanya saat playing.

Jika `bgm.mp3` tidak ada, tombol tetap tampil; play akan gagal tanpa crash (handle di catch).

---

## 9. Responsive

- **Mobile (≤600px):** Padding dikurangi, font size lebih kecil, lily hero lebih kecil, tombol musik 42px.
- **Tablet (≤900px):** Satu kolom, font antara mobile dan desktop.
- **Desktop:** Layout penuh sesuai spesifikasi (font 3.5rem heading, 1.1rem body, dll.).

Breakpoint dan utility dipakai lewat class Tailwind (`sm:`, `md:`, dll.) di komponen/section.

---

## 10. Cara Menjalankan & Build

```bash
# Install dependency
npm install

# Development (hot reload)
npm run dev

# Build production
npm run build

# Preview build
npm run preview
```

Setelah `npm run dev`, buka URL yang muncul (biasanya `http://localhost:5173`).

---

## 11. Customisasi Cepat

| Yang diubah | File / lokasi |
|-------------|----------------|
| Teks surat, sapaan, quote | `Greeting.tsx`, `Moments.tsx`, `LoveLetter.tsx`, `Closing.tsx` |
| Judul "Untuk Eli" | `Hero.tsx` (teks di dalam `<h1>`) |
| Tanggal di footer | `Footer.tsx` |
| Warna global | `src/index.css` (variabel `@theme` dan keyframes) + class Tailwind di komponen |
| BGM | Ganti file `public/bgm.mp3` (nama harus tetap `bgm.mp3` agar tidak ubah kode) |
| Jumlah falling petals | `FallingPetals.tsx` (konstanta `PETAL_COUNT`) |

---

## 12. Catatan Teknis

- **Smooth scroll:** `html { scroll-behavior: smooth }` di `index.css`.
- **Tailwind v4:** Konfigurasi theme (warna, font) lewat `@theme` di `index.css`; plugin `@tailwindcss/vite` di `vite.config.ts`.
- **No router:** Satu halaman saja; tidak ada React Router.
- **Aksesibilitas:** Beberapa elemen dekoratif pakai `aria-hidden`; tombol musik punya `aria-label`.

Jika mau menambah section, buat file baru di `sections/`, import di `App.tsx`, dan sisipkan di antara section yang ada sesuai urutan yang diinginkan.

---

*Dokumentasi ini mengacu pada state proyek saat file ini dibuat. Untuk review, fokus pada Section 3 (struktur), 4–5 (komponen & hooks), 6 (alur konten), dan 10–11 (cara jalan & customisasi).*
