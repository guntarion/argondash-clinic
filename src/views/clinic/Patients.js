import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import axios from 'axios';
import Header from 'components/Headers/Header.js';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({
    reg_id: '',
    full_name: '',
    nickname: '',
    date_of_birth: '',
    gender: '',
    contact_number: '',
    email: '',
    address: '',
    is_jamaah: false,
    no_rw: '',
    no_rt: '',
    domisili: '',
  });
  const [editingPatient, setEditingPatient] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    const response = await axios.get('http://localhost:8080/patients/');
    setPatients(response.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({ ...newPatient, [name]: value });
  };

  const handleCreatePatient = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/patients/', newPatient);
    fetchPatients();
    setNewPatient({
      reg_id: '',
      full_name: '',
      nickname: '',
      date_of_birth: '',
      gender: '',
      contact_number: '',
      email: '',
      address: '',
      is_jamaah: false,
      no_rw: '',
      no_rt: '',
      domisili: '',
    });
  };

  const handleEditPatient = (patient) => {
    setEditingPatient(patient);
  };

  const handleUpdatePatient = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/patients/${editingPatient.id}`, editingPatient);
    fetchPatients();
    setEditingPatient(null);
  };

  const handleDeletePatient = async (id) => {
    await axios.delete(`http://localhost:8080/patients/${id}`);
    fetchPatients();
  };

  const handleEditingInputChange = (e) => {
    const { name, value } = e.target;
    setEditingPatient({ ...editingPatient, [name]: value });
  };

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Pasien Klinik YAMR</h3>
              </CardHeader>
              <CardBody>
                <Row className="pasien-klinik">
                  <Col lg="12" md="12">
                    <Table className="align-items-center table-flush" responsive>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Reg ID</th>
                          <th scope="col">Full Name</th>
                          <th scope="col">Nickname</th>
                          <th scope="col">Date of Birth</th>
                          <th scope="col">Gender</th>
                          <th scope="col">Contact</th>
                          <th scope="col">Email</th>
                          <th scope="col">Address</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patients.map((patient) => (
                          <tr key={patient.id}>
                            <td>{patient.reg_id}</td>
                            <td>{patient.full_name}</td>
                            <td>{patient.nickname}</td>
                            <td>{patient.date_of_birth}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.contact_number}</td>
                            <td>{patient.email}</td>
                            <td>{patient.address}</td>
                            <td>
                              <Button color="primary" size="sm" onClick={() => handleEditPatient(patient)}>Edit</Button>
                              <Button color="danger" size="sm" onClick={() => handleDeletePatient(patient.id)}>Delete</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg="6">
                    <h4>Add New Patient</h4>
                    <Form onSubmit={handleCreatePatient}>
                      <FormGroup>
                        <Label for="reg_id">Reg ID</Label>
                        <Input
                          type="text"
                          name="reg_id"
                          value={newPatient.reg_id}
                          onChange={handleInputChange}
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="full_name">Full Name</Label>
                        <Input
                          type="text"
                          name="full_name"
                          value={newPatient.full_name}
                          onChange={handleInputChange}
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="nickname">Nickname</Label>
                        <Input
                          type="text"
                          name="nickname"
                          value={newPatient.nickname}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="date_of_birth">Date of Birth</Label>
                        <Input
                          type="date"
                          name="date_of_birth"
                          value={newPatient.date_of_birth}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="gender">Gender</Label>
                        <Input
                          type="text"
                          name="gender"
                          value={newPatient.gender}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="contact_number">Contact Number</Label>
                        <Input
                          type="text"
                          name="contact_number"
                          value={newPatient.contact_number}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                          type="email"
                          name="email"
                          value={newPatient.email}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="address">Address</Label>
                        <Input
                          type="text"
                          name="address"
                          value={newPatient.address}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="is_jamaah">Is Jamaah</Label>
                        <Input
                          type="checkbox"
                          name="is_jamaah"
                          checked={newPatient.is_jamaah}
                          onChange={() => setNewPatient({ ...newPatient, is_jamaah: !newPatient.is_jamaah })}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="no_rw">No RW</Label>
                        <Input
                          type="text"
                          name="no_rw"
                          value={newPatient.no_rw}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="no_rt">No RT</Label>
                        <Input
                          type="text"
                          name="no_rt"
                          value={newPatient.no_rt}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="domisili">Domisili</Label>
                        <Input
                          type="text"
                          name="domisili"
                          value={newPatient.domisili}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      <Button color="primary" type="submit">Add Patient</Button>
                    </Form>
                  </Col>
                  <Col lg="6">
                    {editingPatient && (
                      <>
                        <h4>Edit Patient</h4>
                        <Form onSubmit={handleUpdatePatient}>
                          <FormGroup>
                            <Label for="reg_id">Reg ID</Label>
                            <Input
                              type="text"
                              name="reg_id"
                              value={editingPatient.reg_id}
                              onChange={handleEditingInputChange}
                              required
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="full_name">Full Name</Label>
                            <Input
                              type="text"
                              name="full_name"
                              value={editingPatient.full_name}
                              onChange={handleEditingInputChange}
                              required
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="nickname">Nickname</Label>
                            <Input
                              type="text"
                              name="nickname"
                              value={editingPatient.nickname}
                              onChange={handleEditingInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="date_of_birth">Date of Birth</Label>
                            <Input
                              type="date"
                              name="date_of_birth"
                              value={editingPatient.date_of_birth}
                              onChange={handleEditingInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="gender">Gender</Label>
                            <Input
                              type="text"
                              name="gender"
                              value={editingPatient.gender}
                              onChange={handleEditingInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="contact_number">Contact Number</Label>
                            <Input
                              type="text"
                              name="contact_number"
                              value={editingPatient.contact_number}
                              onChange={handleEditingInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                              type="email"
                              name="email"
                              value={editingPatient.email}
                              onChange={handleEditingInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="address">Address</Label>
                            <Input
                              type="text"
                              name="address"
                              value={editingPatient.address}
                              onChange={handleEditingInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="is_jamaah">Is Jamaah</Label>
                            <Input
                              type="checkbox"
                              name="is_jamaah"
                              checked={editingPatient.is_jamaah}
                              onChange={() => setEditingPatient({ ...editingPatient, is_jamaah: !editingPatient.is_jamaah })}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="no_rw">No RW</Label>
                            <Input
                              type="text"
                              name="no_rw"
                              value={editingPatient.no_rw}
                              onChange={handleEditingInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="no_rt">No RT</Label>
                            <Input
                              type="text"
                              name="no_rt"
                              value={editingPatient.no_rt}
                              onChange={handleEditingInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="domisili">Domisili</Label>
                            <Input
                              type="text"
                              name="domisili"
                              value={editingPatient.domisili}
                              onChange={handleEditingInputChange}
                            />
                          </FormGroup>
                          <Button color="primary" type="submit">Update Patient</Button>
                          <Button color="secondary" onClick={() => setEditingPatient(null)}>Cancel</Button>
                        </Form>
                      </>
                    )}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Patients;
