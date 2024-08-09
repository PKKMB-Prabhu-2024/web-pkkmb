const facultyNameElement = document.getElementById("fakultas-name");
const facultyDescElement = document.getElementById("fakultas-desc");
const facultyImageElement = document.getElementById("fakultas-img");
const facultyCard = document.getElementById("fakultas-card")

const facultyPrevButton = document.getElementById("fakultas-prev");
const facultyNextButton = document.getElementById("fakultas-next");

let i = 0;

const facultyNames = [
  "Fakultas Ilmu Budaya",
  "Fakultas Kedokteran",
  "Fakultas Peternakan",
  "Fakultas Hukum",
  "Fakultas Teknik",
  "Fakultas Ekonomi dan Bisnis",
  "Fakultas Pertanian",
  "Fakultas Matematika dan Ilmu Pengetahuan Alam",
  "Fakultas Kedokteran Hewan",
  "Fakultas Teknologi Pertanian",
  "Fakultas Pariwisata",
  "Fakultas Ilmu Sosial dan Ilmu Politik",
  "Fakultas Kelautan dan Perikanan",
];

const facultyDescriptions = [
  "Fakultas Ilmu Budaya, yang dulu dikenal sebagai Fakultas Sastra merupakan cikal bakal dari Universitas Udayana yang didirikan pada 29 September 1958. Saat ini Fakultas Ilmu Budaya memiliki 8 program studi S1 yaitu Program Studi Sastra Inggris, Sastra Jepang, Sastra Indonesia, Sastra Jawa Kuna, Sastra Bali, Arkeologi, Antropologi Budaya, dan Ilmu Sejarah.",
  "Fakultas Kedokteran yang didirikan pada tanggal 17 Agustus 1962 merupakan Fakultas Kedokteran pertama di Bali, Fakultas Kedokteran Universitas Udayana memiliki 6 Program Studi S1, yaitu Kedokteran Umum, Kedokteran Gigi, Psikologi, Ilmu Keperawatan, Kesehatan Masyarakat, dan Fisioterapi.",
  "Fakultas Peternakan didirikan pada 19 Agustus 1963 yang pada awalnya memiliki nama Fakultas Kedokteran Hewan dan Peternakan. Fakultas Peternakan memiliki satu program studi S1 yaitu Program Studi Peternakan.",
  "Fakultas Hukum, pada awalnya memiliki nama Fakultas Hukum dan Pengetahuan Masyarakat yang didirikan pada 1 September 1964. Saat ini fakultas ini dikenal dengan nama Fakultas Hukum yang memiliki satu program studi yaitu Program Studi Ilmu Hukum.",
  "Fakultas Teknik Universitas Udayana didirikan pada tanggal 1 Oktober 1965. Fakultas Teknik memiliki tujuh program studi, yaitu Program Studi Arsitektur, Program Studi Teknik Sipil, Program Studi Teknik Mesin, Program Studi Teknik Industri, Program Studi Teknik Elektro, Program Studi Teknologi Informasi dan Program Studi Teknik Lingkungan.",
  "Fakultas Ekonomi dan Bisnis, didirikan pada tanggal 12 September 1967. Fakultas Ekonomi dan Bisnis memiliki tiga program studi S1 yaitu Program Studi Ekonomi Pembangunan, Program Studi Manajemen, Program Studi Ekonomi, selain itu Fakultas Ekonomi dan Bisnis juga memiliki program vokasi dan profesi yaitu Program Studi D3 Perpajakan,  D3 Akuntansi dan Program Studi Profesi Akuntan.",
  "Fakultas Pertanian didirikan pada tanggal 2 September 1967. Fakultas Pertanian memiliki tiga program studi yaitu Program Studi Agribisnis, Program Studi Agroekoteknologi, dan Program Studi Arsitektur Lanskap",
  "Fakultas Matematika dan Ilmu Pengetahuan Alam didirikan pada tanggal 1 Juli 1984. Fakultas Matematika dan Ilmu Pengetahuan Alam memiliki enam program studi yaitu Program Studi Kimia, Program Studi Biologi, Program Studi Matematika, Program Studi Fisika, Program Studi Farmasi, dan Program Studi Informatika",
  "Fakultas Kedokteran Hewan didirikan pada tanggal 31 Juli 1984. Fakultas Kedokteran Hewan terdiri dari satu program studi S1  yaitu Program Studi Kedokteran Hewan.",
  "Fakultas Teknologi Pertanian didirikan pada tanggal 31 Juli 1984. Fakultas Teknologi Pertanian memiliki tiga program studi yaitu Program Studi Teknologi Industri Pertanian, Program Studi Teknologi Pangan, dan Program Studi Teknik Pertanian dan Biosistem.",
  "Fakultas Pariwisata diresmikan pada tanggal 1 Mei 1985  yang pembentukannya diawali oleh program studi Ilmu Kepariwisataan. Saat ini, di Fakultas Pariwisata Universitas Udayana terdapat tiga program studi yaitu Program Studi D4 Pengelolaan Perhotelan, Program Studi S1 Destinasi Pariwisata, dan Program Studi S1 Industri Perjalanan Wisata.",
  "Fakultas Ilmu Sosial dan Ilmu Politik didirikan pada tanggal 28 Juni 2009. Fakultas Ilmu Sosial dan Ilmu Politik memiliki lima program S1, yaitu Program Studi Sosiologi, Hubungan Internasional, Administrasi Negara, Ilmu Komunikasi, Ilmu Politik dan satu program vokasional, yaitu D3 Perpustakaan.",
  "Fakultas Kelautan dan Perikanan didirikan pada tanggal 10 Oktober 2011. Fakultas Kelautan dan Perikanan memiliki dua program studi yaitu Program Studi Manajemen Sumber Daya Perairan dan Program Studi Ilmu Kelautan"
]

const facultyImages = [
  "../assets/img/fakultas/fib.webp",
  "../assets/img/fakultas/fk.webp",
  "../assets/img/fakultas/fapet.webp",
  "../assets/img/fakultas/fh.webp",
  "../assets/img/fakultas/ft.webp",
  "../assets/img/fakultas/feb.webp",
  "../assets/img/fakultas/fp.webp",
  "../assets/img/fakultas/fmipa.webp",
  "../assets/img/fakultas/fkh.webp",
  "../assets/img/fakultas/ftp.webp",
  "../assets/img/fakultas/fpar.webp",
  "../assets/img/fakultas/fisip.webp",
  "../assets/img/fakultas/fkp.webp",
]

Number.prototype.mod = function (n) {
  "use strict";
  return ((this % n) + n) % n;
};


function changeFaculty() {
  facultyNameElement.innerHTML = facultyNames[i.mod(13)];
  facultyDescElement.innerHTML = facultyDescriptions[i.mod(13)];
  facultyImageElement.src = facultyImages[i.mod(13)];
}

changeFaculty();

facultyNextButton.addEventListener('click', function () {
  i++;
  facultyCard.style.transform = `translateX(-100vw)`;
  facultyCard.style.filter = `blur(4px)`;

  setTimeout(function () {
    changeFaculty();
    facultyCard.classList.remove("transition-all");
    facultyCard.style.transform = `translateX(100vw)`;
  }, 150)

  setTimeout(function () {
    facultyCard.classList.add("transition-all");
    facultyCard.style.transform = `translateX(0)`;
    facultyCard.style.filter = `blur(0)`;
  }, 200)
})

facultyPrevButton.addEventListener('click', function () {
  i--;
  facultyCard.style.transform = `translateX(100vw)`;
  facultyCard.style.filter = `blur(4px)`;

  setTimeout(function () {
    changeFaculty();
    facultyCard.classList.remove("transition-all");
    facultyCard.style.transform = `translateX(-100vw)`;
  }, 150)

  setTimeout(function () {
    facultyCard.classList.add("transition-all");
    facultyCard.style.transform = `translateX(0)`;
    facultyCard.style.filter = `blur(0)`;
  }, 200)
})

