// Panggil komponen yang telah dibuat disini agar tampil ke browser

import StudentCard from "./latihan/soal-1";
import TaskItem from "./latihan/soal-2";
import DaftarSiswa from "./latihan/soal-3";
import FormSiswa from "./latihan/soal-4";

function App() {
  return (
    <div className="w-screen flex flex-col justify-center  pt-10">
      {/* Panggil komponen dari soal latihan dibawah sini*/}
      <StudentCard nama="rifky" kelas="12" statusLulus={true} />
      <StudentCard nama="abdul" kelas="5" statusLulus={false} />
      <StudentCard nama="rohim" kelas="1" statusLulus={true} />

      <TaskItem judul="Mengaji" prioritas="tinggi" selesai={true} />
      <TaskItem judul="Menulis" prioritas="sedang" selesai={true} />
      <TaskItem judul="Bermain" prioritas="rendah" selesai={true} />

      {/* Khusus soal 3, Panggil di dalam div ini*/}
      <div className="flex flex-col gap-3">
        <DaftarSiswa />
      </div>
      <FormSiswa />
    </div>
  );
}

export default App;
