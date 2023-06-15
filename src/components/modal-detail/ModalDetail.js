import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './modal-detail.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Modal } from "react-bootstrap";
import { data } from "../../data/DataKelola";

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
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Detail {item.nama}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Nama lapangan" value={item.nama} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Kategori</Form.Label>
                <Form.Select className='mb-3' aria-label="Default select example">
                  <option>{item.kategori}</option>
                  <option value="1">Sepak Bola</option>
                  <option value="2">Futsal</option>
                  <option value="3">Bulu Tangkis</option>
                  <option value="4">Basket</option>
                  <option value="5">Voli</option>
                  <option value="6">Billiard</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Lokasi</Form.Label>
                <Form.Control type="text" placeholder="Lokasi Lapangan" value={item.lokasi} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Harga</Form.Label>
                <Form.Control type="text" placeholder="Harga Lapangan" value={item.harga} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="textAreaFasilitas">
                <Form.Label>Fasilitas Lainnya</Form.Label>
                <Form.Control as="textarea" rows={3} value={item.fasilitas} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={props.onHide}
              className="btn-dark"
            >
              Update
            </Button>
            <Button
              onClick={props.onHide}
              className="btn-dark button-detail"
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
