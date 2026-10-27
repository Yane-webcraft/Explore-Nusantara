"use strict";

const imageUrl = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const destinations = [
  {
    id: "raja-ampat", name: "Raja Ampat", location: "Raja Ampat, Papua Barat Daya", region: "Papua",
    category: "Pantai", image: "photo-1516690561799-46d8f74f9abf",
    summary: "Gugusan pulau karst dan perairan jernih yang dikenal dengan kekayaan bawah lautnya.",
    description: "Raja Ampat menawarkan bentang kepulauan tropis dengan laguna, pantai, dan kehidupan bawah laut yang memikat. Jelajahi pulau-pulau kecil, nikmati panorama dari bukit karst, dan kenali kehidupan masyarakat pesisir setempat.",
    attractions: ["Panorama gugusan karst Wayag dan Piaynemo", "Snorkeling dan menyelam bersama pemandu lokal", "Kunjungan ke kampung wisata pesisir"],
    tips: ["Rencanakan perjalanan antarpulau bersama operator lokal.", "Bawa perlengkapan pelindung matahari dan jaga ekosistem terumbu karang.", "Periksa jadwal kapal dan kondisi cuaca sebelum berangkat."],
    featured: true, map: "Raja Ampat Papua Barat Daya"
  },
  {
    id: "danau-toba", name: "Danau Toba", location: "Kabupaten Samosir, Sumatera Utara", region: "Sumatera",
    category: "Danau", image: "photo-1501785888041-af3ef285b470",
    summary: "Danau vulkanik yang luas, berpadu dengan lanskap hijau dan budaya Batak.",
    description: "Danau Toba menghadirkan suasana tenang di antara perbukitan Sumatera Utara. Pulau Samosir di tengah danau menjadi tempat untuk mengenal tradisi Batak, menikmati lanskap tepi air, dan menjelajahi desa-desa setempat.",
    attractions: ["Desa dan budaya Batak di Pulau Samosir", "Panorama danau dari kawasan perbukitan", "Wisata kuliner dan kerajinan lokal"],
    tips: ["Sisihkan waktu untuk menyeberang dan berkeliling Pulau Samosir.", "Pastikan transportasi darat dan kapal sesuai jadwal perjalanan."],
    featured: true, map: "Danau Toba Sumatera Utara"
  },
  {
    id: "gunung-bromo", name: "Gunung Bromo", location: "Jawa Timur", region: "Jawa",
    category: "Pegunungan", image: "photo-1519681393784-d120267933ba",
    summary: "Lautan pasir dan siluet gunung berapi yang ikonik di kawasan Tengger.",
    description: "Kawasan Gunung Bromo menyuguhkan pemandangan kaldera, lautan pasir, dan perbukitan dengan suasana khas pegunungan. Kunjungan dapat disesuaikan dengan kondisi cuaca dan aturan kawasan konservasi.",
    attractions: ["Pemandangan matahari terbit dari titik pandang", "Lautan pasir dan kawasan kaldera", "Mengenal tradisi masyarakat Tengger"],
    tips: ["Kenakan pakaian hangat dan alas kaki yang nyaman.", "Cek informasi buka kawasan dan aturan kunjungan resmi terlebih dahulu."],
    featured: true, map: "Gunung Bromo Jawa Timur"
  },
  {
    id: "borobudur", name: "Candi Borobudur", location: "Magelang, Jawa Tengah", region: "Jawa",
    category: "Wisata Sejarah", image: "photo-1603565816030-6b389eeb23cb",
    summary: "Warisan arsitektur dan sejarah yang mengajak pengunjung menelusuri relief.",
    description: "Candi Borobudur merupakan kompleks candi Buddha bersejarah dengan susunan teras, stupa, dan relief yang kaya makna. Pengunjung dapat menikmati arsitekturnya sekaligus mempelajari nilai sejarah dan budaya kawasan.",
    attractions: ["Arsitektur teras dan stupa candi", "Relief yang mengisahkan ajaran dan kehidupan", "Museum dan pengalaman budaya di sekitar kawasan"],
    tips: ["Ikuti ketentuan kunjungan dan jalur yang ditetapkan pengelola.", "Gunakan alas kaki nyaman dan jaga ketenangan area bersejarah."],
    featured: true, map: "Candi Borobudur Magelang"
  },
  {
    id: "labuan-bajo", name: "Labuan Bajo", location: "Manggarai Barat, Nusa Tenggara Timur", region: "Nusa Tenggara",
    category: "Pantai", image: "photo-1519046904884-53103b34b206",
    summary: "Kota tepi laut yang menjadi gerbang petualangan ke kepulauan Flores.",
    description: "Labuan Bajo memadukan suasana kota pelabuhan yang santai dengan teluk-teluk indah dan perbukitan. Dari sini, wisatawan dapat merencanakan perjalanan laut dan mengenal pesona alam serta budaya Flores.",
    attractions: ["Panorama matahari terbenam dari bukit sekitar kota", "Wisata perahu bersama operator berizin", "Kuliner dan suasana pelabuhan lokal"],
    tips: ["Pilih operator perjalanan yang memiliki izin dan prosedur keselamatan.", "Periksa prakiraan cuaca serta jadwal kapal sebelum beraktivitas di laut."],
    featured: true, map: "Labuan Bajo Nusa Tenggara Timur"
  },
  {
    id: "wakatobi", name: "Wakatobi", location: "Sulawesi Tenggara", region: "Sulawesi",
    category: "Pantai", image: "photo-1500375592092-40eb2168fd21",
    summary: "Kepulauan bahari dengan terumbu karang dan kehidupan laut yang beragam.",
    description: "Wakatobi dikenal akan lanskap kepulauan dan ekosistem lautnya. Wisata bahari di kawasan ini memberi kesempatan untuk menyelam, snorkeling, dan belajar tentang upaya pelestarian bersama masyarakat setempat.",
    attractions: ["Snorkeling atau menyelam dengan pemandu berpengalaman", "Pantai dan lanskap pulau-pulau kecil", "Pengalaman budaya masyarakat pesisir"],
    tips: ["Gunakan operator lokal dan patuhi arahan keselamatan laut.", "Jangan menyentuh atau mengambil biota dan karang."],
    featured: false, map: "Wakatobi Sulawesi Tenggara"
  },
  {
    id: "nusa-penida", name: "Nusa Penida", location: "Kabupaten Klungkung, Bali", region: "Bali",
    category: "Pantai", image: "photo-1533105079780-92b9be482077",
    summary: "Pulau dengan tebing dramatis, pantai berpasir, dan pemandangan laut lepas.",
    description: "Nusa Penida menawarkan lanskap pesisir yang dramatis, pantai-pantai yang indah, dan suasana pulau yang khas. Perjalanan antarlokasi memerlukan perencanaan karena kondisi jalan dan medan dapat bervariasi.",
    attractions: ["Pemandangan tebing dan pesisir", "Pantai dan teluk pulau", "Desa serta kuliner lokal"],
    tips: ["Gunakan transportasi yang sesuai kondisi jalan dan berkendara dengan hati-hati.", "Patuhi rambu serta batas aman di tepi tebing dan pantai."],
    featured: false, map: "Nusa Penida Bali"
  },
  {
    id: "komodo", name: "Taman Nasional Komodo", location: "Manggarai Barat, Nusa Tenggara Timur", region: "Nusa Tenggara",
    category: "Wisata Alam", image: "photo-1500530855697-b586d89ba3ee",
    summary: "Bentang savana, pulau-pulau, dan habitat alami komodo yang dilindungi.",
    description: "Taman Nasional Komodo merupakan kawasan konservasi dengan lanskap pulau yang khas dan habitat satwa endemik. Kunjungan dilakukan sesuai peraturan taman nasional dan harus didampingi petugas atau pemandu yang berwenang.",
    attractions: ["Trekking di jalur resmi dengan pemandu", "Pemandangan pulau dan savana", "Pengalaman mengamati satwa dari jarak aman"],
    tips: ["Ikuti arahan ranger setiap saat dan jangan mendekati atau memberi makan satwa.", "Periksa ketentuan reservasi, akses, dan aktivitas terbaru di pengelola resmi."],
    featured: false, map: "Taman Nasional Komodo Nusa Tenggara Timur"
  },
  {
    id: "air-terjun-madakaripura", name: "Air Terjun Madakaripura", location: "Probolinggo, Jawa Timur", region: "Jawa",
    category: "Air Terjun", image: "photo-1433086966358-54859d0ed716",
    summary: "Air terjun tinggi di lembah hijau dengan suasana alam yang sejuk.",
    description: "Madakaripura berada di lingkungan lembah yang rimbun dan dikenal dengan dinding tebing tinggi serta aliran airnya. Kondisi jalur dapat dipengaruhi cuaca, sehingga keselamatan perlu menjadi prioritas.",
    attractions: ["Jalur lembah dan panorama tebing", "Suasana alam sejuk dan aliran air", "Pemandangan air terjun bertingkat"],
    tips: ["Cek kondisi cuaca dan status jalur sebelum berangkat.", "Gunakan alas kaki antiselip dan ikuti petunjuk pemandu setempat."],
    featured: false, map: "Air Terjun Madakaripura Probolinggo"
  },
  {
    id: "ubud", name: "Ubud", location: "Gianyar, Bali", region: "Bali",
    category: "Wisata Budaya", image: "photo-1518548419970-58e3b4079ab2",
    summary: "Pusat seni, tradisi, dan lanskap persawahan di jantung Pulau Bali.",
    description: "Ubud menawarkan perpaduan suasana seni, tradisi, lanskap hijau, dan kehidupan lokal. Pengunjung bisa menjelajahi galeri, ruang budaya, pasar, serta kawasan alam dengan tetap menghormati adat setempat.",
    attractions: ["Galeri seni dan pertunjukan budaya", "Lanskap persawahan dan jalan desa", "Pasar dan kuliner khas Bali"],
    tips: ["Kenakan pakaian sopan saat memasuki tempat ibadah.", "Hormati aturan lokal dan minta izin sebelum memotret warga."],
    featured: false, map: "Ubud Gianyar Bali"
  },
  {
    id: "kelimutu", name: "Danau Kelimutu", location: "Ende, Nusa Tenggara Timur", region: "Nusa Tenggara",
    category: "Pegunungan", image: "photo-1472396961693-142e6e269027",
    summary: "Danau kawah di kawasan pegunungan dengan lanskap yang unik dan tenang.",
    description: "Taman Nasional Kelimutu terkenal dengan danau kawah di ketinggian dan lingkungan pegunungan yang sejuk. Warna danau dapat berubah karena proses alam, sehingga pengalaman terbaik adalah menikmati kawasan dengan mengikuti aturan konservasi.",
    attractions: ["Pemandangan danau kawah dari titik pengamatan", "Jalur alam di kawasan taman nasional", "Suasana pagi pegunungan"],
    tips: ["Kenakan pakaian hangat dan cek akses kawasan sebelum berangkat.", "Tetap di jalur resmi dan jangan membuang sampah."],
    featured: false, map: "Danau Kelimutu Ende"
  },
  {
    id: "toraja", name: "Tana Toraja", location: "Sulawesi Selatan", region: "Sulawesi",
    category: "Wisata Budaya", image: "photo-1516026672322-bc52d61a55d5",
    summary: "Warisan budaya, rumah tongkonan, dan lanskap dataran tinggi yang berkarakter.",
    description: "Tana Toraja menyimpan tradisi dan arsitektur khas yang berkembang dalam kehidupan masyarakatnya. Kunjungan yang bertanggung jawab dilakukan dengan menghormati adat, meminta izin, dan mengikuti arahan pemandu lokal.",
    attractions: ["Arsitektur rumah tongkonan", "Lanskap desa dan persawahan", "Kerajinan dan tradisi lokal"],
    tips: ["Gunakan pemandu lokal untuk memahami konteks adat dengan tepat.", "Minta izin sebelum mengambil foto dan hormati upacara masyarakat."],
    featured: false, map: "Tana Toraja Sulawesi Selatan"
  }
];

const categoryData = [
  { name: "Pantai", icon: '<path d="M3 19c2.4-1.6 4.7-1.6 7 0s4.6 1.6 7 0 4.7-1.6 7 0"/><path d="M6 14a6 6 0 0 1 12 0"/><path d="M12 3v2m-7 0 1.4 1.4M19 5l-1.4 1.4"/>' },
  { name: "Pegunungan", icon: '<path d="m3 19 7-12 4 7 2-3 5 8H3Z"/><path d="m8 10 2 2 2-2"/>' },
  { name: "Danau", icon: '<path d="M4 8c2.7-2 5.3-2 8 0s5.3 2 8 0"/><path d="M3 13c3-2 6-2 9 0s6 2 9 0"/><path d="M5 18c2.3-1.5 4.7-1.5 7 0s4.7 1.5 7 0"/>' },
  { name: "Air Terjun", icon: '<path d="M4 4h16M8 4v5m4-5v10m4-10v7"/><path d="M5 21c1.8-1.3 3.5-1.3 5 0m3 0c1.8-1.3 3.5-1.3 5 0"/>' },
  { name: "Wisata Budaya", icon: '<path d="M3 10h18L12 4l-9 6Z"/><path d="M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18M4 18h16"/>' },
  { name: "Wisata Sejarah", icon: '<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M9 13h6m-5 7v-4h4v4"/>' }
];

const galleryItems = [
  { image: "photo-1516690561799-46d8f74f9abf", caption: "Kepulauan Raja Ampat" },
  { image: "photo-1501785888041-af3ef285b470", caption: "Lanskap danau dan perbukitan" },
  { image: "photo-1519046904884-53103b34b206", caption: "Pantai tropis Indonesia" },
  { image: "photo-1519681393784-d120267933ba", caption: "Puncak dan langit malam" },
  { image: "photo-1530789253388-582c481c54b0", caption: "Menjelajahi alam Nusantara" },
  { image: "photo-1500375592092-40eb2168fd21", caption: "Warna biru laut Indonesia" },
  { image: "photo-1518548419970-58e3b4079ab2", caption: "Suasana Pulau Dewata" }
];

const articles = [
  { title: "Panduan pertama menjelajahi Raja Ampat", category: "Panduan perjalanan", image: "photo-1516690561799-46d8f74f9abf", excerpt: "Rencanakan perjalanan antarpulau dengan lebih nyaman, kenali pilihan aktivitas, dan jaga keindahan lautnya.", body: "Mulailah dengan menentukan durasi dan titik kedatangan, lalu konfirmasikan transportasi laut serta akomodasi kepada penyedia lokal. Cuaca dapat memengaruhi jadwal kapal, jadi beri ruang waktu yang cukup dalam rencana. Saat snorkeling atau menyelam, gunakan pemandu berpengalaman, jangan menyentuh karang, dan bawa kembali sampahmu." },
  { title: "Mengenal budaya Batak di sekitar Danau Toba", category: "Cerita budaya", image: "photo-1501785888041-af3ef285b470", excerpt: "Perjalanan ke Danau Toba terasa lebih bermakna saat kita mengenal cerita dan tradisi masyarakat setempat.", body: "Pulau Samosir dan kawasan sekitar Danau Toba menyimpan tradisi, arsitektur, musik, dan kuliner Batak. Kunjungi desa budaya bersama pemandu setempat, mintalah izin sebelum memotret, dan hormati aturan ruang adat maupun tempat ibadah. Mendukung pengrajin dan usaha lokal juga menjadi cara sederhana untuk berwisata dengan lebih bertanggung jawab." },
  { title: "Cara berwisata alam dengan lebih bertanggung jawab", category: "Tips perjalanan", image: "photo-1472396961693-142e6e269027", excerpt: "Langkah sederhana agar pengalaman berkesan sekaligus ikut menjaga tempat yang kita kunjungi.", body: "Sebelum berangkat, pelajari aturan kawasan dan cek kondisi cuaca melalui sumber resmi. Pilih pemandu lokal yang memahami keselamatan, bawa botol minum guna ulang, dan selalu berada di jalur yang ditentukan. Hindari mengganggu satwa liar serta jangan meninggalkan apa pun selain jejak kaki." }
];

const favoriteStorageKey = "exploreNusantara:favorites";
const elements = {
  categoryList: document.querySelector("#category-list"),
  categoryFilter: document.querySelector("#category-filter"),
  regionFilter: document.querySelector("#region-filter"),
  search: document.querySelector("#destination-search"),
  destinationGrid: document.querySelector("#destination-grid"),
  results: document.querySelector("#results-summary"),
  empty: document.querySelector("#empty-state"),
  bento: document.querySelector("#bento-grid"),
  gallery: document.querySelector("#gallery-grid"),
  articles: document.querySelector("#article-grid"),
  detailDialog: document.querySelector("#detail-dialog"),
  detailContent: document.querySelector("#detail-content"),
  favoritesDialog: document.querySelector("#favorites-dialog"),
  favoritesContent: document.querySelector("#favorites-content"),
  imageDialog: document.querySelector("#image-dialog"),
  toast: document.querySelector("#toast")
};

let activeCategory = "";
let toastTimer;
let favorites = loadFavorites();

function loadFavorites() {
  try {
    const stored = JSON.parse(localStorage.getItem(favoriteStorageKey) || "[]");
    if (!Array.isArray(stored)) throw new TypeError("Data favorit harus berupa daftar.");
    return new Set(stored.filter((id) => destinations.some((destination) => destination.id === id)));
  } catch (error) {
    console.error("Favorit tidak dapat dibaca dari penyimpanan lokal.", error);
    return new Set();
  }
}

function saveFavorites() {
  try {
    localStorage.setItem(favoriteStorageKey, JSON.stringify([...favorites]));
  } catch (error) {
    console.error("Favorit tidak dapat disimpan ke penyimpanan lokal.", error);
    showToast("Favorit tidak dapat disimpan di perangkat ini.");
  }
  updateFavoriteCount();
}

function updateFavoriteCount() {
  const count = document.querySelector(".favorite-count");
  count.textContent = String(favorites.size);
  count.setAttribute("aria-label", `${favorites.size} destinasi favorit`);
}

function locationIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>';
}

function heartIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg>';
}

function renderCategories() {
  elements.categoryList.innerHTML = categoryData.map(({ name, icon }) => `
    <button class="category-button" type="button" data-category="${name}" aria-pressed="false">
      <span class="category-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${icon}</svg></span>${name}
    </button>`).join("");
  categoryData.forEach(({ name }) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    elements.categoryFilter.append(option);
  });
  [...new Set(destinations.map(({ region }) => region))].sort().forEach((region) => {
    const option = document.createElement("option");
    option.value = region;
    option.textContent = region;
    elements.regionFilter.append(option);
  });
}

function renderDestinations() {
  const query = elements.search.value.trim().toLocaleLowerCase("id");
  const category = elements.categoryFilter.value || activeCategory;
  const region = elements.regionFilter.value;
  const filtered = destinations.filter((destination) => {
    const matchesText = `${destination.name} ${destination.location} ${destination.category} ${destination.region}`.toLocaleLowerCase("id").includes(query);
    return matchesText && (!category || destination.category === category) && (!region || destination.region === region);
  });
  elements.destinationGrid.innerHTML = filtered.map((destination) => destinationCard(destination)).join("");
  elements.empty.hidden = filtered.length !== 0;
  elements.results.textContent = `Menampilkan ${filtered.length} dari ${destinations.length} destinasi`;
}

function destinationCard(destination) {
  const isFavorite = favorites.has(destination.id);
  return `
    <article class="destination-card">
      <div class="card-image-wrap">
        <img class="card-image" src="${imageUrl(destination.image, 650)}" alt="${destination.name}, ${destination.location}" loading="lazy" />
        <span class="card-category">${destination.category}</span>
        <button class="favorite-button" type="button" data-favorite="${destination.id}" aria-label="${isFavorite ? "Hapus" : "Tambahkan"} ${destination.name} ${isFavorite ? "dari" : "ke"} favorit" aria-pressed="${isFavorite}">${heartIcon()}</button>
      </div>
      <div class="card-content">
        <span class="card-location">${locationIcon()}${destination.location}</span>
        <h3>${destination.name}</h3>
        <p>${destination.summary}</p>
        <button class="detail-link" type="button" data-detail="${destination.id}">Lihat Detail <span aria-hidden="true">↗</span></button>
      </div>
    </article>`;
}

function renderBento() {
  elements.bento.innerHTML = destinations.filter(({ featured }) => featured).slice(0, 5).map((destination) => `
    <article class="bento-card" role="button" tabindex="0" data-detail="${destination.id}" aria-label="Lihat detail ${destination.name}" style="background-image:url('${imageUrl(destination.image, 900)}')">
      <div class="bento-info"><span>${destination.location.split(",")[0]}</span><h3>${destination.name}</h3></div><span class="bento-arrow" aria-hidden="true">↗</span>
    </article>`).join("");
}

function renderGallery() {
  elements.gallery.innerHTML = galleryItems.map((item, index) => `
    <button class="gallery-item" type="button" data-gallery="${index}" aria-label="Perbesar foto: ${item.caption}">
      <img src="${imageUrl(item.image, 750)}" alt="${item.caption}" loading="lazy" /><span class="gallery-caption">${item.caption}</span>
    </button>`).join("");
}

function renderArticles() {
  elements.articles.innerHTML = articles.map((article, index) => `
    <article class="article-card">
      <img class="article-image" src="${imageUrl(article.image, 750)}" alt="${article.title}" loading="lazy" />
      <div class="article-content"><div class="article-meta">${article.category}</div><h3>${article.title}</h3><p>${article.excerpt}</p>
      <button class="detail-link" type="button" data-article="${index}">Baca cerita <span aria-hidden="true">↗</span></button></div>
    </article>`).join("");
}

function openDialog(dialog) {
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeDialog(dialog) {
  dialog.close();
  if (![elements.detailDialog, elements.favoritesDialog, elements.imageDialog].some((item) => item.open)) {
    document.body.classList.remove("dialog-open");
  }
}

function showDetail(id) {
  const destination = destinations.find((item) => item.id === id);
  if (!destination) return;
  const related = destinations.filter((item) => item.id !== id && (item.category === destination.category || item.region === destination.region)).slice(0, 3);
  elements.detailContent.innerHTML = `
    <div class="detail-hero" style="background-image:url('${imageUrl(destination.image, 1200)}')">
      <div class="detail-hero-text"><p class="eyebrow">${destination.category}</p><h2 id="detail-title">${destination.name}</h2></div>
    </div>
    <div class="detail-body">
      <span class="detail-location">${locationIcon()}${destination.location}</span>
      <p>${destination.description}</p>
      <div class="detail-info-grid">
        <section class="detail-info"><h3>Daya tarik</h3><ul>${destination.attractions.map((item) => `<li>${item}</li>`).join("")}</ul></section>
        <section class="detail-info"><h3>Tips berkunjung</h3><ul>${destination.tips.map((item) => `<li>${item}</li>`).join("")}</ul></section>
      </div>
      <p class="detail-note"><strong>Informasi kunjungan:</strong> Harga tiket dan jam operasional dapat berubah dan belum diverifikasi. Silakan konfirmasi kepada pengelola resmi sebelum berkunjung.</p>
      <div class="detail-actions"><a class="button button-dark" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination.map)}" target="_blank" rel="noopener noreferrer">Buka lokasi di peta ↗</a><button class="button button-dark" type="button" data-favorite="${destination.id}" aria-pressed="${favorites.has(destination.id)}">${favorites.has(destination.id) ? "Hapus dari favorit" : "Simpan ke favorit"}</button></div>
      ${related.length ? `<div class="related-list" aria-label="Destinasi terkait"><strong style="width:100%;font-size:11px">Mungkin kamu juga suka</strong>${related.map((item) => `<button type="button" data-detail="${item.id}">${item.name} ↗</button>`).join("")}</div>` : ""}
    </div>`;
  openDialog(elements.detailDialog);
}

function renderFavorites() {
  const saved = destinations.filter(({ id }) => favorites.has(id));
  elements.favoritesContent.innerHTML = `
    <div class="favorites-content"><p class="eyebrow">Perjalanan pilihanmu</p><h2 id="favorites-title">Destinasi favorit</h2><p>${saved.length ? `${saved.length} tempat tersimpan untuk inspirasi berikutnya.` : "Destinasi yang kamu tandai akan tersimpan di sini."}</p>
      ${saved.length ? saved.map((destination) => `<div class="favorite-row"><img src="${imageUrl(destination.image, 200)}" alt="" /><div><h3>${destination.name}</h3><p>${destination.location}</p></div><button type="button" data-remove-favorite="${destination.id}">Hapus</button></div>`).join("") : '<div class="favorites-empty">Belum ada destinasi favorit. Pilih ikon hati pada destinasi yang kamu suka.</div>'}
    </div>`;
}

function toggleFavorite(id) {
  if (favorites.has(id)) {
    favorites.delete(id);
    showToast("Destinasi dihapus dari favorit.");
  } else {
    favorites.add(id);
    showToast("Destinasi ditambahkan ke favorit.");
  }
  saveFavorites();
  renderDestinations();
  if (elements.favoritesDialog.open) renderFavorites();
  if (elements.detailDialog.open) showDetail(id);
}

function showArticle(index) {
  const article = articles[index];
  if (!article) return;
  elements.detailContent.innerHTML = `
    <div class="detail-hero" style="background-image:url('${imageUrl(article.image, 1200)}')"><div class="detail-hero-text"><p class="eyebrow">${article.category}</p><h2 id="detail-title">${article.title}</h2></div></div>
    <div class="detail-body"><p>${article.body}</p><p class="detail-note">Informasi disajikan sebagai panduan umum. Periksa aturan dan kondisi terbaru melalui sumber resmi sebelum melakukan perjalanan.</p></div>`;
  openDialog(elements.detailDialog);
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => elements.toast.classList.remove("is-visible"), 2400);
}

function resetFilters() {
  elements.search.value = "";
  elements.categoryFilter.value = "";
  elements.regionFilter.value = "";
  activeCategory = "";
  document.querySelectorAll(".category-button").forEach((button) => {
    button.classList.remove("is-active");
    button.setAttribute("aria-pressed", "false");
  });
  renderDestinations();
}

function handleDocumentClick(event) {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const favoriteButton = target.closest("[data-favorite]");
  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.favorite);
    return;
  }
  const detailButton = target.closest("[data-detail]");
  if (detailButton) {
    showDetail(detailButton.dataset.detail);
    return;
  }
  const categoryButton = target.closest("[data-category]");
  if (categoryButton) {
    const selected = categoryButton.dataset.category;
    activeCategory = activeCategory === selected ? "" : selected;
    elements.categoryFilter.value = "";
    document.querySelectorAll(".category-button").forEach((button) => {
      const isActive = button.dataset.category === activeCategory;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    renderDestinations();
    document.querySelector("#destinations").scrollIntoView({ behavior: "smooth" });
    return;
  }
  const galleryButton = target.closest("[data-gallery]");
  if (galleryButton) {
    const item = galleryItems[Number(galleryButton.dataset.gallery)];
    document.querySelector("#expanded-image").src = imageUrl(item.image, 1600);
    document.querySelector("#expanded-image").alt = item.caption;
    document.querySelector("#expanded-caption").textContent = item.caption;
    openDialog(elements.imageDialog);
    return;
  }
  const articleButton = target.closest("[data-article]");
  if (articleButton) {
    showArticle(Number(articleButton.dataset.article));
    return;
  }
  const removeButton = target.closest("[data-remove-favorite]");
  if (removeButton) {
    toggleFavorite(removeButton.dataset.removeFavorite);
  }
}

renderCategories();
renderDestinations();
renderBento();
renderGallery();
renderArticles();
updateFavoriteCount();
document.querySelector("#current-year").textContent = String(new Date().getFullYear());

elements.search.addEventListener("input", renderDestinations);
elements.categoryFilter.addEventListener("change", () => {
  activeCategory = "";
  document.querySelectorAll(".category-button").forEach((button) => {
    button.classList.remove("is-active");
    button.setAttribute("aria-pressed", "false");
  });
  renderDestinations();
});
elements.regionFilter.addEventListener("change", renderDestinations);
document.querySelector("#reset-filters").addEventListener("click", resetFilters);
document.querySelector("[data-reset-filters]").addEventListener("click", resetFilters);
document.querySelector("#hero-search").addEventListener("submit", (event) => {
  event.preventDefault();
  elements.search.value = document.querySelector("#hero-search-input").value;
  renderDestinations();
  document.querySelector("#destinations").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#hero-search-input").addEventListener("input", (event) => {
  elements.search.value = event.target.value;
  renderDestinations();
});
document.addEventListener("click", handleDocumentClick);
document.querySelectorAll("[data-open-favorites]").forEach((button) => button.addEventListener("click", () => {
  renderFavorites();
  openDialog(elements.favoritesDialog);
}));
document.querySelectorAll(".dialog-close").forEach((button) => button.addEventListener("click", () => closeDialog(button.closest("dialog"))));
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog(dialog);
  });
  dialog.addEventListener("close", () => {
    if (![elements.detailDialog, elements.favoritesDialog, elements.imageDialog].some((item) => item.open)) {
      document.body.classList.remove("dialog-open");
    }
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Buka menu" : "Tutup menu");
  primaryNav.classList.toggle("is-open", !isOpen);
});
primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    primaryNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    primaryNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
  }
  const card = event.target instanceof Element ? event.target.closest(".bento-card") : null;
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    showDetail(card.dataset.detail);
  }
});
