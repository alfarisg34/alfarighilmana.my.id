# Deployment & Custom Domain Guide: Hostinger to Vercel

Panduan langkah demi langkah menghubungkan repositori portfolio ini ke **Vercel** dan mengatur domain kustom **`alfarighilmana.my.id`** yang telah dibeli di **Hostinger**.

---

## 1. Push Codebase ke GitHub

1. Buka terminal di direktori proyek ini:
   ```bash
   cd c:\Me\Code\alfarighilmana.my.id
   ```

2. Inisialisasi Git dan lakukan commit pertama:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for Alfarighilmana portfolio website"
   ```

3. Buat repositori baru di GitHub (misal: `alfarighilmana.my.id` atau `portfolio`) di akun Anda (`https://github.com/alfarisg34`).

4. Hubungkan remote dan push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/alfarisg34/alfarighilmana.my.id.git
   git push -u origin main
   ```

---

## 2. Deploy di Vercel

1. Buka [Vercel Dashboard](https://vercel.com/dashboard) dan login menggunakan akun GitHub Anda.
2. Klik tombol **"Add New..."** > **"Project"**.
3. Pilih repositori **`alfarisg34/alfarighilmana.my.id`** dan klik **"Import"**.
4. Di bagian **Framework Preset**, biarkan sebagai **Other** (karena ini adalah static web modern HTML5/CSS3/JS tanpa compiler berat).
5. Klik **"Deploy"**.
6. Dalam hitungan detik, website Anda akan live dengan URL default (misal: `alfarighilmana.vercel.app`).

---

## 3. Tambahkan Custom Domain di Vercel

1. Pada halaman proyek Vercel Anda, buka **Settings** > **Domains**.
2. Masukkan domain:
   - `alfarighilmana.my.id`
   - `www.alfarighilmana.my.id` (pilih opsi redirect otomatis ke `alfarighilmana.my.id`).
3. Vercel akan menampilkan status *Pending / Invalid Configuration* dan memberikan DNS record yang dibutuhkan.

---

## 4. Konfigurasi DNS di Hostinger hPanel

1. Buka [Hostinger hPanel](https://hpanel.hostinger.com) dan login ke akun Anda.
2. Masuk ke menu **Domains** > pilih **`alfarighilmana.my.id`**.
3. Di sidebar sebelah kiri, klik **DNS / Name Servers** (atau **DNS Zone**).
4. Tambahkan / sesuaikan 2 DNS Record berikut:

### Record 1: A Record (Apex Domain)
| Field | Nilai |
| :--- | :--- |
| **Type** | `A` |
| **Name / Host** | `@` |
| **Points to / Value** | `76.76.21.21` |
| **TTL** | `300` (atau biarkan default Hostinger 14400) |

> *Catatan: Jika sudah ada A record `@` default dari Hostinger (misal mengarah ke IP parkir Hostinger), edit atau hapus record tersebut dan ganti dengan `76.76.21.21`.*

### Record 2: CNAME Record (Subdomain WWW)
| Field | Nilai |
| :--- | :--- |
| **Type** | `CNAME` |
| **Name / Host** | `www` |
| **Points to / Target** | `cname.vercel-dns.com` |
| **TTL** | `300` (atau biarkan default 14400) |

5. Klik **"Add Record"** / **"Save"**.

---

## 5. Verifikasi & Sertifikat SSL Otomatis

- Propagasi DNS biasanya memakan waktu antara **5 menit hingga 1 jam** (maksimal 24 jam tergantung ISP).
- Setelah DNS terdeteksi, Vercel akan otomatis menerbitkan sertifikat **SSL (HTTPS)** gratis dari Let's Encrypt.
- Buka browser dan akses **`https://alfarighilmana.my.id`** untuk memastikan website portfolio Anda sudah aktif!
