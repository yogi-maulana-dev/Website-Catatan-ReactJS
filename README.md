
# APLIKASI ARSIP

# NotesApp

NotesApp adalah aplikasi untuk mengelola catatan dengan fitur pencarian, penyimpanan, pengarsipan, dan pengeditan catatan. Aplikasi ini dibuat menggunakan **React.js** dan menerapkan prinsip **controlled component** untuk menangani input form. Aplikasi ini memungkinkan pengguna untuk menambahkan catatan dengan judul yang dibatasi hingga 50 karakter, mengedit catatan, mengarsipkan catatan, dan banyak lagi.

## Fitur Utama
- **Menambah catatan baru**: Pengguna dapat membuat catatan dengan judul dan isi yang dapat diedit.
- **Mengedit catatan**: Pengguna dapat mengedit catatan yang telah ada.
- **Menghapus catatan**: Pengguna dapat menghapus catatan yang tidak diperlukan.
- **Mengarsipkan catatan**: Pengguna dapat mengarsipkan catatan dan melihat catatan yang telah diarsipkan.
- **Pencarian catatan**: Pengguna dapat mencari catatan berdasarkan judul.
- **Menampilkan jumlah karakter tersisa**: Saat menambahkan judul, aplikasi akan menampilkan jumlah karakter yang tersisa (maksimal 50 karakter).

## Tombol Aksi pada Setiap Catatan
- Delete (Merah): Fungsi: Menghapus catatan dari daftar.
Ditekan ketika pengguna ingin menghapus catatan yang sudah ada.
- Edit (Biru):
Fungsi: Mengedit catatan yang sudah ada.
Ditekan ketika pengguna ingin mengubah judul atau isi catatan.
- Arsipkan (Kuning):
Fungsi: Mengarsipkan catatan. Catatan yang diarsipkan akan disembunyikan dari daftar utama tetapi tetap ada dalam sistem.
Ditekan ketika pengguna ingin menyimpan catatan tanpa menghapusnya.

- Cari Catatan: Pengguna dapat mencari catatan berdasarkan judul atau isi catatan dengan mengetikkan kata kunci dalam kotak pencarian.

## Fitur Opsional
- Batasi panjang karakter untuk judul catatan hingga **50 karakter**.
- Menampilkan **alert** jika pengguna mencoba memasukkan judul lebih dari 50 karakter.
- **Menampilkan karakter tersisa** yang dapat digunakan saat mengisi judul catatan.

## Prasyarat
Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) dan [npm](https://www.npmjs.com/) di komputer Anda.

## Cara Menjalankan Aplikasi

### Langkah-langkah untuk Menjalankan


1. **Prasyarat**: Memberikan informasi yang jelas bahwa pengguna perlu menginstal Node.js dan npm terlebih dahulu.
2. **Clone Repository**: Langkah pertama yang harus dilakukan adalah meng-clone repository ke komputer lokal.
3. **Instal Dependensi**: Menggunakan `npm install` untuk menginstal dependensi yang diperlukan agar aplikasi bisa berjalan.
4. **Jalankan Aplikasi**: Menggunakan `npm run dev` untuk menjalankan aplikasi di server lokal.
5. **Membangun untuk Produksi**: Menyediakan instruksi jika pengguna ingin membangun aplikasi untuk digunakan di produksi dengan `npm run build`.
6. **Struktur Proyek**: Memberikan gambaran tentang struktur proyek agar pengguna bisa memahami di mana letak file penting dan fungsinya.
   
Dengan instruksi di atas, pengguna baru dapat dengan mudah mengatur dan menjalankan aplikasi `NotesApp` di lingkungan lokal mereka.


