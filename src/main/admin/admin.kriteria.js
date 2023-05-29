import SideBar from "../../template/sidebar.admin";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function KriteriaAdmin() {
  const [show_kateg, setShowKriteria] = useState(false);
  const [show_edit, setShowEdit] = useState(false);
  const [show_hapus, setShowDelete] = useState(false);

  return (
    <div className="body">
      <SideBar />
      <div className="home-main">
        <div className="page">
          <main>
            <h1 className="judul-page">Kriteria Page</h1>

            <Button
              className="btn-kategori"
              variant="outline-primary"
              size="sm"
              onClick={() => setShowKriteria(true)}
            >
              Tambah Kriteria
            </Button>

            {/* modal kategori */}
            <Modal show={show_kateg} onHide={() => setShowKriteria(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Tambah Kriteria</Modal.Title>
              </Modal.Header>
              <form action="/home-admin">
                <Modal.Body>
                  Nama kriteria
                  <input type="text" className="form-control"></input>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => setShowKriteria(false)}
                  >
                    Tutup
                  </Button>
                  <Button type="submit" variant="primary">
                    Tambah
                  </Button>
                </Modal.Footer>
              </form>
            </Modal>

            <table className="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => setShowEdit(true)}
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => setShowDelete(true)}
                    >
                      Hapus
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>
                    <Button variant="success" size="sm">
                      Edit
                    </Button>{" "}
                    <Button variant="danger" size="sm">
                      Hapus
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry the Bird</td>
                  <td>Larry the Bird</td>
                  <td>
                    <Button variant="success" size="sm">
                      Edit
                    </Button>{" "}
                    <Button variant="danger" size="sm">
                      Hapus
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* modal edit */}
            <Modal show={show_edit} onHide={() => setShowEdit(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Modal edit</Modal.Title>
              </Modal.Header>
              <form action="/home-admin">
                <Modal.Body>
                  <input
                    style={{ marginBottom: "20px" }}
                    type="text"
                    disabled
                    className="form-control"
                  ></input>
                  Nama kriteria baru
                  <input type="text" className="form-control"></input>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => setShowEdit(false)}
                  >
                    Tutup
                  </Button>
                  <Button type="submit" variant="primary">
                    Tambah
                  </Button>
                </Modal.Footer>
              </form>
            </Modal>

            {/* modal hapus */}
            <Modal show={show_hapus} onHide={() => setShowDelete(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Hapus kriteria?</Modal.Title>
              </Modal.Header>
              <form action="/home-admin">
                <Modal.Body>
                  <input type="text" disabled className="form-control"></input>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => setShowDelete(false)}
                  >
                    Tutup
                  </Button>
                  <Button type="submit" variant="primary">
                    Hapus
                  </Button>
                </Modal.Footer>
              </form>
            </Modal>
          </main>
        </div>
      </div>
    </div>
  );
}

export default KriteriaAdmin;
