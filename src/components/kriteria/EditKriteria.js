import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditKriteria = () => {
  const [name_kriteria, setName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getKriteriaById();
  }, []);

  const updateKriteria = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/kriteria/edit/${id}`, {
        name_kriteria,
      });
      navigate("/kriteria-admin");
    } catch (error) {
      console.log(error);
    }
  };

  const getKriteriaById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/kriteria/${id}`);
      setName(response.data.name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateKriteria}>
          <div className="field">
            <label className="label">Nama Kriteria Baru</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name_kriteria}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>

          <div className="field">
            <button type="submit" className="btn btn-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditKriteria;
