import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login.component";
import Home from "./main/Home";
import LoginAdmin from "./main/login.admin";
import KategoriAdmin from "./main/admin/admin.kategori";
import KriteriaAdmin from "./main/admin/admin.kriteria";
import KategoriList from "./components/KategoriList";
import AddKategori from "./components/AddKategori";
import EditKategori from "./components/EditKategori";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/user" element={<KategoriList />} />
          <Route path="/add-kategori" element={<AddKategori />} />
          <Route path="/edit/:id" element={<EditKategori />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/home-admin" element={<KategoriAdmin />} />
          <Route path="/kategori-admin" element={<KategoriAdmin />} />
          <Route path="/kriteria-admin" element={<KriteriaAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
