import SideBar from "../template/sidebar";

function PilihLaptop() {
  return (
    <div className="body">
      <SideBar />
      <div className="home-main">
        <main>
          <h1 className="judul-page">Tips membeli laptop</h1>
          <div className="my-3 mx-3 row">
            <div className="col-md-7">
              <ol>
                <h3>
                  <li className="sub-judul">Tentukan Kebutuhan</li>
                </h3>
                Laptop yang akan dibeli, nantinya akan digunakan untuk apa.
                Apakah digunakan untuk gaming, multimedia atau penggunaan ringan
                seperti mengetik, browsing internet, melihat video, dan mengirim
                email. Masing - masing laptop akan memiliki spesifikasi yang
                berbeda tergantung dari penggunaan laptop tersebut.
                <h3 className="mt-3">
                  <li>Sesuaikan Dana</li>
                </h3>
                Tentukan budget yang dimiliki. Dengan menyesuaikan budget yang
                ada, pencarian laptop dapat dibatasi sesuai dengan dana yang
                dimiliki. Jangan memaksakan diri untuk membeli laptop diluar
                budget.
                <h3 className="mt-3">
                  <li>CPU</li>
                </h3>
                Central Processing Unit atau CPU adalah bagian terpenting yang
                mempengaruhi kinerja laptop. Semua aktivitas di laptop akan
                dieksekusi melalui CPU. Tiap laptop mempunyai spesifikasi CPU
                yang berbeda - beda. Bagian yang perlu diperhatikan adalah
                generasi pada CPU. Semakin tinggi generasinya, spesifikasi yang
                ditawarkan semakin bagus tetapi harganya juga semakin mahal.
                <h3 className="mt-3">
                  <li>RAM</li>
                </h3>
                RAM atau Random Access Memory adalah sistem yang digunakan untuk
                menyimpan data sementara prosesor yang melakukan banyak hal. RAM
                diperlukan agar dapat melakukan multitasking secara besar. Jika
                RAM terlalu kecil, akan terjadi lagging karena multitasking yang
                dilakukan tidak dapat di handle secaara bersamaan oleh RAM.
                Idealnya RAM untuk laptop sekarang adalah di 8gb.
                <h3 className="mt-3">
                  <li>Merk Laptop</li>
                </h3>
                Pilih laptop dari brand yang sudah terkenal. Karena kualitas
                yang diberikan bagus dan awet. Ada banyak brand - brand yang
                sudah terkenal seperti Asus, Acer, Apple, Lenovo, HP, dll.
                <h3 className="mt-3">
                  <li>Layar</li>
                </h3>
                Pemilihan layar juga penting karena ketika menggunakan laptop,
                yang akan dilihat terus - menerus adalah layar. Resolusi layar
                laptop bermacam - macam ada HD (1280x720), Full HD (1920x1080),
                2k (2040x1080), dll. Disarankan untuk memilih layar dengan
                resolusi Full HD agar lebih detail dan jelas.
                <h3 className="mt-3">
                  <li>Storage</li>
                </h3>
                Storage digunakan untuk menyimpan data - data pada laptop.
                Storage ada 2 jenis yaitu HDD (Hardisk Drive) dan SSD (Solid
                State Drive). Disarankan untuk memilih SSD karena kecepatan
                membaca file yang lebih tinggi. Untuk ukuran storagenya,
                direkomendasikan minimal 512gb mengingat laptop digunakan dalam
                jangka waktu yang panjang
              </ol>
            </div>

            <div className="col-md-2"></div>
            <div className="col-md-3"></div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PilihLaptop;
