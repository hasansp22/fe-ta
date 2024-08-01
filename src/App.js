import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./main/Home";
import LoginAdmin from "./main/LoginAdmin";
import KategoriAdmin from "./admin/admin.kategori";
import KriteriaAdmin from "./admin/admin.kriteria";
import AddKategori from "./components/kategori/AddKategori";
import AddKriteria from "./components/kriteria/AddKriteria";
import EditKategori from "./components/kategori/EditKategori";
import EditKriteria from "./components/kriteria/EditKriteria";
import PrivateRoute from "./PrivateRoute";
import PilihLaptop from "./main/PilihLaptop";
import Tips from "./main/Tips";

function App() {
  return (
    <Router>
      <div className="App">
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/pilih-laptop" element={<PilihLaptop />} />
            <Route path="/login-admin" element={<LoginAdmin />} />
            <Route exact path="/" element={<PrivateRoute />}>
              <Route path="/add-kategori" element={<AddKategori />} />
              <Route path="/add-kriteria" element={<AddKriteria />} />
              <Route path="/edit-kategori/:id" element={<EditKategori />} />
              <Route path="/edit-kriteria/:id" element={<EditKriteria />} />
              <Route path="/kategori-admin" element={<KategoriAdmin />} />
              <Route path="/kriteria-admin" element={<KriteriaAdmin />} />
            </Route>
          </Routes>
        </Fragment>
      </div>
    </Router>
  );
}
export default App;
