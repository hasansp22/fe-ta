import SideBar from "../template/sidebar.admin";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function KriteriaAdmin() {
  const [kriteria, setKriteria] = useState([]);

  useEffect(() => {
    getKriteria();
  }, []);

  const getKriteria = async () => {
    try {
      const response = await axios.get("http://localhost:5000/kriteria");
      setKriteria(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteKriteria = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/kriteria/hapus/${id}`);
      getKriteria();
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
            <h1 className="judul-page">Kriteria Laptop</h1>
            <Link to={`/add-kriteria`} className="btn btn-outline-success">
              Tambah Kriteria
            </Link>
            <table className="table table-striped table-hover mt-3">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Kriteria</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(kriteria) &&
                  kriteria.map((kriteria, index) => (
                    <tr key={kriteria.id}>
                      <td>{index + 1}</td>
                      <td>{kriteria.name}</td>
                      <td>
                        <Link
                          to={`/edit-kriteria/${kriteria.id}`}
                          className="btn btn-sm btn-outline-info"
                        >
                          Edit
                        </Link>{" "}
                        <button
                          onClick={() => deleteKriteria(kriteria.id)}
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

export default KriteriaAdmin;
