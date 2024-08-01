import SideBar from "../template/sidebar";

function Home() {
  return (
    <div className="body">
      <SideBar />
      <div className="home-main">
        <main>
          <h1 className="judul-page">Selamat datang di website SPK Laptop</h1>
        </main>
      </div>
    </div>
  );
}

export default Home;
