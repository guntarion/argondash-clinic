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

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [newAppointment, setNewAppointment] = useState({
    patient_id: '',
    appointment_date: '',
    appointment_order: '',
    reason: '',
    status: '',
  });
  const [editingAppointment, setEditingAppointment] = useState(null);

  useEffect(() => {
    fetchAppointments();
    fetchPatients();
  }, []);

  const fetchAppointments = async () => {
    const response = await axios.get('http://localhost:8080/appointments/');
    setAppointments(response.data);
  };

  const fetchPatients = async () => {
    const response = await axios.get('http://localhost:8080/patients/');
    setPatients(response.data);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const results = patients.filter((patient) =>
      patient.full_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      patient.nickname.toLowerCase().includes(e.target.value.toLowerCase()) ||
      patient.reg_id.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredPatients(results);
  };

  const handlePatientSelect = (patient) => {
    setNewAppointment({ ...newAppointment, patient_id: patient.id });
    setSelectedPatient(patient);
    setFilteredPatients([]);
    setSearchTerm('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleCreateAppointment = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/appointments/', newAppointment);
    fetchAppointments();
    setNewAppointment({
      patient_id: '',
      appointment_date: '',
      appointment_order: '',
      reason: '',
      status: '',
    });
    setSelectedPatient(null);
  };

  const handleEditAppointment = (appointment) => {
    setEditingAppointment(appointment);
  };

  const handleUpdateAppointment = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/appointments/${editingAppointment.id}`, editingAppointment);
    fetchAppointments();
    setEditingAppointment(null);
  };

  const handleDeleteAppointment = async (id) => {
    await axios.delete(`http://localhost:8080/appointments/${id}`);
    fetchAppointments();
  };

  const handleEditingInputChange = (e) => {
    const { name, value } = e.target;
    setEditingAppointment({ ...editingAppointment, [name]: value });
  };

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Appointment Klinik YAMR</h3>
              </CardHeader>
              <CardBody>
                <Row className="appointment-klinik">
                  <Col lg="12" md="12">
                    <Table className="align-items-center table-flush" responsive>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Patient</th>
                          <th scope="col">Appointment Date</th>
                          <th scope="col">Appointment Order</th>
                          <th scope="col">Reason</th>
                          <th scope="col">Status</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointments.map((appointment) => (
                          <tr key={appointment.id}>
                            <td>{patients.find(p => p.id === appointment.patient_id)?.full_name}</td>
                            <td>{appointment.appointment_date}</td>
                            <td>{appointment.appointment_order}</td>
                            <td>{appointment.reason}</td>
                            <td>{appointment.status}</td>
                            <td>
                              <Button color="primary" size="sm" onClick={() => handleEditAppointment(appointment)}>Edit</Button>
                              <Button color="danger" size="sm" onClick={() => handleDeleteAppointment(appointment.id)}>Delete</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg="6">
                    <h4>Add New Appointment</h4>
                    <Form onSubmit={handleCreateAppointment}>
                      <FormGroup>
                        <Label for="searchTerm">Search Patient</Label>
                        <Input
                          type="text"
                          name="searchTerm"
                          value={searchTerm}
                          onChange={handleSearch}
                          placeholder="Search by full name, nickname or reg id"
                        />
                        {filteredPatients.length > 0 && (
                          <ul className="list-group">
                            {filteredPatients.map((patient) => (
                              <li key={patient.id} className="list-group-item" onClick={() => handlePatientSelect(patient)}>
                                {patient.full_name} ({patient.nickname}) - {patient.reg_id}
                              </li>
                            ))}
                          </ul>
                        )}
                        {selectedPatient && (
                          <div className="mt-2">
                            <strong>Selected Patient:</strong>
                            <p>{selectedPatient.full_name} ({selectedPatient.nickname}) - {selectedPatient.reg_id}</p>
                          </div>
                        )}
                      </FormGroup>
                      <FormGroup>
                        <Label for="appointment_date">Appointment Date</Label>
                        <Input
                          type="datetime-local"
                          name="appointment_date"
                          value={newAppointment.appointment_date}
                          onChange={handleInputChange}
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="appointment_order">Appointment Order</Label>
                        <Input
                          type="number"
                          name="appointment_order"
                          value={newAppointment.appointment_order}
                          onChange={handleInputChange}
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="reason">Reason</Label>
                        <Input
                          type="text"
                          name="reason"
                          value={newAppointment.reason}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="status">Status</Label>
                        <Input
                          type="text"
                          name="status"
                          value={newAppointment.status}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      <Button color="primary" type="submit">Add Appointment</Button>
                    </Form>
                  </Col>
                  <Col lg="6">
                    {editingAppointment && (
                      <>
                        <h4>Edit Appointment</h4>
                        <Form onSubmit={handleUpdateAppointment}>
                          <FormGroup>
                            <Label for="appointment_date">Appointment Date</Label>
                            <Input
                              type="datetime-local"
                              name="appointment_date"
                              value={editingAppointment.appointment_date}
                              onChange={handleEditingInputChange}
                              required
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="appointment_order">Appointment Order</Label>
                            <Input
                              type="number"
                              name="appointment_order"
                              value={editingAppointment.appointment_order}
                              onChange={handleEditingInputChange}
                              required
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="reason">Reason</Label>
                            <Input
                              type="text"
                              name="reason"
                              value={editingAppointment.reason}
                              onChange={handleEditingInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="status">Status</Label>
                            <Input
                              type="text"
                              name="status"
                              value={editingAppointment.status}
                              onChange={handleEditingInputChange}
                            />
                          </FormGroup>
                          <Button color="primary" type="submit">Update Appointment</Button>
                          <Button color="secondary" onClick={() => setEditingAppointment(null)}>Cancel</Button>
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

export default Appointment;
