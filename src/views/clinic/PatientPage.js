// src/views/clinic/PatientPage.js
import React from 'react';
import { Card, CardHeader, CardBody, Container, Row, Col } from 'reactstrap';
import Header from 'components/Headers/Header.js';

const PatientPage = () => {
  return (
    <>
      <Header />
      <Container className='mt--7' fluid>
        <Row>
          <div className='col'>
            <Card className='shadow'>
              <CardHeader className='bg-transparent'>
                <h3 className='mb-0'>Pasien Klinik YAMR</h3>
              </CardHeader>
              <CardBody>
                <Row className='pasien-klinik'>
                  <Col lg='3' md='6'>
                    {/* Add patient content here */}
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

export default PatientPage;
