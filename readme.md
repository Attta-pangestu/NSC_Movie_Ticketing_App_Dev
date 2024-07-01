# Dokumentasi Proyek NSC Movie Ticketing App

## Deskripsi Proyek

**NSC Movie Ticketing App** adalah aplikasi yang dirancang untuk memudahkan pengguna dalam mendapatkan informasi film, memberikan ulasan, menambah film ke daftar favorit dan watchlist, serta memesan tiket bioskop dengan mudah. Aplikasi ini bertujuan untuk memberikan pengalaman menonton yang komprehensif dan memuaskan bagi pengguna.

## Latar Belakang

Bioskop NSC X Meirobie di Belitung adalah bioskop modern yang baru dibuka setelah hampir 22 tahun tidak ada bioskop di wilayah tersebut. Bioskop ini memiliki dua studio dengan kapasitas masing-masing 224 penonton. Terletak di Jl. Pilang, Desa Dukong, Kecamatan Tanjung Pandan, Kabupaten Belitung, Kepulauan Bangka Belitung.

**Masalah yang Dihadapi:**

1. Bioskop selalu ramai.
2. Penonton dari luar daerah kesulitan memesan tiket.
3. Kurangnya informasi tentang film yang sedang tayang.
4. Penonton tidak dapat mengetahui jadwal tayang film secara efisien.

**Solusi:** NSC Movie Ticketing App hadir untuk mengatasi masalah-masalah ini dengan memberikan berbagai fitur yang memudahkan pengguna dalam mendapatkan informasi dan memesan tiket.

## Fitur Utama

1. **Informasi Film Komprehensif:** Menyediakan detail lengkap tentang film, termasuk sinopsis, trailer video, dan ulasan pengguna.
2. **Kemudahan untuk Memberikan Suka dan Watchlist:** Pengguna dapat menandai film favorit dan menambahkannya ke daftar watchlist.
3. **Ulasan Film:** Pengguna dapat membaca dan memberikan ulasan tentang film.
4. **Kemudahan Booking dan Menentukan Lokasi Nonton:** Pemesanan tiket yang mudah dengan pilihan kursi, tanggal, dan waktu tayang.

## Struktur Proyek dan Teknologi yang Digunakan

### Struktur Direktori

- **./assets**: Berisi aset seperti gambar dan font.
  - **./assets/preview-app/**: Lokasi gambar preview aplikasi.
  - **./assets/fonts/**: Font yang digunakan dalam aplikasi.
- **./components**: Lokasi komponen utama aplikasi.
  - **./components/SubMovieCard**
  - **./components/InputHeader**
  - **./components/AppHeader**
  - **./components/MovieCard**
  - **./components/ActorCast**
  - **./components/CategoryHeader**
- **./navigator**: Berisi konfigurasi navigasi.
- **./screens**: Lokasi layar atau halaman utama aplikasi.
  - **./screens/HomeScreen**
  - **./screens/SearchScreen**
  - **./screens/SplashScreen**
  - **./screens/BookingSeatScreen**
  - **./screens/MovieDetailScreen**
    - **./screens/MovieDetailScreen/_component**
  - **./screens/UserProfileScreen**
  - **./screens/FavoritesScreen**
  - **./screens/TicketScreen**
  - **./screens/LoginScreen**
  - **./screens/BookmarkScreen**
  - **./screens/RegisterScreen**
- **./server**: Berisi file terkait server.
- **./utils**: Berisi utilitas dan fungsi pembantu.
- **./.vscode**: Konfigurasi untuk Visual Studio Code.
  - **./.vscode/.react**
- **./.expo**: Konfigurasi untuk Expo.
- **./theme**: Berisi tema dan gaya aplikasi.
- **./api**: Berisi file terkait API.
  - **./api/transaction**

### Library yang Digunakan dan Fungsinya

1. **@expo-google-fonts/poppins**: Menggunakan font Poppins dari Google Fonts.
2. **@expo/vector-icons**: Ikon vektor untuk aplikasi.
3. **@react-native-async-storage/async-storage**: Penyimpanan asinkron untuk data lokal.
4. **@react-navigation/bottom-tabs**: Navigasi tab bawah.
5. **@react-navigation/native**: Navigasi inti untuk aplikasi React Native.
6. **@react-navigation/native-stack**: Stack navigasi.
7. **@rneui/base**: Komponen UI dasar dari React Native Elements.
8. **@rneui/themed**: Tema untuk komponen UI dari React Native Elements.
9. **axios**: Melakukan request HTTP ke server backend.
10. **body-parser**: Middleware untuk parsing body request.
11. **expo**: Framework dan platform universal untuk React apps.
12. **expo-app-loading**: Menampilkan layar loading saat aplikasi sedang memuat.
13. **expo-font**: Mengelola font kustom di Expo.
14. **expo-linear-gradient**: Membuat linear gradient di React Native.
15. **expo-linking**: Menangani deep linking di aplikasi.
16. **expo-secure-store**: Penyimpanan aman untuk data sensitif.
17. **expo-status-bar**: Mengatur status bar di aplikasi.
18. **express**: Framework server untuk Node.js.
19. **firebase**: Otentikasi, otorisasi, dan penyimpanan data pengguna.
20. **midtrans-client**: Gateway pembayaran untuk Midtrans.
21. **react**: Library JavaScript untuk membangun antarmuka pengguna.
22. **react-native**: Framework untuk membangun aplikasi mobile.
23. **react-native-elements**: Komponen UI untuk React Native.
24. **react-native-heroicons**: Ikon hero untuk React Native.
25. **react-native-linear-gradient**: Membuat linear gradient.
26. **react-native-modal**: Komponen modal untuk React Native.
27. **react-native-paper**: Komponen UI dengan desain material untuk React Native.
28. **react-native-screens**: Manajemen layar untuk navigasi.
29. **react-native-star-rating**: Komponen untuk rating bintang.
30. **react-native-svg**: Mendukung SVG untuk React Native.
31. **react-native-webview**: Menampilkan konten web dalam aplikasi.
32. **react-native-youtube-iframe**: Memutar video YouTube dalam aplikasi.
33. **uuid**: Untuk menghasilkan UUID.

### Penjelasan Komponen Utama

1. **Category Component**: Menampilkan kategori film yang dapat ditelusuri oleh pengguna.
2. **Review Component**: Menampilkan ulasan film dari pengguna lain.
3. **YouTube Player**: Memutar trailer video film.

### Penjelasan Layar Utama

1. **Login Screen**: Halaman masuk pengguna.
2. **Home Screen**: Halaman utama yang menampilkan film-film terbaru dan populer.
3. **Movie Detail Screen**: Halaman yang menampilkan detail film, termasuk sinopsis, trailer, dan ulasan.
4. **Booking Screen**: Halaman untuk memesan tiket, memilih kursi, tanggal, dan waktu tayang.
5. **Payment Screen**: Halaman pembayaran dengan Midtrans.
6. **Favorite Screen**: Halaman yang menampilkan film favorit pengguna.
7. **Watchlist Screen**: Halaman yang menampilkan daftar watchlist pengguna.

## Preview Aplikasi

### Preview 1

![Preview 1](./assets/preview-app/preview-1.jpg)

**Terdapat Halaman:**
- Login Screen
- Home Screen
- Category Film

### Preview 2

![Preview 2](./assets/preview-app/preview-2.jpg)

**Terdapat Halaman:**
- Movie Detail Screen (Summary, Video Trailer, Review)
- Aksi Watchlist
- Aksi Suka
- Booking Screen (Bisa memilih kursi, menentukan tanggal, dan memilih jam)

### Preview 3

![Preview 3](./assets/preview-app/preview-3.jpg)

**Terdapat Halaman:**
- Pembayaran dengan Midtrans Gateway (terbuka Snap pembayarannya)
- Favorite Movie Screen
- Watchlist Movie Screen

## Kontributor dan Fitur yang Dikerjakan

1. **ATHA RIZKI PANGESTU**
   - Home Screen
   - Movie Detail Screen
   - Ticketing Screen
   - Booking Seat Screen
   - Pembuatan dan Integrasi Payment Gateway Midtrans
   - Splashscreen
   - Pembuatan Layout dan Desain Aplikasi
2. **RAHMAT HIDAYAT**
   - Favorite Screen
   - Bookmark Screen
   - Login Screen
   - User Profile
   - Otentikasi dan Otorisasi dengan Firebase
3. **THEO SAMUEL DICUNAWI ARITONANG**
   - Category Component
   - Review Component
   - YouTube Player
4. **DIKA RIZKY AKBAR**
   - Pembuatan Endpoint
   - Fetching Fungsi
   - Search Screen
   - Splash Screen

## Pengaturan dan Konfigurasi

File `package.json` berisi informasi penting tentang proyek dan dependensi yang digunakan. Pastikan untuk menginstall semua dependensi menggunakan perintah:

```bash
npm install
```

atau

```bash
yarn install
```

Setelah itu, Anda dapat memulai aplikasi dengan perintah:

```bash
npm start
```

atau

```bash
yarn start
```


