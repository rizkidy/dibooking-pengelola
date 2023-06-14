/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import MyVerticallyCenteredModal from "../components/ModalDetail";
import { data } from "../data/data";

function Kelola() {
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState(0);

  return (
    <div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={id}
        title={"modal"}
      />
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Kelola Lapangan</h1>
          <a
            href="#"
            className="d-sm-inline-block btn btn-md btn-outline-dark shadow-sm"
          >
            <i className="fas fa-plus"></i> Tambah Lapangan
          </a>
        </div>

        <table className="table table-striped text-center">
          <thead>
            <tr className="dibooking-orange text-white">
              <th scope="col">No.</th>
              <th scope="col">Nama Lapangan</th>
              <th scope="col">Kategori Lapangan</th>
              <th scope="col">Lokasi</th>
              <th scope="col">Harga</th>
              <th scope="col">Detail</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className="text-dark" key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.nama}</td>
                <td>{item.kategori}</td>
                <td>{item.kategori}</td>
                <td>{item.harga}</td>
                <td>
                  <button
                    className="btn btn-sm text-white button-detail"
                    onClick={() => {
                      setModalShow(true);
                      setId(item.id);
                    }}
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Kelola;
