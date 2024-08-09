let count = 1;
let index = 0;

const logoelemen = document.getElementsByClassName("logoBEM");
const titleelemen = document.getElementById("title");
const deskripsielemen = document.getElementsByClassName("deskripsi");

const logo = [
  "../assets/img/ormawa-fakultas/smfib.webp",
  "../assets/img/ormawa-fakultas/bemfk.webp",
  "../assets/img/ormawa-fakultas/bemfh.webp",
  "../assets/img/ormawa-fakultas/smft.webp",
  "../assets/img/ormawa-fakultas/bemfp.webp",
  "../assets/img/ormawa-fakultas/bemfeb.webp",
  "../assets/img/ormawa-fakultas/bemfapet.webp",
  "../assets/img/ormawa-fakultas/bemfmipa.webp",
  "../assets/img/ormawa-fakultas/bemfkh.webp",
  "../assets/img/ormawa-fakultas/bemftp.webp",
  "../assets/img/ormawa-fakultas/bemfpar.webp",
  "../assets/img/ormawa-fakultas/bemfisip.webp",
  "../assets/img/ormawa-fakultas/bemfkp.webp"
];

const judul = [
  "Senat Mahasiswa Fakultas Ilmu Budaya",
  "Badan Eksekutif Mahasiswa Fakultas Kedokteran",
  "Badan Eksekutif Mahasiswa Fakultas Hukum",
  "Senat Mahasiswa Fakultas Teknik",
  "Badan Eksekutif Mahasiswa Fakultas Pertanian",
  "Badan Eksekutif Mahasiswa Fakultas Ekonomi dan Bisnis",
  "Badan Eksekutif Mahasiswa Fakultas Peternakan",
  "Badan Eksekutif Mahasiswa Matematika dan Ilmu Pengetahuan Alam",
  "Badan Eksekutif Mahasiswa Fakultas Kedokteran Hewan",
  "Badan Eksekutif Mahasiswa Fakultas Teknologi Pertanian",
  "Badan Eksekutif Mahasiswa Fakultas Pariwisata",
  "Badan Eksekutif Mahasiswa Fakultas Ilmu Sosial dan Ilmu Politik",
  "Badan Eksekutif Mahasiswa Fakultas Kelautan dan Perikanan"
];

const teks = [
  "Senat Mahasiswa Fakultas Ilmu Budaya (SMFIB) Universitas Udayana merupakan lembaga eksekutif mahasiswa tertinggi di lingkungan Fakultas Ilmu Budaya. Senat Mahasiswa Fakultas Ilmu Budaya memiliki sekretariat yang beralamat di Jl Pulau Nias No. 13 Sanglah Denpasar bertempat di Gedung R.M. Ng. Poerbatjaraka Lt. 1.<br><br>Senat Mahasiswa Fakultas Ilmu Budaya mempunyai wewenang untuk melaksanakan kebijakan baik intern maupun ekstern atas pertimbangan Badan Perwakilan Mahasiswa (BPM) Fakultas Ilmu Budaya Universitas Udayana. Adapun struktur kepengurusan Senat Mahasiswa Fakultas Ilmu Budaya Universitas Udayana yang terdiri dari; Ketua, Wakil Ketua 1, Wakil Ketua 2, Sekretaris 1, Sekretaris 2, Bendahara 1, Bendahara 2, Bidang I (Penalaran Individu, Keilmuan, dan Penelitian), Bidang II (Hubungan Antar Organisasi dan Pengabdian kepada Masyarakat), Bidang III (Minat dan Bakat), Bidang IV (Kerumahtanggaan dan Penggalian Dana).<br><br>Contact person:<br>Narahubung (Humas) SMFIB: 087743351931 (Femi)<br>Ketua SMFIB: 081339506241 (Gung Wah)",
  "Badan Eksekutif Mahasiswa (BEM) Fakultas Kedokteran Universitas Udayana pertama kali terbentuk pada tahun 1964 yang saat itu dikenal dengan Senat Mahasiswa FK Unud. Tujuan pendirian saat itu yaitu untuk menampung aspirasi mahasiswa dan juga meningkatkan citra FK Unud melalui kegiatan-kegiatannya. Seiring dengan perkembangan dinamika organisasi kemahasiswaan, maka pada tanggal 28 April 2002 berdirilah Lembaga Mahasiswa Fakultas Kedokteran Universitas Udayana (LMFK Unud) dengan BEM FK Unud sebagai lembaga eksekutifnya. Pemilihan Ketua BEM FK Unud dilaksanakan melalui Pemilihan Umum Raya (Pemira) yang melibatkan seluruh mahasiswa FK dengan masa jabatannya adalah selama satu periode kepengurusan dan selanjutnya dapat dipilih kembali untuk satu kali masa jabatan. Pada akhir kepengurusannya, ketua BEM menyampaikan laporan pertanggungjawabannya dalam Musyawarah Mahasiswa (MUSMA) yang merupakan forum pemegang kedaulatan tertinggi dalam LMFK<br><br>Contact person:<br>Ketua BEM FK: 081282697559 (Boni)",
  "Pada awalnya di lingkungan fakultas hukum sendiri hanya terdapat satu lembaga kemahasiswaan intra kampus. Pada tahun 1999, setelah diadakannya program ekstensi, terjadi perubahan sistem terhadap kelembagaan mahasiswa di lingkungan fakultas hukum, sehingga terdapat dua lembaga kemahasiswaan intra kampus yang menaungi mahasiswa reguler (sekarang bernama Reguler Pagi) dan mahasiswa program ekstensi (sekarang bernama Reguler Sore). Perubahan sistem kelembagaan eksekutif mahasiswa dari Senat Fakultas Hukum UNUD menjadi Komite Mahasiswa Fakultas Hukum (KMFH) UNUD terjadi pada saat kongres mahasiswa yang diadakan pada bulan Mei 1999 di Hotel Bedugul Inn. Hal ini dilatarbelakangi oleh Surat Keputusan Menteri pendidikan dan kebudayaan No. 155/U/1998 yang memberikan kebebasan semua lembaga kemahasiswaan mengenai nama dan struktur kelembagaan mahasiswa masing-masing. Untuk lembaga legislatif mahasiswanya, terdapat Badan Perwakilan Mahasiswa (BPM). KMFH dan BPM pada saat itu merupakan lembaga eksekutif dan legislatif dan keduanya merupakan bagian Lembaga Mahasiswa Fakultas Hukum Universitas Udayana (LMFH) yang menaungi mahasiswa reguler. Pada saat Kongres LMFH tahun 2014, terjadi perubahan nama KMFH menjadi Badan Eksekutif Mahasiswa FH UNUD (BEM FH).<br><br>Contact person:<br>Narahubung BEM FH: 085933259322 (Rico)<br>Ketua BEM FH: 087753005903 (Putra)",
  "Senat Mahasiswa Fakultas Teknik (SMFT) Universitas Udayana merupakan lembaga eksekutif di tingkat fakultas yang berada di Fakultas Teknik Universitas Udayana. SMFT Unud mempunyai tugas pokok yaitu mengkoordinasikan dan menyelenggarakan kegiatan kemahasiswaan dalam bidang ekstrakurikuler, memberikan pendapat, usul, saran dan memperjuangkan aspirasi mahasiswa pada pimpinan FT Unud, melaksanakan hasil-hasil Musma FT Unud serta melakukan koordinasi teknis dengan BPMFT dan HMJ <br><br> Contact person:<br> Narahubung SMFT: 081917911332 (Dinda)<br> Ketua SMFT: 081339517273 (I. M. A. Widiasmara Jaya)",
  "Badan Eksekutif Mahasiswa Fakultas Pertanian Universitas Udayana (BEM FP UNUD) adalah organisasi kemahasiswaan yang memiliki tujuan untuk mewujudkan kehidupan kampus yang demokratis, ilmiah, dan bertanggung jawab. BEM FP UNUD adalah organisasi kemahasiswaan tertinggi di lingkungan Fakultas Pertanian Universitas Udayana yang memegang kekuasaan eksekutif mahasiswa di tingkat fakultas. BEM FP UNUD bertugas untuk merumuskan kebijakan dan menjalankan fungsi kontrol serta evaluasi atas kebijakan yang telah dilaksanakan di lingkungan Fakultas Pertanian Universitas Udayana.<br><br>Hidup Kampus Coklat!<br><br>Contact person:<br>Ketua BEM FP: 081339466405 (Bhujangga)",
  "Badan Eksekutif Mahasiswa Fakultas Ekonomi dan Bisnis Universitas Udayana merupakan suatu media atau wadah yang mampu untuk menumbuhkembangkan jiwa kepemimpinan serta berorganisasi terutama di lingkungan Fakultas Ekonomi dan Bisnis Universitas Udayana. BEM FEB Unud sendiri telah mengalami dinamika dalam perjalanannya yang berawal dari BE SMFE, BE SMFEB, BEM LMFEB hingga menjadi BEM FEB pada tahun 2016. Struktur atau jajaran dari BEM FEB Unud itu sendiri, terdiri dari Inti (Ketua, Wakil Ketua, Sekretaris, dan Bendahara), Biro Pengembangan Sumber Daya Mahasiswa (PSDM), Biro Penjamin Mutu dan Sinergi Organisasi (PMSO), Biro Pers, Divisi 1 yang terdiri atas Bidang Kajian dan Aksi Strategis, Bidang Pendidikan dan Litbang, serta Bidang Humas dan Protokoler. Kemudian, Divisi 2 memiliki dua bidang, diantaranya Bidang Olahraga serta Bidang Kesenian. Dan yang terakhir, yaitu Divisi 3 yang memiliki tiga bidang, diantaranya Bidang Kewirausahaan, Bidang Advokesma, dan Bidang Pengabdian Masyarakat. Selain itu, terdapat 13 program kerja yang dimiliki oleh BEM FEB Unud yang mana setiap program kerja memiliki konsep dan tujuannya masing-masing. Untuk informasi lebih lengkap mengenai program kerja dan BEM FEB Unud, dapat dilihat pada Instagram @bemfebunud dan bemfeb-unud.com<br><br>Contact person:<br>Narahubung: 0895386007071<br>Ketua BEM FEB: 081901213004(Kirana)",
  "Pada tahun 2019 tepatnya di bulan Maret 2019 terjadilah pembaharuan BEM menjadi BEM KM (Badan Eksekutif Mahasiswa Keluarga Mahasiswa). Badan Eksekutif Mahasiswa Keluarga Mahasiswa Fakultas Peternakan yang sering disingkat BEM KM FAPET merupakan eksekutif yang memiliki fungsi sebagai katalisator dan akselerator untuk menjadi lidah penyambung mahasiswa dan mengayomi mahasiswa. Selain itu, BEM KM FAPET hadir menjadi promotor untuk penunjang terlaksananya Tri Dharma Perguruan Tinggi. Guna menunjang terlaksananya tujuan hadirnya BEM KM FAPET UNUD, yakni dibantu dengan 7 Departemen yang memiliki fungsi dan peran strategisnya masing-masing dan 1 BPH yang terbagi menjadi 3 bagian. BEM KM FAPET tahun ini hadir dengan membawa spirit utama reparasi dalam naungan Kabinet Reparasi Kolase untuk membawa pembaharuan demi menjaga keberlangsungan berjalannya organisasi di lingkungan Fakultas Peternakan Universitas Udayana. Akhir kata REPARASI KOLASE menjadi gelora BEM KM FAPET UNUD untuk bergerak dan berdedikasi secara riil dan nyata dengan menganggap sebuah keberagaman dan perbedaan adalah hal yang mampu dirangkai dan mengedepankan kolase menuju jati diri KM yang sesungguhnya serta berkarya dengan dedikasi perjuangan akan terasa esensial bagi mahasiswa maupun masyarakat FAPET, Udayana, dan Indonesia.<br><br>Contact person:<br>Narahubung: 081386424722 (Rafi)<br>Ketua BEM FAPET: 081246589945 (Krisna)",
  "Badan Eksekutif Mahasiswa Fakultas MIPA Universitas Udayana (BEM FMIPA Unud) adalah organisasi Eksekutif tertinggi dalam kehidupan organisasi kemahasiswaan di Fakultas MIPA Universitas Udayana. Kepengurusan BEM FMIPA tersusun dari inti organisasi dan beberapa bidang yang menyelenggarakan program kerja serta tugas harian. Adapun nama kabinet BEM FMIPA pada tahun 2024 yaitu Kabinet Nawasena.<br><br>Contact person:<br>Narahubung: 081953842851 (Ayana)<br>Ketua BEM FMIPA: 085156818469 (Ananda)",
  "Badan Eksekutif Mahasiswa adalah satu satunya lembaga eksekutif yang diakui di Fakultas Kedokteran Hewan Universitas Udayana dengan fungsi yang tercantum pada Pasal 4 Ayat (2b). Masa jabatan fungsionaris BEM FKH Universitas Udayana adalah satu periode kepengurusan terhitung sejak pelantikan/serah terima dari pengurus BEM FKH Universitas Udayana demisioner. Dalam peranannya sebagai lembaga eksekutif, BEM FKH Universitas Udayana memiliki fungsi sebagai Fungsi Kepala Organisasi, Fungsi Pengolahan Aspirasi dan Advokasi, Fungsi Regenerasi, Fungsi Pelayanan, Fungsi Pengabdian Masyarakat, dan Fungsi Internal dan Eksternal<br><br>Contact person:<br>Narahubung BEM FKH: 082340392286 (Amasya)<br>Ketua BEM FKH: 081290759787 (Alvian)",
  "Badan Eksekutif Mahasiswa Fakultas Teknologi Pertanian Kabinet Kolaborasi Juang hadir di awal tahun 2023. mempunyai 7 departemen yang membantu mengembangkan BEM FTP satu tahun mendatang. Dengan visi misi yang dihadirkan pada tahun ini diharapkan BEM FTP dapat menjadi organisasi yang lebih baik dan selalu berkolaborasi. \"Kolaborasikan Gerakan Selaras Dalam Perjuangan\" merupakan slogan yang selalu dipegang teguh oleh seluruh fungsionaris BEM FTP<br><br> Contact person:<br>Narahubung BEM FTP: 081215828485 (Alan)<br>Ketua BEM FTP: 082124360608 (Arif)",
  "Lembaga Eksekutif yang ada di Fakultas Pariwisata Universitas Udayana yang menjalankan fungsi demokratis dan eksekutif terhadap organisasi kemahasiswaan di lingkungan Fakultas Pariwisata. BEM FPAR pertama kali didirikan pada tahun 1990 di kampus Program Studi Pariwisata Universitas Udayana. BEM FPAR memiliki motto \"Satu Hati, Satu Rasa, Satu Jiwa, Untukmu Pariwisata Viva La Pinkers.\”<br><br> Contact person:<br>Narahubung: 08873478734 (Dinda)<br>Ketua BEM FPAR: 081220914545 (Wisnu)",
  "BEM FISIP merupakan salah satu lembaga eksekutif mahasiswa di lingkungan FISIP Universitas Udayana yang berdiri sejak tahun 2011. Organisasi ini dinaungi langsung oleh Dekanat FISIP dan diawasi oleh DPM FISIP Universitas Udayana. BEM FISIP memiliki sebelas departemen yang terdiri dari Departemen Kesekretariatan, Departemen Keuangan, Departemen Humas, Departemen PSDM, Departemen Adkesma, Departemen Minat Bakat, Departemen Pengabdian Masyarakat, Departemen Ekonomi Kreatif, Departemen Media Kreatif, Departemen Kajian dan Aksi Strategis, dan Departemen Pendidikan dan Keilmuan. Pada periode kepemimpinan 2023-2024, BEM FISIP mengangkat sebuah nama, yaitu Kabinet Abyakta Sraddha.<br><br>Contact person:<br>Narahubung: 085772298125 (Raul)<br>Ketua BEM FISIP: 089528426914 (Dicky)",
  "Badan Eksekutif Mahasiswa (BEM) adalah organisasi mahasiswa intra kampus yang merupakan lembaga eksekutif di tingkat perguruan tinggi. Organisasi kemahasiswaan di Fakultas Kelautan dan Perikanan Universitas Udayana salah satunya Badan Eksekutif Mahasiswa (BEM) FKP Unud berdiri sejak 24 November 2012, yang dipimpin oleh Ketua dan Wakil Ketua BEM. Pada tahun ini BEM FKP membawa nama kabinet BARAMUDA yang memiliki 3 Biro dan 6 Departemen untuk bekerja sama guna mencapai Visi dan Misi yang telah diikrarkan.<br><br>Contact person:<br>Narahubung: 082113494585 (Rafdzil)<br>Ketua BEM FKP: 081238211408 (Ival)"
];

function updateContent(index) {
  logoelemen[0].src = logo[index];
  logoelemen[1].src = logo[index];
  titleelemen.textContent = judul[index];
  console.log(titleelemen);
  deskripsielemen[0].innerHTML = teks[index];
  deskripsielemen[1].innerHTML = teks[index];
  console.log(deskripsielemen);
}

// Show the first slide initially
updateContent(0);

document.getElementsByClassName("page1")[0].addEventListener("click", function () {
  count = count !== 1 ? count - 1 : 13;
  updateContent(count - 1);
});

document.getElementsByClassName("page2")[0].addEventListener("click", function () {
  count = count !== 13 ? count + 1 : 1;
  updateContent(count - 1);
});

document.getElementsByClassName("page1")[1].addEventListener("click", function () {
  count = count !== 1 ? count - 1 : 13;
  updateContent(count - 1);
});

document.getElementsByClassName("page2")[1].addEventListener("click", function () {
  count = count !== 13 ? count + 1 : 1;
  updateContent(count - 1);
});


