import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddKriteria = () => {
  const [inputs, setInputs] = useState([]);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name_kriteria = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name_kriteria]: value }));
  };

  const saveKriteria = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/kriteria/simpan", inputs)
        .then(function (response) {
          console.log(response.data);
        });
      navigate("/kriteria-admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveKriteria}>
          <div className="field">
            <label className="label">Nama Kriteria</label>
            <div className="control">
              <input
                type="text"
                className="input"
                required
                name="name_kriteria"
                onChange={handleChange}
                placeholder="Name"
              />
            </div>
          </div>

          <div className="field">
            <button type="submit" className="btn btn-success">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddKriteria;
