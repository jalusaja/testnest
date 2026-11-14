/*
 * Aplikasi Jalu — app data (single source of truth).
 * See README.md for how to add an app or turn on a tester button.
 *
 * Fields per app:
 *   id              short slug, also used in the URL: #app/<id>
 *   name            display name
 *   playTitle       (optional) title as shown on Google Play
 *   packageName     Android package name (used for the Play testing URL)
 *   icon            path relative to the site root, e.g. "icons/tidy.png"
 *   group           one of the keys in JALU_GROUPS below
 *   badges          any of: "noAds", "oneTime", "onDevice", "kids", "hasAds"
 *   testingEnabled  false = shows "Uji tertutup segera"; true = live "Jadi penguji" button
 *   testingUrl      (optional) override; default https://play.google.com/apps/testing/<packageName>
 *   short / long    { id: "...", en: "..." }
 *   notice          (optional) { id, en } important caveat shown highlighted in the detail view
 */
window.JALU_GROUPS = [
  { key: "game",    label: { id: "Game",                     en: "Games" } },
  { key: "docs",    label: { id: "Privasi & dokumen",       en: "Privacy & documents" } },
  { key: "work",    label: { id: "Fokus & kreator",          en: "Focus & creators" } },
  { key: "health",  label: { id: "Kesehatan",                en: "Health" } },
  { key: "biz",     label: { id: "Usaha & keuangan",         en: "Business & money" } },
  { key: "led",     label: { id: "Papan LED",                en: "LED boards" } },
  { key: "kids",    label: { id: "Anak",                     en: "Kids" } },
  { key: "util",    label: { id: "Utilitas & otomotif",      en: "Utilities & car" } },
  { key: "soon",    label: { id: "Menyusul",                 en: "Coming soon" } }
];

window.JALU_APPS = [
  {
    id: "tarung-bebas",
    name: "Tarung Bebas",
    packageName: "com.stickninja.game",
    icon: "icons/tarung-bebas.png",
    group: "game",
    badges: ["hasAds"],
    testingEnabled: false,
    privacyUrl: "privacy/tarung-bebas.html",
    short: {
      id: "Hajar, lempar & banting musuh! Game pukul-pukulan 2.5D penuh aksi.",
      en: "Punch, throw & slam your enemies! A 2.5D beat-em-up packed with action."
    },
    long: {
      id: "Jadilah petarung jalanan di Tarung Bebas. Mulai dengan tangan kosong, temukan senjata di jalan, dan hadapi gelombang musuh di 7 arena. Ada kombo tinju, uppercut, dan tendangan terbang; musuh bisa dicengkeram lalu dibanting atau dilempar. Permainannya 2.5D dengan 3 jalur: pindah jalur untuk menghindar atau mengejar, panjat tiang, pohon, tembok, atau peti, dan hancurkan penghalang. Senjata seperti pedang, pistol, bumerang, kunai, dan granat bisa dinaikkan hingga level 20; senjata spesial meliputi Drone Tempur, Laser, Bazoka, Palu Godam, dan Pedang Laser. Kartu senjata dari boss membuka senjata premium. Pilih petarung Ninja, Robot, atau Kunoichi, lalu tingkatkan HP, kekuatan, pertahanan, dan kecepatan. Ada Mode Kampanye dan Mode Tower tanpa akhir. Game ini gratis, menampilkan iklan berhadiah Google AdMob hanya jika Anda memilih menonton, dan punya pembelian dalam aplikasi lewat Google Play. Tanpa akun; progres disimpan di perangkat.",
      en: "Be a street fighter in Tarung Bebas. Start unarmed, find weapons on the street, and face waves of enemies across 7 arenas. Combos include punches, uppercuts, and flying kicks; you can grab enemies and slam or throw them. The game is 2.5D with 3 lanes: switch lanes to dodge or chase, climb poles, trees, walls, or crates, and smash obstacles. Weapons such as the sword, pistol, boomerang, kunai, and grenade can be upgraded to level 20; special weapons include Combat Drone, Laser, Bazooka, Sledgehammer, and Laser Sword. Weapon cards from bosses unlock premium weapons. Choose a Ninja, Robot, or Kunoichi fighter and upgrade HP, strength, defense, and speed. There is a Campaign mode and an endless Tower mode. The game is free, shows Google AdMob rewarded ads only if you choose to watch them, and has in-app purchases through Google Play. No account; progress is stored on the device."
    },
    notice: {
      id: "Untuk usia 13 tahun ke atas. Ada kekerasan kartun (anggota tubuh dapat terpotong, tanpa darah realistis).",
      en: "For ages 13 and up. Includes cartoon violence (limbs can be severed, without realistic blood)."
    }
  },
  {
    id: "vaultread",
    name: "VaultRead",
    packageName: "com.jalu.vaultread",
    icon: "icons/vaultread.png",
    group: "docs",
    badges: ["noAds", "oneTime", "onDevice"],
    testingEnabled: false,
    short: {
      id: "Baca chip e-paspor lewat NFC dan buka PDF terenkripsi, 100% offline. Tidak untuk e-KTP.",
      en: "Read e-passport chips over NFC and open encrypted PDFs, 100% offline. Not for Indonesian e-KTP."
    },
    long: {
      id: "VaultRead membaca chip e-paspor berstandar ICAO 9303 lewat NFC, membuka PDF terenkripsi, dan menyediakan brankas AES-256-GCM yang bisa Anda aktifkan jika perlu. Aplikasi ini tidak punya izin internet sama sekali: tanpa server, tanpa akun, tanpa iklan. Sekali beli, dengan uji coba 3 dokumen dan 3 pembacaan NFC. Tampilan tersedia dalam bahasa Indonesia, Inggris, dan Spanyol. Saat ini khusus Android; belum ada versi iOS.",
      en: "VaultRead reads ICAO 9303 e-passport chips over NFC, opens encrypted PDFs, and offers an optional AES-256-GCM vault. The app has no internet permission at all: no server, no account, no ads. It is a one-time purchase, with a trial of 3 documents and 3 NFC reads. The interface is available in Indonesian, English, and Spanish. Android only for now; there is no iOS version."
    },
    notice: {
      id: "e-KTP Indonesia tidak didukung. VaultRead dibuat untuk e-paspor (ICAO 9303).",
      en: "Indonesian e-KTP ID cards are not supported. VaultRead is made for e-passports (ICAO 9303)."
    }
  },
  {
    id: "docready",
    name: "DocReady",
    packageName: "id.docready.app",
    icon: "icons/docready.png",
    group: "docs",
    badges: ["noAds", "onDevice"],
    testingEnabled: false,
    short: {
      id: "Pindai dokumen dan ekspor pas dengan batas ukuran portal unggahan.",
      en: "Scan documents and export them to fit upload-portal size limits."
    },
    long: {
      id: "DocReady memindai dokumen lalu mengekspornya sesuai batas ukuran portal unggahan, misalnya PDF maksimal 200 KB. Gratis, tanpa iklan, tanpa watermark, tanpa akun, dan dokumen tetap di perangkat. Pemindaiannya memakai Google ML Kit Document Scanner yang berjalan di perangkat. Tersedia juga DocReady Pro sebagai pembelian sekali beli lewat Google Play.",
      en: "DocReady scans documents and exports them to the size limits that upload portals ask for, such as a PDF of at most 200 KB. It is free, with no ads, no watermark, and no account, and your documents stay on the device. Scanning uses Google ML Kit Document Scanner, which runs on the device. A DocReady Pro upgrade is also available as a one-time purchase on Google Play."
    }
  },
  {
    id: "focuscue",
    name: "FocusCue",
    playTitle: "FocusCue: Timer Fokus & Blokir",
    packageName: "id.focuscue.app",
    icon: "icons/focuscue.png",
    group: "work",
    badges: ["noAds", "oneTime", "onDevice"],
    testingEnabled: false,
    short: {
      id: "Timer fokus yang pasti berbunyi. Tugas, blokir aplikasi, tanpa iklan.",
      en: "A focus timer that always rings. Tasks, app blocking, no ads."
    },
    long: {
      id: "FocusCue adalah timer fokus ala Pomodoro yang alarm akhirnya dipegang oleh Android, jadi tetap berbunyi walau aplikasi ditutup atau ponsel dalam mode senyap. Ada pemeriksaan Alarm Health, pencatatan tugas, statistik 7 hari, dan pemblokir aplikasi opsional lewat Aksesibilitas. Pemblokir hanya membaca nama aplikasi yang sedang tampil dan tidak pernah memblokir telepon atau SMS. Tanpa iklan, tanpa akun, data di perangkat. Gratis: timer tanpa batas, 3 tugas, blokir 3 aplikasi, statistik 7 hari. Pro (sekali beli): tugas dan blokir tanpa batas, statistik lebih panjang, ekspor CSV.",
      en: "FocusCue is a Pomodoro-style focus timer whose end alarm is held by Android, so it rings even if the app is closed or the phone is on silent. It includes Alarm Health checks, task logging, 7-day stats, and an optional app blocker through Accessibility. The blocker only reads the name of the app in the foreground and never blocks calls or SMS. No ads, no account, data on the device. Free: unlimited timer, 3 tasks, block 3 apps, 7-day stats. Pro (one-time purchase): unlimited tasks and blocks, longer stats, CSV export."
    }
  },
  {
    id: "voicecue",
    name: "VoiceCue",
    playTitle: "VoiceCue: Teleprompter Suara",
    packageName: "id.voicecue.app",
    icon: "icons/voicecue.png",
    group: "work",
    badges: ["noAds", "oneTime"],
    testingEnabled: false,
    short: {
      id: "Teleprompter yang mengikuti suara Anda. Offline, tanpa iklan, sekali bayar.",
      en: "A teleprompter that follows your voice. Offline, no ads, pay once."
    },
    long: {
      id: "VoiceCue menggulir naskah dengan mencocokkan kata yang Anda ucapkan dengan teks, bukan menebak dari keras-pelannya suara. Pengenalan suara berjalan offline di perangkat, dalam bahasa Indonesia dan Inggris. Ada perekaman kamera di dalam aplikasi, teleprompter mengambang di atas aplikasi kamera lain, penanda naskah, dan mode cermin. Tanpa iklan. Gratis: gulir suara, kamera, penanda, 3 naskah hingga 600 kata, dan 3 sesi mengambang. Pro (sekali beli): naskah dan mode mengambang tanpa batas.",
      en: "VoiceCue scrolls your script by matching the words you speak to the text, not by guessing from how loud you are. Speech recognition runs offline on the device, in Indonesian and English. It has in-app camera recording, a floating teleprompter over other camera apps, script markers, and a mirror mode. No ads. Free: voice scroll, camera, markers, 3 scripts of up to 600 words, and 3 floating sessions. Pro (one-time purchase): unlimited scripts and floating mode."
    },
    notice: {
      id: "Gulir suara offline butuh Android 13 ke atas dan paket ucapan di perangkat dari Google.",
      en: "Offline voice scrolling needs Android 13 or newer and Google's on-device speech pack."
    }
  },
  {
    id: "trustbite",
    name: "TrustBite",
    packageName: "com.jalu.trustbite",
    icon: "icons/trustbite.png",
    group: "health",
    badges: ["noAds", "oneTime", "onDevice"],
    testingEnabled: false,
    short: {
      id: "Catat kalori dan nutrisi tanpa akun dan tanpa iklan, data tetap di perangkat.",
      en: "Track calories and nutrition with no account and no ads, data stays on the device."
    },
    long: {
      id: "TrustBite mencatat kalori dan nutrisi harian. Pemindai barcode dan OCR (Tesseract) berjalan di perangkat; pencarian ke Open Food Facts atau berbagi data ke sana hanya dilakukan dengan persetujuan Anda. Data makanannya mencakup USDA dan hidangan Indonesia. Tanpa akun, tanpa iklan, data tersimpan di perangkat. Fitur kesehatan inti gratis selamanya, dan ada pilihan sekali beli. Bahasa: Inggris (bawaan) dan Indonesia.",
      en: "TrustBite tracks your daily calories and nutrition. The barcode scanner and OCR (Tesseract) run on the device; looking up or sharing data with Open Food Facts only happens with your consent. Food data covers USDA entries and Indonesian dishes. No account, no ads, and your data is stored on the device. Core health features are free forever, with a one-time purchase available. Languages: English (default) and Indonesian."
    }
  },
  {
    id: "sehatku",
    name: "SehatKu",
    packageName: "id.sehatku.app",
    icon: "icons/sehatku.png",
    group: "health",
    badges: ["onDevice"],
    testingEnabled: false,
    short: {
      id: "Penghitung langkah dan catatan kesehatan, dengan data yang tetap di perangkat.",
      en: "A step counter and health log, with data that stays on the device."
    },
    long: {
      id: "SehatKu menghitung langkah Anda dan menyimpan catatan kesehatan. Data kesehatan yang dikumpulkan tidak dibagikan dan tidak keluar dari perangkat. Penghitung langkah butuh ponsel sungguhan (bukan emulator) dan meminta izin Aktivitas fisik (ACTIVITY_RECOGNITION).",
      en: "SehatKu counts your steps and keeps a health log. The health data it collects is not shared and does not leave the device. The step counter needs a real phone (not an emulator) and asks for the Physical activity permission (ACTIVITY_RECOGNITION)."
    }
  },
  {
    id: "merkato",
    name: "Merkato",
    playTitle: "Merkato POS: Inventory & Sales",
    packageName: "com.jalu.merkato",
    icon: "icons/merkato.png",
    group: "biz",
    badges: ["noAds", "onDevice"],
    testingEnabled: true,
    privacyUrl: "privacy/merkato.html",
    short: {
      id: "Aplikasi kasir offline, stok barang & laba untuk toko dan UMKM. Tanpa iklan.",
      en: "Offline point of sale, stock and profit for small shops. No ads, no account."
    },
    long: {
      id: "Merkato adalah aplikasi kasir (POS) dan pencatatan stok untuk toko, warung, kafe, dan grosir. Catat penjualan, jaga stok tetap benar, dan lihat laba sebenarnya dari HP. Bisa offline, tanpa akun, dan tanpa iklan. Ketuk produk atau scan barcode, terima berbagai metode bayar, cetak struk Bluetooth, catat pembelian dan pengeluaran, serta ekspor laporan ke PDF dan CSV. Data tersimpan di HP; cadangan ke folder pilihan Anda atau Google Drive milik Anda sendiri. Menjalankan toko gratis tanpa batas produk atau transaksi. Merkato Pro (paket tahunan atau sekali beli) menambah banyak cabang, saran belanja, margin, dan PDF bermerek.",
      en: "Merkato is a point of sale and inventory app for small shops, stalls, cafés and wholesalers. Ring up sales, keep stock right and see your real profit, all on your phone. It works offline, needs no account and shows no ads. Tap products or scan barcodes, take several payment methods, print Bluetooth receipts, record purchases and expenses, and export reports to PDF and CSV. Everything is stored on your phone; backups go to a folder you choose or to your own Google Drive. Running your shop is free with no limits on products or sales. Merkato Pro (yearly plan or pay once for lifetime) adds multiple locations, reorder suggestions, margins and branded PDFs."
    },
    notice: {
      id: "Merkato dipakai di satu HP atau tablet; belum ada sinkronisasi antarperangkat.",
      en: "Merkato runs on one phone or tablet at a time; there is no syncing between devices."
    }
  },
  {
    id: "mybisnis",
    name: "myBisnis",
    playTitle: "myBisnis: Catatan Usaha UMKM",
    packageName: "id.mybisnis.app",
    icon: "icons/mybisnis.png",
    group: "biz",
    badges: ["hasAds", "onDevice"],
    testingEnabled: false,
    short: {
      id: "Catat kas, stok & invoice usaha. Cetak struk kasir. Data aman di HP sendiri.",
      en: "Record cash, stock & invoices for your business. Print receipts. Data stays on your own phone."
    },
    long: {
      id: "myBisnis membantu UMKM mencatat kas harian, penjualan, pembelian, dan pengeluaran, mengelola stok, serta menyimpan buku pelanggan dan pemasok. Bisa mengirim lewat WhatsApp, membuat invoice dan PDF, mencetak struk di printer thermal Bluetooth (58/80 mm), dan menghitung cicilan. Data tersimpan di HP; cadangan ke WhatsApp atau Google Drive hanya dibuat saat Anda memintanya. Gratis dipakai, dengan pilihan untuk bebas iklan.",
      en: "myBisnis helps small businesses record daily cash, sales, purchases, and expenses, manage stock, and keep a customer and supplier book. It can share over WhatsApp, create invoices and PDFs, print receipts on a Bluetooth thermal printer (58/80 mm), and calculate installments. Data is stored on the phone; backups to WhatsApp or Google Drive are only made when you start them. Free to use, with an option to remove ads."
    }
  },
  {
    id: "bukurt",
    name: "BukuRT",
    packageName: "id.jalu.bukurt",
    icon: "icons/bukurt.png",
    group: "biz",
    badges: ["hasAds", "onDevice"],
    testingEnabled: false,
    short: {
      id: "Administrasi RT: data warga, kas, inventaris, arisan, undangan, dan RAB.",
      en: "Neighborhood (RT) admin: residents, cash, inventory, arisan, invitations, and budgets."
    },
    long: {
      id: "BukuRT membantu pengurus RT mengelola data warga, kas, inventaris, arisan, undangan, dan RAB (rencana anggaran biaya) dari satu aplikasi. Data tersimpan di perangkat. Versi gratis menampilkan iklan (Google AdMob).",
      en: "BukuRT helps neighborhood (RT) committees manage resident data, cash, inventory, arisan (rotating savings), invitations, and RAB budget plans in one app. Data is stored on the device. The free version shows ads (Google AdMob)."
    }
  },
  {
    id: "kalkulator-cicilan",
    name: "Kalkulator Cicilan",
    packageName: "com.jalu.kalkulatorcicilan",
    icon: "icons/kalkulator-cicilan.png",
    group: "biz",
    badges: ["hasAds", "onDevice"],
    testingEnabled: false,
    short: {
      id: "Hitung cicilan kredit motor, mobil, KPR & KTA. Bunga flat dan anuitas.",
      en: "Calculate installments for motorbike, car, mortgage (KPR) & personal (KTA) loans. Flat and annuity interest."
    },
    long: {
      id: "Kalkulator Cicilan menghitung perkiraan cicilan kredit motor, mobil, KPR, dan KTA dengan bunga flat maupun anuitas. Riwayat perhitungan tersimpan di perangkat dan hasilnya bisa dibagikan ke WhatsApp. Aplikasi ini menampilkan iklan (Google AdMob).",
      en: "Kalkulator Cicilan estimates installments for motorbike, car, mortgage (KPR), and personal (KTA) loans with flat or annuity interest. Calculation history is saved on the device and results can be shared to WhatsApp. This app shows ads (Google AdMob)."
    },
    notice: {
      id: "Hanya kalkulator: tidak menawarkan pinjaman dan tidak terhubung dengan pemberi pinjaman mana pun. Hasilnya perkiraan.",
      en: "Only a calculator: it does not offer loans and is not connected to any lender. Results are estimates."
    }
  },
  {
    id: "led-berjalan",
    name: "LED Berjalan",
    packageName: "id.ledberjalan.app",
    icon: "icons/led-berjalan.png",
    group: "led",
    badges: ["noAds", "oneTime"],
    testingEnabled: false,
    short: {
      id: "Papan LED berjalan layar penuh, 1 sampai 4 baris.",
      en: "A full-screen scrolling LED sign, 1 to 4 rows."
    },
    long: {
      id: "LED Berjalan mengubah layar ponsel menjadi papan LED berjalan layar penuh dengan 1 sampai 4 baris teks. Tanpa iklan; versi Pro tersedia sebagai pembelian sekali beli.",
      en: "LED Berjalan turns your phone screen into a full-screen scrolling LED sign with 1 to 4 rows of text. No ads; a Pro version is available as a one-time purchase."
    }
  },
  {
    id: "led-board",
    name: "LED Board",
    packageName: "id.ledboard.app",
    icon: "icons/led-board.png",
    group: "led",
    badges: ["oneTime"],
    testingEnabled: false,
    short: {
      id: "Papan skor, timer, info, dan kuis/polling, dikendalikan dari ponsel lain.",
      en: "A score, timer, info, and quiz/poll board, controlled from other phones."
    },
    long: {
      id: "LED Board menjadikan satu perangkat sebagai layar papan skor, timer, info, atau kuis dan polling, sementara perangkat lain mengendalikannya secara offline lewat Nearby dan Wi-Fi lokal. Pro tersedia sebagai pembelian sekali beli.",
      en: "LED Board makes one device the display for a scoreboard, timer, info board, or quiz and poll, while other devices control it offline over Nearby and local Wi-Fi. Pro is available as a one-time purchase."
    }
  },
  {
    id: "led-wall",
    name: "LED Wall",
    packageName: "id.ledwall.app",
    icon: "icons/led-wall.png",
    group: "led",
    badges: [],
    testingEnabled: false,
    short: {
      id: "Gabungkan beberapa ponsel menjadi satu dinding LED.",
      en: "Combine several phones into one LED wall."
    },
    long: {
      id: "LED Wall menyatukan beberapa ponsel menjadi satu dinding LED, terhubung secara offline lewat Nearby. Satu keluarga dengan LED Berjalan dan LED Board.",
      en: "LED Wall joins several phones into a single LED wall, connected offline over Nearby. Part of the same family as LED Berjalan and LED Board."
    }
  },
  {
    id: "english-ceria",
    name: "English Ceria",
    packageName: "id.englishceria.app",
    icon: "icons/english-ceria.png",
    group: "kids",
    badges: ["kids", "noAds", "oneTime"],
    testingEnabled: false,
    short: {
      id: "Belajar kosakata bahasa Inggris untuk anak TK: 211 kata, 4 permainan.",
      en: "English vocabulary for kindergarten kids: 211 words, 4 games."
    },
    long: {
      id: "English Ceria mengajak anak TK belajar bahasa Inggris lewat 13 kategori, 211 kata, dan 4 permainan. Versi gratis membuka 6 kata pertama di tiap kategori; versi lengkap dibuka dengan sekali beli di Google Play, di balik kunci orang tua. Tersedia juga untuk Android TV, dan ada lembar PDF A4 yang bisa dicetak. Tanpa iklan.",
      en: "English Ceria helps kindergarten children learn English with 13 categories, 211 words, and 4 games. The free version opens the first 6 words in each category; the full version is unlocked with a one-time Google Play purchase behind a parent gate. Also available on Android TV, with printable A4 PDF sheets. No ads."
    }
  },
  {
    id: "kamus-cilik",
    name: "Kamus Cilik",
    packageName: "id.kamuscilik.app",
    icon: "icons/kamus-cilik.png",
    group: "kids",
    badges: ["kids", "noAds"],
    testingEnabled: false,
    short: {
      id: "Kenal nama benda dalam bahasa Indonesia, Inggris, Arab, dan Mandarin.",
      en: "Learn object names in Indonesian, English, Arabic, and Mandarin."
    },
    long: {
      id: "Kamus Cilik membantu anak usia sekitar 3–8 tahun mengenal nama benda dalam bahasa Indonesia, Inggris, Arab, dan Mandarin, lengkap dengan gambar, suara per kata, serta cara baca pinyin dan Arab latin. Ada permainan tebak gambar dan kunci orang tua untuk pengaturan. Bisa dipakai di ponsel dan di Android TV dengan remote. Tanpa iklan, tanpa akun.",
      en: "Kamus Cilik helps children aged about 3–8 learn object names in Indonesian, English, Arabic, and Mandarin, with pictures, sound for each word, and pinyin and Latin-letter Arabic pronunciation. It has a guess-the-picture game and a parent lock for settings. Works on phones and on Android TV with a remote. No ads, no account."
    }
  },
  {
    id: "warna-ceria",
    name: "Warna-Warni Ceria",
    packageName: "id.warnaceria.app",
    icon: "icons/warna-ceria.png",
    group: "kids",
    badges: ["kids", "hasAds"],
    testingEnabled: false,
    short: {
      id: "Permainan warna untuk anak.",
      en: "A color game for kids."
    },
    long: {
      id: "Warna-Warni Ceria adalah permainan mengenal warna untuk anak. Versi gratis dapat menampilkan iklan yang ditujukan untuk anak (Google AdMob, child-directed), dengan pilihan sekali beli untuk menghapus iklan. Aplikasi ini disiapkan untuk program Designed for Families di Google Play.",
      en: "Warna-Warni Ceria is a color-learning game for kids. The free version may show child-directed ads (Google AdMob), with a one-time purchase to remove them. The app is being prepared for Google Play's Designed for Families program."
    }
  },
  {
    id: "pickora",
    name: "Pickora",
    playTitle: "Pickora: Spin Wheel & Picker",
    packageName: "com.jalu.pickora",
    icon: "icons/pickora.png",
    group: "util",
    badges: ["noAds", "oneTime", "onDevice"],
    testingEnabled: true,
    privacyUrl: "privacy/pickora.html",
    short: {
      id: "Undian nama acak: roda putar, slide nama, laporan arisan & jam layar penuh.",
      en: "Random name picker: spin the wheel, name slide & full-screen clock. No ads."
    },
    long: {
      id: "Pickora adalah aplikasi undian nama acak untuk kelas, tim, keluarga, dan arisan. Putar roda warna-warni atau biarkan nama bergulir di layar, dan Pickora memilih secara adil siapa giliran berikutnya. Ada juga jam digital layar penuh. Tanpa iklan, tanpa akun; daftar tersimpan di HP. Versi gratis menampung hingga 25 nama. Pickora Full, sekali beli tanpa langganan, menambah hingga 500 nama per daftar dan daftar tersimpan tanpa batas, laporan pemenang PDF, tema, bunyi, dan opsi jam.",
      en: "Pickora is a random name picker for classrooms, teams, families and savings clubs. Spin a colorful wheel or let names zoom across the screen, and Pickora fairly picks who's next. It also has a full-screen digital clock. No ads, no account; your lists stay on the phone. The free version handles up to 25 names. Pickora Full, a one-time purchase with no subscription, unlocks up to 500 names per list and unlimited saved lists, PDF winner reports, themes, sounds and clock options."
    }
  },
  {
    id: "tidy",
    name: "Tidy",
    playTitle: "Tidy: Asisten Penyimpanan",
    packageName: "id.tidy.app",
    icon: "icons/tidy.png",
    group: "util",
    badges: ["noAds", "oneTime", "onDevice"],
    testingEnabled: false,
    short: {
      id: "Pahami isi galeri, rapikan salinan & foto buram. Tanpa iklan, tanpa internet.",
      en: "Understand your gallery, clear out copies & blurry photos. No ads, no internet."
    },
    long: {
      id: "Tidy menemukan salinan persis, foto yang hampir sama, tangkapan layar lama, dan video besar. Tidy Pro juga menemukan foto beruntun (burst) serta foto buram atau gelap. Tidy tidak menghapus apa pun tanpa konfirmasi Anda, dan file yang dihapus masuk ke Sampah Android. Tanpa izin internet, tanpa iklan. Fitur dasar gratis; Tidy Pro sekali beli dan bisa dicoba dulu pada 3 file. Tidy tidak menjanjikan ponsel jadi lebih cepat atau membersihkan RAM — tugasnya membantu Anda memahami dan merapikan penyimpanan.",
      en: "Tidy finds exact copies, near-duplicates, old screenshots, and large videos. Tidy Pro also finds burst shots and blurry or dark photos. Tidy never deletes anything without your explicit confirmation, and deleted files go to the Android Trash. No internet permission, no ads. Base features are free; Tidy Pro is a one-time purchase you can try on 3 files first. Tidy does not promise to speed up your phone or clean RAM — it helps you understand and tidy up your storage."
    }
  },
  {
    id: "clapfinder",
    name: "ClapFinder",
    packageName: "com.jalu.clapfinder",
    icon: "icons/clapfinder.png",
    group: "util",
    badges: ["noAds", "oneTime", "onDevice"],
    testingEnabled: false,
    short: {
      id: "Temukan ponsel dengan tepuk tangan atau siulan.",
      en: "Find your phone with a clap or a whistle."
    },
    long: {
      id: "ClapFinder membantu menemukan ponsel yang terselip cukup dengan tepuk tangan atau siulan. Suara dianalisis langsung di perangkat lewat mikrofon; audio tidak disimpan dan tidak dikirim ke mana pun. Tanpa iklan, dengan pilihan sekali beli “ClapFinder selamanya”.",
      en: "ClapFinder helps you find a misplaced phone with just a clap or a whistle. Sound from the microphone is analyzed on the device; audio is never stored or sent anywhere. No ads, with a one-time “ClapFinder forever” purchase."
    }
  },
  {
    id: "verity",
    name: "Verity",
    packageName: "com.jalu.verity",
    icon: "icons/verity.png",
    group: "soon",
    badges: ["noAds", "oneTime"],
    testingEnabled: false,
    short: {
      id: "Pembaca OBD-II mobil dan penguji adaptor ELM327.",
      en: "A car OBD-II reader and ELM327 adapter tester."
    },
    long: {
      id: "Verity membaca data OBD-II mobil lewat adaptor ELM327 dan membantu menguji adaptornya. Saat ini mendukung adaptor Bluetooth Classic (SPP). Tanpa iklan, tanpa akun, tanpa langganan. Verity Pro, sekali beli, menambah dasbor kustom.",
      en: "Verity reads car OBD-II data through an ELM327 adapter and helps you test the adapter itself. It currently supports Bluetooth Classic (SPP) adapters. No ads, no account, no subscription. Verity Pro, a one-time purchase, adds a custom dashboard."
    },
    notice: {
      id: "Saat ini hanya adaptor Bluetooth Classic (SPP). Verity belum diuji di semua mobil; hasil bisa berbeda antar mobil dan adaptor.",
      en: "Bluetooth Classic (SPP) adapters only for now. Verity has not been tested with every car; results can vary by car and adapter."
    }
  }
];
