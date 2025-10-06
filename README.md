# 🔑 Random Password Generator (JS)

Ini adalah script Node.js sederhana yang kubikin buat yang butuh password acak dan kuat! Cepat, mudah dipakai, dan kamu bisa atur panjang serta jenis karakter di dalamnya. 🚀

## ✨ Fitur Unggulan

- **📏 Panjang Kustom:** Tentukan sendiri seberapa panjang password yang kamu mau (angka wajib!).
- **🔢 Fleksibilitas Angka:** Pilihan untuk menyertakan angka (0−9).
- **⚙️ Pilihan Simbol:** Pilihan untuk menyertakan simbol (!@#%^$ dan kawan-kawan).
- **🔡 Default Aman:** Huruf kecil (a−z) dan huruf besar (A−Z) selalu disertakan.

## 🛠️ Persiapan Awal (Prerequisites)

Sebelum run codenya, pastikan kamu udah siapin ini:
1. Node.js: Sudah ter-install di komputermu.
2. **readline-sync**: Package ini wajib ada karena kita butuh buat ambil input dari terminal.

   Cara Installnya:
   ```bash
   npm install readline-sync
   ```

## 🏃 Cara Penggunaan

1. Buka terminal atau Command Prompt.
2. Arahkan ke folder tempat script ini disimpan.
3. Jalankan program dengan perintah:
   ```bash
   node randompassgen.js
   ```
4. Ikuti aja deh pertanyaannya:
   - Masukkan panjang password yang diinginkan.
   - Mau sertakan angka? (Jawab Y/N).
   - Mau sertakan simbol? (Jawab Y/N).
5. Password kerenmu langsung muncul di layar! Selamat mencoba! 🎉

## 🧐 Sedikit Intip Cara Kerja
Secara singkat, script ini mengumpulkan semua karakter yang kamu pilih ke dalam satu "kolam" besar yang disebut poolOfKeys. Nah, kemudian program akan mengocok dan mengambil karakter acak dari "kolam" itu sebanyak panjang password yang kamu minta. Gak pakai ribet! 😉
