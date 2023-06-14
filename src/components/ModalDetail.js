import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { data } from "../data/data";

function MyVerticallyCenteredModal(props) {
  const [dataById, setDataById] = useState([]);

  useEffect(() => {
    setDataById(data.filter((item) => item.id === props.id));
  }, [props.id]);

  return (
    <React.Fragment>
      {dataById.map((item) => (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Detail Lapangan {item.nama}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{item.nama}</h4>
            <p>Kategori: {item.kategori}</p>
            <p>Lokasi: {item.lokasi}</p>
            <p>Harga: {item.harga}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={props.onHide}
              style={{ backgroundColor: "#ff7315" }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ))}
    </React.Fragment>
  );
}

export default MyVerticallyCenteredModal;
