# 🍽️ Sistem Pemesanan Restoran

Sistem Pemesanan Restoran adalah aplikasi sederhana berbasis **React.js** (Frontend) dan **Express.js** (Backend) yang memungkinkan pengguna untuk memesan makanan dan minuman, menghitung total pembayaran secara otomatis termasuk **pajak**, **diskon**, serta menyimpan **data struk**.

---
## 🛠️ Cara Menjalankan Aplikasi
### 1. clone repository :
```
git clone
```
### 2. menjalankan back-end :
```
cd back-end
npm install
npm run back-end
```
### 3. menjalankan front-end :
```
cd front-end
npm install
npm run front-end
```

## 🚀 Fitur Utama

### REST API
- **GET `localhost:3001/menu`**  
  Mengirimkan data semua menu makanan dan minuman ke frontend.
```json
[
  { "id": 1, "nama": "Nasi Goreng", "harga": 25000 },
  { "id": 2, "nama": "Mie Ayam", "harga": 18000 },
  { "id": 3, "nama": "Es Teh", "harga": 5000 },
  { "id": 4, "nama": "Jus Alpukat", "harga": 15000 }
]
```

- **POST `localhost:3001/order`**  
  Menerima data pesanan dari frontend, lalu mengembalikan:
  - Total harga pesanan
  - Pajak sebesar **10%**
  - Diskon **10%** jika total pesanan sebelum pajak lebih dari **Rp50.000**
  yang sudah di hitung otomatis.

request :
```json
{
  "pesanan": [1, 2, 3, 1]
}
```

respon : 
```json

{
    "pesanan": [
        {
            "id": 1,
            "nama": "Nasi Goreng",
            "harga": 25000
        },
        {
            "id": 2,
            "nama": "Mie Ayam",
            "harga": 18000
        },
        {
            "id": 3,
            "nama": "Es Teh",
            "harga": 5000
        },
        {
            "id": 1,
            "nama": "Nasi Goreng",
            "harga": 25000
        }
    ],
    "subtotal": 73000,
    "diskon": 7300,
    "pajak": 6570,
    "total": 72270
}
```


### Menampilkan daftar menu makanan dan minuman
Data yang ditampilkan diambil melalui endpoint API dari back-end(`/menu`).

![image](https://github.com/user-attachments/assets/5f680bfc-8532-4db4-b038-0ac558e78e06)

---

### Dapat memilih beberapa menu yang ingin dipesan.
Klik **Tombol "Pesan"** untuk memesan menu yang diinginkan.

![image](https://github.com/user-attachments/assets/2afb4622-a8e4-47ec-95fa-2e6697877271)

---

### Menampilkan total harga otomatis, termasuk pajak dan diskon.
**Tombol "Kirim Pesanan"** untuk mengirim data pesanan ke back-end (`/order`).

  ![image](https://github.com/user-attachments/assets/a8fba165-5944-42e5-a2eb-53d9b96ee5c8)
  
---

## 📒 Fitur Bonus

### Menampilkan **struk pesanan** yang berisi:
  - Daftar pesanan
  - Total harga
  - Pajak
  - Diskon
    
  ![image](https://github.com/user-attachments/assets/18dc6cd5-ceb6-4a3e-bae4-21df028f206e)

---

### **menghapus atau membatalkan** pesanan yang sudah dipilih.
Klik **Tombol "-"** untuk membatalkan menu makanan/minuman yang dipesan.

![image](https://github.com/user-attachments/assets/5f680bfc-8532-4db4-b038-0ac558e78e06)

---

### **Tombol "Simpan Struk"** akan menyimpan data struk dalam format json.
  ![image](https://github.com/user-attachments/assets/18dc6cd5-ceb6-4a3e-bae4-21df028f206e)

---


