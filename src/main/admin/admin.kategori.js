import SideBar from "../../template/sidebar.admin";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function KategoriAdmin() {
  const [kategori, setKategori] = useState([]);

  useEffect(() => {
    getKategori();
  }, []);

  const getKategori = async () => {
    const response = await axios.get("http:// 54.254.165.218:5000/kategori");
    setKategori(response.data);
  };

  const deleteKategori = async (id) => {
    try {
      await axios.delete(`http:// 54.254.165.218:5000/kategori/${id}`);
      getKategori();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="body">
      <SideBar />
      <div className="home-main">
        <div className="page">
          <main>
            <h1 className="judul-page">Kategori Page</h1>
            <Link to={`/add-kategori`} className="btn btn-outline-success">
              Tambah Kategori
            </Link>
            <table className="table table-striped table-hover mt-3">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Kategori</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {kategori.map((kategori, index) => (
                  <tr key={kategori.id}>
                    <td>{index + 1}</td>
                    <td>{kategori.name}</td>
                    <td>
                      <Link
                        to={`/edit/${kategori.id}`}
                        className="btn btn-sm btn-outline-info"
                      >
                        Edit
                      </Link>{" "}
                      <button
                        onClick={() => deleteKategori(kategori.id)}
                        className="btn btn-sm btn-outline-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </div>
  );
}

export default KategoriAdmin;
