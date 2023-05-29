import SideBar from "../template/sidebar";
import Login from "../login.component";

function LoginAdmin() {
  return (
    <div className="body">
      <SideBar />
      <div className="home-main">
        <main>
          <h1 className="judul-page">Login Admin</h1>
          <div className="auth-admin">
            <Login />
          </div>
        </main>
      </div>
    </div>
  );
}

export default LoginAdmin;
