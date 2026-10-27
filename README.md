# ExploreNusantara

Website wisata Indonesia responsif untuk proyek UTS Pemrograman Web Lanjutan. Dibangun dengan HTML5, CSS3, dan JavaScript tanpa framework maupun dependensi build.

## Menjalankan proyek

Buka `index.html` di browser atau jalankan server statis dari folder proyek, misalnya:

```sh
php -S localhost:8000
```

Kemudian kunjungi `http://localhost:8000`. Koneksi internet diperlukan untuk Google Fonts dan foto Unsplash.

## Struktur

```text
index.html
assets/
  css/style.css
  js/script.js
```

## Fitur

- Navigasi responsif dan sticky, pencarian, serta filter kategori dan daerah.
- Kartu destinasi dan bento grid yang dirender dari data terstruktur di `assets/js/script.js`.
- Detail destinasi, tips, daya tarik, rekomendasi, serta tautan lokasi ke Google Maps.
- Daftar favorit tersimpan pada `localStorage` browser.
- Galeri foto masonry dengan tampilan foto besar dan artikel wisata dengan dialog baca.
- Tampilan responsif, navigasi keyboard, alt text, dan dukungan `prefers-reduced-motion`.

Harga tiket dan jam operasional tidak dicantumkan sebagai fakta karena informasinya perlu diverifikasi langsung ke pengelola destinasi.
