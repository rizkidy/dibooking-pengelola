import React, { useState} from 'react'
import { Col, Container, Row, Card, Image, Button, Form, FloatingLabel } from "react-bootstrap";
import TextInputWithFloatLabel from '../components/TextInputWithFloatlabel';

function Detail() {
  const dataPengelola = {
    imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
    name: "Rizki Dwi Yulianto",
  };

  const [form, setForm] = React.useState({
    nama: "",
    email: "",
    nomor_ponser: "",
    lokasi: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [isOutlineButtonHovered, setOutlineButtonHovered] = useState(false);
  const [isFillButtonHovered, setFillButtonHovered] = useState(false);

  const buttonOutline = {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    color: '#ff7315',
    width: '220px',
    height: '40px',
    border: '1px solid #ff7315',
    borderRadius: '0.3rem',
    boxShadow: '3px 3px 2px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease-in-out'
  };

  const buttonOutlineHover = {
    ...buttonOutline,
    boxShadow: '3px 3px 2px rgba(0, 0, 0, 0.2)'
  };

  const buttonFill = {
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: '#ff7315',
    color: 'white',
    width: '100%',
    height: '50px',
    marginTop: '0.1rem',
    border: 'none',
    borderRadius: '0.3rem',
    boxShadow: '3px 3px 2px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease-in-out'
  };

  const buttonFillHover = {
    ...buttonFill,
    backgroundColor: '#ff8f44',
    color: '#ffffff',
    boxShadow: '3px 3px 2px rgba(0, 0, 0, 0.2)'
  };

  const dataLokasi = {
    options: [
      { label: 'Buka menu pilih ini', value: '' },
      { label: 'Banyumanik', value: 'Banyumanik' },
      { label: 'Candisari', value: 'Candisari' },
      { label: 'Gayamsari', value: 'Gayamsari' },
      { label: 'Genuk', value: 'Genuk' },
      { label: 'Gunungpati', value: 'Gunungpati' },
      { label: 'Mijen', value: 'Mijen' },
      { label: 'Ngaliyan', value: 'Ngaliyan' },
      { label: 'Pedurungan', value: 'Pedurungan' },
      { label: 'Semarang Barat', value: 'Semarang Barat' },
      { label: 'Semarang Selatan', value: 'Semarang Selatan' },
      { label: 'Semarang Tengah', value: 'Semarang Tengah' },
      { label: 'Semarang Timur', value: 'Semarang Timur' },
      { label: 'Semarang Utara', value: 'Semarang Utara' },
      { label: 'Tembalang', value: 'Tembalang' },
      { label: 'Tugu', value: 'Tugu' }
    ]
  };

  return (
    <>
      <Container className="py-5">
        <Row>
          <Col lg="4">
            <Card className="mb-4">
              <Card.Body className="text-center">
                <Image
                  src={dataPengelola.imageSrc}
                  alt="avatar"
                  style={{width: '150px'}}
                  roundedCircle/>
                <Card.Title className="mt-3">{dataPengelola.name}</Card.Title>
                <div className="d-flex justify-content-center mb-2">
                  <Button style={isFillButtonHovered ? buttonFillHover : buttonFill}
                    onMouseEnter={() => setFillButtonHovered(true)}
                    onMouseLeave={() => setFillButtonHovered(false)}
                  >Edit Profil</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="8">
            <Card className="mb-4">
              <Card.Body>
                <Row>
                  <Col sm="12" className="d-flex flex-column justify-content-center align-content-center py-4">
                    <h2 style={{ fontWeight: "600" }}>Profil</h2>
                    <Card.Text>Lengkapi profil Anda</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Body>
                <Row>
                  <Col sm="12" className="d-flex flex-column justify-content-center align-content-center pt-4 pb-4">
                    <TextInputWithFloatLabel
                      id='namaLengkap'
                      type='text'
                      placeholder="Nama Lengkap"
                      value={form.nama}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm="12" className="d-flex flex-column justify-content-center align-content-center pb-4">
                    <TextInputWithFloatLabel
                      id='email'
                      type='text'
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm="12" className="d-flex flex-column justify-content-center align-content-center pb-4">
                    <TextInputWithFloatLabel
                      id='nomorTelepon'
                      type='text'
                      placeholder="081234567890"
                      value={form.nomor_ponsel}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm="12" className="d-flex flex-column justify-content-center align-content-center pb-0">
                    <FloatingLabel
                      size="sm"
                      controlId="floatingSelect"
                      label="Lokasi"
                      className="mb-3"
                    >
                      <Form.Select
                        aria-label="Floating label select"
                        name="lokasi"
                        value={form.lokasi}
                        onChange={handleChange}
                      >
                        {dataLokasi.options.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col sm="12" className="d-flex flex-column flex-sm-row justify-content-between align-content-center pb-4">
                    <Form.Check type="switch" id="custom-switch" label="Aktifkan Notifikasi" />
                    <Button style={isOutlineButtonHovered ? buttonOutlineHover : buttonOutline}
                      onMouseEnter={() => setOutlineButtonHovered(true)}
                      onMouseLeave={() => setOutlineButtonHovered(false)}
                    >Verifikasi No. WhatsApp</Button>
                  </Col>
                  <Col sm="12" className="d-flex justify-content-between align-content-center pb-4">
                    <Button style={isFillButtonHovered ? buttonFillHover : buttonFill}
                      onMouseEnter={() => setFillButtonHovered(true)}
                      onMouseLeave={() => setFillButtonHovered(false)}
                    >Simpan</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Detail
