import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditKategori = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getKategoriById();
  }, []);

  const updateKategori = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/kategori/${id}`, {
        name,
      });
      navigate("/kategori-admin");
    } catch (error) {
      console.log(error);
    }
  };

  const getKategoriById = async () => {
    const response = await axios.get(`http://localhost:5000/kategori/${id}`);
    setName(response.data.name);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateKategori}>
          <div className="field">
            <label className="label">Nama Kategori Baru</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>

          <div className="field">
            <button type="submmit" className="btn btn-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditKategori;
