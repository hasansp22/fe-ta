import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddKategori = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // ganti localhost menjadi ip
  const saveKategori = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://54.179.44.35:5000/kategori", {
        name,
      });
      navigate("/kategori-admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveKategori}>
          <div className="field">
            <label className="label">Nama Kategori</label>
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
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddKategori;
