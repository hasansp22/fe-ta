import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const KategoriList = () => {
  const [users, setKategori] = useState([]);

  useEffect(() => {
    getKategori();
  }, []);

  const getKategori = async () => {
    const response = await axios.get("http://localhost:5000/kategori");
    setKategori(response.data);
  };

  const deleteKategori = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/kategori/${id}`);
      getKategori();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`../add`} className="btn btn-success">
          Add New
        </Link>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>tee</th>
              <th>tee</th>
              <th>tee</th>
              <th>tee</th>
              <th>tee</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={users.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link to={`edit/${user.id}`} className="btn btn-sm btn-info">
                    Edit
                  </Link>{" "}
                  |{" "}
                  <button
                    onClick={() => deleteKategori(user.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KategoriList;
