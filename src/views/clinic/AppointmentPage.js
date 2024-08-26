// src/views/clinic/AppointmentPage.js
import React from 'react';
import { Card, CardHeader, CardBody, Container, Row, Col } from 'reactstrap';
import Header from 'components/Headers/Header.js';

const AppointmentPage = () => {
  return (
    <>
      <Header />
      <Container className='mt--7' fluid>
        <Row>
          <div className='col'>
            <Card className='shadow'>
              <CardHeader className='bg-transparent'>
                <h3 className='mb-0'>Janji Temu Klinik YAMR</h3>
              </CardHeader>
              <CardBody>
                <Row className='janji-temu-klinik'>
                  <Col lg='3' md='6'>
                    {/* Add appointment content here */}
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

export default AppointmentPage;
