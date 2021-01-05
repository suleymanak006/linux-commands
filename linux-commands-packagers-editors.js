1. sudo apt update   //Linux program repositorysini guncelledik
2. sudo apt upgrade  //Kurulu programlari guncelledik
3. sudo snap install --classic code  // Snap packageri ile Visual Studio Code programini kurduk.
4. wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb //Chrome browseri indirdik
- sudo apt install ./google-chrome-stable_current_amd64.deb //Kurup calistirdik.
5. sudo snap install libreoffice  //LibreOffice 7.0 programini snap packager ile kurduk.
-writer'i inceleyip word.docx dosyasi olusturduk.
calc i inceleyip excel.xlxs dosyasini olusturduk. 
6. sudo adduser solo // solo adinda bir kullanici ekledik
-  sudo adduser hicoders // hicoders adinda bir grup olusturduk.
7. sudo apt install vim // ile ilk once Vim editorunu kurduk
esc tusuna ardindan : wq //dosya olusturduk icine bir metin yazdik ve kaydedip ciktik.
8. nano app.js //Nano editoru app.js dosyasini olusturduk. CTR+O ile kaydedip CTRL+X ile ciktik.
9. sudo chown solo:Hicoders ./app.js // dosyasinin sahibini yenii ekledigimiz kullanici ve grup olarak degistirdik.
10. chmod u=rwx,og=rwx index.html //dosyaya user, group ve others icin okuma, yazma ve calistirma (read, write, execute) hakki verdik.
11. ls -l index.html//Verdigimiz yetkileri detayli liste ile kontrol ettik.
12. alias: komut olusturmaya yariyor.
df: sistemde ne kadar yer kullanildigini gosteriyor.
history:kullanilan komutlari gosterir.
date:sistemin tarih ve saatini gosterir.
grep: text icinde aranilan kelimenin bulunmasini saglar.
ps: calisan islemcileri gosterir.
kill: istenilen islemciyi durdurur.
tar: dosyalarin depolanmasini ve onlarin kullanilmasini saglar
top:sistem yoneticisi olarak kullanilan kaynaklari goruntuler.
du: dosyalarin ne kadar yer kapladigini gosterir.
head:dosyanin baslangic kismini gosterir.
tail:Dosyanin son kismini gosterir.
wget:nternetten dosya indirmeyi sağlayan bir komuttur.
find: aranilan dosya ile ilgili bilgilere ulasilmasini saglar.
