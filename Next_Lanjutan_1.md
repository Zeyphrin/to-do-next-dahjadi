## #% Petualangan Lanjut: Memahami Aplikasi To-Do List Lengkap

Panduan belajar lanjutan, dijelaskan secara detail dan super ramah seperti mengobrol dengan anak kelas 3 SD!

## Daftar Isi Petualangan

- \- . Peta Rahasia: Struktur Rumah Aplikasi Kita Saat Ini (#1-peta-rahasia-struktur-rumah-aplikasi- kita-saat-ini)

- nN . Mantra Sakti CRUD: 4 Jurus Utama Mengelola Tugas (#2-mantra-sakti-crud-4-jurus-utama- mengelola-tugas

- w . Robot Serbaguna: 1 Modal dengan 3 Kostum (Create, Edit, modal-dengan-3-kostum-create-edit-detail

- IN . Celengan Rahasia: Bagaimana LocalStorage Bekerja di Next.js (#4-celengan-rahasia- alstorage-bekerja-di-nextjs),

- . Misteri Layar Gelap: Cerita Teks cerita-teks-yang-sempat-hilang-di-dark-mode). Hilang_di Dark Mode (#5-misteri-layar-gelap-

- 0 Satpam Keyboard: Tombol Escape Penutup Modal penutup-modal) board-tombol I

- ~ . Bedah Kode Nyata Baris demi Baris (#7-bedah-kode-nyata-baris-demi-baris),

## 1. Peta Rahasia: Struktur Rumah Aplikasi Kita Saat Ini

Aplikasi To-Do List yang baru saja kita buat bersama-sama ibarat sebuah rumah bertingkat yang rapi:

```
src/
├── app/
│ ├── layout.js
```

\# Atap & Tembok Rumah: Menyediakan kerangka utama

```
dan Navbar
│ ├── page.js
```

\# Ruang Tamu Utama (Server Component): Menyambut

```
pengunjung
│ ├── about/page.js
```

\# Ruang Baca: Halaman informasi tentang aplikasi


```
│ └── globals.css # Cat Rumah: Warna tema terang dan gelap (Tailwind
CSS)
└── components/
├── Navbar.js # Pintu & Papan Petunjuk: Menunjuk ke halaman Tugas
atau About
├── TodoApp.js # Meja Belajar Utama: Otak yang mengatur daftar
tugas (Client Component)
└── TaskModal.js # Kotak Ajaib Popup: Jendela pop-up untuk Create,
Edit, dan Detail
```

- page.js TodoApp.js

- TodoApp.js

- TaskModal.js

|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   | + Tambah Tugas Baru |   |   |   |   |   |   |   |   |   |   |   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   | Hapus yang selesai |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |


## 3. Robot Serbaguna: 1 Modal dengan 3 Kostum (Create, Edit, Detail)

Kemarin kamu bertanya: "Kenapa form Create, Edit, dan Detail harus sama?"

Jawabannya: Itu cara kerja yang sangat pintar! Daripada kita membuat 3 form yang berbeda-beda dan membuat kode jadi berantakan, kita membuat 1 komponen modal

serbaguna bernama

TaskModal.js

ini seperti seorang robot aktor yang memiliki 3 kostum

Bayangkan berbeda:

TaskModal.js

- 1. Kostum Pertama: Mode create (Tambah Tugas Baru)

- Kapan muncul: Saat kamu menekan tombol besar + Tambah Tugas Baru di atas.

- dan bersih. di dalamnya: Semua kotak isian (nama tugas, deskripsi, prioritas) masih kosong

- Tombolnya: Batal dan Buat Tugas.

- 2. Kostum Kedua: Mode detail (Melihat Rincian)

- Kapan muncul: Saat kamu mengklik tulisan tugas atau tombol Detail.

- Isi di dalamnya: Robot tidak menampilkan kotak isian yang bisa diedit, melainkan menampilkan pameran rapi:

- o Nama tugas dengan huruf tebal.

- o Deskripsi catatan lengkap yang bisa dibaca santai.

- o Lencana prioritas (Penting atau Biasa).

- o Tanggal pembuatan tugas.


- Tombolnya: Tutup, Hapus Tugas Ini, dan tombol sakti Edit Tugas (yang langsung menyuruh robot berganti ke kostum ketiga!).

## w . Kostum Ketiga: Mode edit (Memperbaiki Tugas)

- « Kapan muncul: Saat kamu menekan tombol Edit di kartu tugas, atau saat kamu menekan tombol Edit Tugas dari dalam mode detail.

- « Isi di dalamnya: Kotak isian sudah otomatis terisi tulisan tugasmu yang lama, sehingga kamu tinggal mengubah huruf yang salah atau menambah deskripsi baru.

- Tombolnya: Batal dan Simpan Perubahan.

## 4. Celengan Rahasia: Bagaimana LocalStorage Bekerja di Next.js

Bayangkan kamu punya celengan rahasia di bawah kasur kamarmu. Celengan itu bernama LocalStorage. Setiap kali kamu menulis tugas baru, komputermu memasukkan kertas catatan ke dalam celengan tersebut.

## Kenapa Data Tidak Hilang Saat Halaman di-Refresh?

Karena sebelum browser memuat ulang halaman, catatanmu sudah tersimpan aman di celengan komputermu!

```
// Membuka celengan dan membaca isinya saat web baru dibuka:
const dataTersimpan = localStorage.getItem("to-do-next-tasks");
// Memasukkan catatan baru ke celengan:
localStorage.setItem("to-do-next-tasks", JSON.stringify(tasks));
```

## Cerita Seru: Masalah "Lampu Kamar Belum Dinyalakan" (Hydration Mismatch)

Di Next.js, ada aturan unik:

- 1. Server Next.js bertugas merakit halaman pertama kali di tempat yang jauh.

- 2. Server itu tidak bisa melihat celengan di bawah kasur laptopmu (karena celengan itu ada di browsermu, bukan di server!).

- 3. Kalau Server mencoba membaca celengan yang tidak ada, web akan bingung dan berteriak error: “Loh, data di server kok beda dengan data di browsermu!".


```
isLoaded useEffect
const [isLoaded, setIsLoaded] = useState(false);
useEffect(() => {
// Kode di dalam sini HANYA berjalan setelah web sampai di browsermu!
// Seperti menunggu lampu kamar dinyalakan baru membuka celengan.
const saved = localStorage.getItem("to-do-next-tasks");
if (saved) {
setTasks(JSON.parse(saved));
}
setIsLoaded(true);
}, []);
```

- dark:bg-slate-900

- dark:text-slate-100

- white focus:bg-

```
<!-- Kita beritahu Tailwind: -->
```


```
<!-- Saat diklik di mode gelap, latarnya HARUS TETAP GELAP (dark:focus:bg-
slate-950) -->
<input
class="... focus:bg-white dark:bg-slate-900 dark:text-slate-100
dark:focus:bg-slate-950"
/>
useEffect(() => {
const handleKeyDown = (e) => {
// Kalau pengguna menekan tombol Escape di ujung kiri atas keyboard:
if (e.key === "Escape" && isOpen) {
onClose(); // Tutup popup seketika!
}
};
window.addEventListener("keydown", handleKeyDown);
return () => window.removeEventListener("keydown", handleKeyDown);
}, [isOpen, onClose]);
```

Esc

```
// 1. Ini wadah untuk mencatat apakah modal sedang buka, modenya apa, dan tugas
mana yang dipilih:
const [modalState, setModalState] = useState({
isOpen: false, // Apakah jendela popup sedang terbuka? (true / false)
```


```
mode: "create", // Sedang pakai kostum apa? ("create", "edit", atau
"detail")
task: null, // Tugas mana yang sedang dipajang?
});
// 2. Fungsi saat tombol "+ Tambah Tugas Baru" ditekan:
const openCreateModal = () => {
setModalState({
isOpen: true,
mode: "create",
task: null,
});
};
// 3. Fungsi saat kartu tugas diklik untuk melihat detail:
const openDetailModal = (task) => {
setModalState({
isOpen: true,
mode: "detail",
task: task,
});
};
// 4. Fungsi saat tombol "Edit" ditekan:
const openEditModal = (task) => {
setModalState({
isOpen: true,
mode: "edit",
task: task,
});
};
```

modalState

- create detail edit


- 4. Hydration Safe: Kita menunggu lampu kamar dinyalakan ( membuka celengan agar server tidak bingung. useEffect ) sebelum

- 5. Tombol Escape: Memudahkan siapa saja menutup jendela popup dengan satu sentuhan jari di keyboard.

Catatan: Pembahasan tentang Route Handler dan API Server akan kita simpan di laci rahasia terlebih dahulu, dan baru akan kita buka saat kamu ingin membuat koneksi API nanti!
