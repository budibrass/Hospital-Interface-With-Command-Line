# Hospital-Interface-With-Command-Line

NOTES: Kamu diminta untuk membuat APP HOSPITAL INTERFACE sederhana dan masih menggunakan Command Line (process.argv), dengan menggunakan pattern MVC dan Callback. Disini belum menggunakan framework apapun karena kita masih berfokus pada pemahaman PATTERN MVC dan Callback nya. Disini diberikan data.json sebagai media atau database untuk kita menyimpan data.

Case : 
- user dapat melakukan Register dengan memasukkan nama dan role nya
- user dapat login, ketika user sudah login maka user lain tidak bisa login lagi, kecuali si user yang telah login tadi telah logout
- hanya yang mempunya role dokter yang bisa menambahkan patient

Release 0 *** IMPLEMENET HELP COMMAND *** => Buat lah code untuk semua perintah yang akan dijalankan

Release 1 *** IMPLEMENET REGISTER COMMAND *** => Buat lah code untuk membuat akun baru dengan memasukkan nama dan role file data.json

Release 2 *** IMPLEMENET LOGIN COMMAND *** => Buat lah code agar USER dapat login, dengan memasukkan username dan password nya

Release 3 *** IMPLEMENET ADDPATIENT COMMAND *** => Buat lah code untuk menambahkan patient baru ke dalam file patient.json, yang bisa menambahkan patient hanyalah user yang sudah LOGIN dan mempunyai ROLE DOKTER

Release 4 *** IMPLEMENET LOGOUT COMMAND *** => Buat lah code agae user yang sudah Login bisa melakukan Logout


How To Run This App
node app.js help => you can follow any instructions in help