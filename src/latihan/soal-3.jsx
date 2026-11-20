// Materi: Fragment & Props key pada .map()

/* TODO:
  1. Lengkapi array 'daftarSiswa' minimal 3 data objek dengan properti:
     id (unik),
     nama (string),
     kelas (string).
  2. Bungkus hasil return utama komponen menggunakan Fragment (<>...</>) agar tidak menambah elemen pembungkus berlebih di DOM.
  3. Render 'daftarSiswa' menggunakan method .map() dan pasang props 'key={siswa.id}' pada elemen pembungkus tiap item (misalnya <section key={siswa.id}>).
  4. Tampilkan data 'nama' dan 'kelas' menggunakan interpolasi ({...}) di dalam item yang di-render.
*/

function DaftarSiswa() {
  const daftarSiswa = [
    { id: 1, nama: "rifky", kelas: "11" },
    { id: 2, nama: "akram", kelas: "12" },
    { id: 3, nama: "azzam", kelas: "10" },
    // Lengkapi minimal 3 data siswa di sini
  ];

  return (
    <>
      {/* Render daftarSiswa menggunakan .map() dan pasang key={siswa.id} pada elemen terluar tiap item */}
      {daftarSiswa.map((siswa) => (
        <div key={siswa.id}>
          <h1 >{siswa.nama}</h1>
          <p >{siswa.kelas}</p>
        </div>
      ))}
    </>
  );
}

export default DaftarSiswa;

// 1. Mengapa props 'key' wajib dipasang pada elemen terluar di dalam .map() dan sebaiknya menggunakan ID unik?
//   Jawaban: Membantu mengelola elemen yang banyak secara bersamaan

// 2. Apa fungsi Fragment (<>...</>) saat merender elemen di dalam komponen dibandingkan membungkusnya dengan <div>?
//   Jawaban: Membungkus elemen tanpa tambahan tag
