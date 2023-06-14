/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

function ModalTambahLap(props) {

    return (
        <React.Fragment>
            <Modal {...props} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Tambah Lapangan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control type="text" placeholder="Nama lapangan" />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Kategori</Form.Label>
                            <Form.Select className='mb-3' aria-label="Default select example">
                                <option>Pilih kategori Lapangan</option>
                                <option value="1">Sepak Bola</option>
                                <option value="2">Futsal</option>
                                <option value="3">Bulu Tangkis</option>
                                <option value="4">Basket</option>
                                <option value="5">Voli</option>
                                <option value="6">Billiard</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Lokasi</Form.Label>
                            <Form.Control type="text" placeholder="Lokasi Lapangan" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Harga</Form.Label>
                            <Form.Control type="text" placeholder="Harga Lapangan" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Fasilitas Lainnya</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn-dark button-detail' onClick={props.onHide}>
                        Tambah
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>

    )
}

export default ModalTambahLap
