import SideBar from "../template/sidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";

function PilihLaptop() {
  const min = 0.1;
  const max = 9;
  let numTopLaptop = 1;
  let numWorstLaptop = 1;

  const [listKategori, setListKategori] = useState([]);
  const [listKriteria, setListKriteria] = useState([]);
  const [listDisplay, setListDisplay] = useState([]);
  const [listLaptop, setListLaptop] = useState([]);
  const [listLaptopWorst, setListLaptopWorst] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(false);

  const [inputs, setInputs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [result, setResults] = useState({
    filtered_laptop: [],
  });

  const [resp, setResponse] = useState({
    CR: 0,
    top_laptops: [],
    worst_laptops: [],
    statement: "",
  });

  const selectOptions = [
    ["Asus", "Acer", "Apple", "MSI", "Lenovo", "HP", "Dell"],
    listKategori,
    // listDisplay,
    ["10 - 12", "13 - 15", "16 - 18"],
    ["1kg - 2kg", "2kg - 3kg"],
    [
      "Intel Core i3",
      "Intel Core i5",
      "Intel Core i7",
      "Intel Core i9",
      "AMD Ryzen 3",
      "AMD Ryzen 5",
      "AMD Ryzen 7",
      "AMD Ryzen 9",
    ],
    ["AMD", "Intel", "Nvidia"],
    // ["13 inch", "15 inch", "16 inch"],
  ];

  useEffect(() => {
    getKategori();
    getKriteria();
    getDisplayLaptop();
    getListLaptop();
  }, []);

  const [selectedValues, setSelectedValues] = useState(
    Array(selectOptions.length).fill("Semua")
  );

  const handleSelectChange = (index, value) => {
    const updatedValues = [...selectedValues];
    updatedValues[index] = value;
    setSelectedValues(updatedValues);
    console.log(setSelectedValues(updatedValues));
  };

  const renderSelects = () => {
    return selectOptions.map((options, index) => (
      <div className="row-md-4 mb-3" key={index}>
        <small>
          <select
            className="form-select form-select-sm w-75 form-control"
            aria-label="Default select example"
            value={selectedValues[index] || ""}
            onChange={(e) => handleSelectChange(index, e.target.value)}
          >
            <option value="Semua">
              <small>Semua</small>
            </option>

            {options.map((option, optionIndex) => (
              <option key={optionIndex} value={option}>
                {option}
              </option>
            ))}
          </select>
        </small>
      </div>
    ));
  };

  const getKategori = () => {
    axios
      .get("http://localhost:5000/kategori")
      .then((response) => {
        const { data } = response;
        if (response.status === 200) {
          setListKategori(data.map((item) => [item.name]));
        }
      })
      .catch((error) => console.log(error));
  };

  const getKriteria = () => {
    axios
      .get("http://localhost:5000/kriteria")
      .then((response) => {
        const { data } = response;
        if (response.status === 200) {
          setListKriteria(data);
        }
      })
      .catch((error) => console.log(error));
  };

  const getDisplayLaptop = () => {
    axios
      .get("http://localhost:5000/display_option")
      .then((response) => {
        const { data } = response;
        if (response.status === 200) {
          setListDisplay(data.map((item) => [item.display]));
        }
      })
      .catch((error) => console.log(error));
  };

  const getListLaptop = () => {
    axios
      .get("http://localhost:5000/tampil")
      .then((response) => {
        const { data } = response;
        if (response.status === 200) {
          setListLaptop(data);
        }
      })
      .catch((error) => console.log(error));
  };

  const HitungKriteria = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/kriteria/hitung", inputs)
        .then(function (response) {
          setResponse({
            CR: response.data.CR,
            statement: response.data.statement,
            top_laptops: response.data.top_laptop,
            worst_laptops: response.data.worst_laptop,
          });
          setListLaptop(response.data.top_laptop);
          setListLaptopWorst(response.data.worst_laptop);
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const FilterLaptop = async (e) => {
    e.preventDefault();
    try {
      setFilters(selectedValues);
      await axios
        .post("http://localhost:5000/kriteria/filter", {
          filters: selectedValues,
        })
        .then(function (response) {
          setResults({
            filtered_laptop: response.data.filtered_laptops,
          });
          setListLaptop(response.data.filtered_laptops);
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const tableWorstHide = () => {
    setIsTableVisible(false);
  };

  const tableWorstShow = () => {
    setIsTableVisible(true);
  };

  return (
    <div className="body">
      <SideBar />
      <div className="home-main">
        <main>
          <h1 className="judul-page">Tentukan laptop</h1>
          <div className="container">
            <div className="row my-3">
              <div className="col-md-4">
                <form onSubmit={FilterLaptop}>
                  <div className="row">
                    <div className="col-5 mb-4">
                      <div className="row-md-4 mb-3">
                        <small>Pilih Merk Laptop</small>
                      </div>
                      <div className="row-md-4 mb-3">
                        <small>Pilih Fungsi Laptop</small>
                      </div>
                      <div className="row-md-4">
                        <small>Pilih Layar Laptop (inch)</small>
                      </div>
                      <div className="row-md-4 mb-3">
                        <small>Pilih Berat Laptop (kg)</small>
                      </div>
                      <div className="row-md-4 mb-3">
                        <small>CPU</small>
                      </div>
                      <div className="row-md-4">
                        <small>GPU</small>
                      </div>
                    </div>
                    <div className="col-7">{renderSelects()}</div>
                  </div>
                  <div className="text-center field mb-3">
                    <button
                      type="submit"
                      className="btn btn-sm btn-success"
                      onClick={tableWorstHide}
                    >
                      Tampil
                    </button>
                  </div>
                </form>

                <h3 className="mb-1">Peringkat Kriteria</h3>
                <div className="mb-3 font-criteria">
                  <small>
                    Nilai peringkat masukkan 1 - 9 (semakin tinggi lebih
                    penting)
                  </small>
                </div>

                <form onSubmit={HitungKriteria}>
                  {listKriteria.map((item) => (
                    <>
                      <div key={item.id} value={item.name}>
                        <div className="row">
                          <div className="col-md-3">
                            <small>{item.name}</small>
                          </div>
                          <div className="col-md-9">
                            <input
                              className="form-control form-control-sm w-50"
                              type="number"
                              onChange={handleChange}
                              name={item.name}
                              step="0.01"
                              required
                              min={min}
                              max={max}
                              placeholder="Nilai peringkat"
                            ></input>
                          </div>
                        </div>
                        <br />
                      </div>
                    </>
                  ))}
                  <div className="text-center field">
                    <button
                      type="submit"
                      className="btn btn-sm btn-success"
                      onClick={tableWorstShow}
                    >
                      Proses
                    </button>
                  </div>
                </form>

                <div className="row mt-3">
                  <div className="col-md-3">
                    <small>CR</small>
                  </div>
                  <div className="col-md-9">
                    <input
                      className="form-control form-control-sm w-50"
                      disabled
                      value={resp.CR}
                    ></input>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-3">
                    <small hidden>CR</small>
                  </div>

                  <div className="col-md-9">
                    <input
                      className="form-control form-control-sm w-50"
                      disabled
                      value={resp.statement}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <small>
                  <table className="table">
                    <tr>
                      <th></th>
                      <th>Nama Laptop</th>
                      <th>CPU</th>
                      <th>GPU</th>
                      <th>Storage</th>
                      <th>RAM</th>
                      <th>Layar</th>
                      <th>Harga</th>
                      <th>Nilai</th>
                    </tr>
                    {listLaptop.map((item) => (
                      <>
                        {/* <div key={item.id}> */}
                        <tr>
                          <td value={item.id}>{numTopLaptop++}</td>
                          <td value={item.name}>{item.name}</td>
                          <td value={item.cpu}>{item.cpu}</td>
                          <td value={item.gpu}>{item.gpu}</td>
                          <td value={item.storage}>{item.storage} gb</td>
                          <td value={item.ram}>{item.ram}gb</td>
                          <td value={item.display}>{item.display} inch</td>
                          <td value={item.price}>Rp. {item.price}</td>
                          <td value={item.score}>{item.score}</td>
                        </tr>
                      </>
                    ))}
                  </table>

                  {isTableVisible && (
                    <>
                      <h3 className="mt-3">Laptop Terendah</h3>
                      <table className="table">
                        <tr>
                          <th></th>
                          <th>Nama Laptop</th>
                          <th>CPU</th>
                          <th>GPU</th>
                          <th>Storage</th>
                          <th>RAM</th>
                          <th>Layar</th>
                          <th>Harga</th>
                          <th>Nilai</th>
                        </tr>
                        {listLaptopWorst.map((item) => (
                          <>
                            {/* <div key={item.id}> */}
                            <tr>
                              <td value={item.id}>{numWorstLaptop++}</td>
                              <td value={item.name}>{item.name}</td>
                              <td value={item.cpu}>{item.cpu}</td>
                              <td value={item.gpu}>{item.gpu}</td>
                              <td value={item.storage}>{item.storage} gb</td>
                              <td value={item.ram}>{item.ram}gb</td>
                              <td value={item.display}>{item.display} inch</td>
                              <td value={item.price}>Rp. {item.price}</td>
                              <td value={item.score}>{item.score}</td>
                            </tr>
                          </>
                        ))}
                      </table>
                    </>
                  )}
                </small>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PilihLaptop;
