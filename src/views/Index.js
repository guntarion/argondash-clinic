// src/views/Index.js
/*!
 * Argon Dashboard React - v1.2.4
 * Product Page: https://www.creative-tim.com/product/argon-dashboard-react
 */

import Chart from 'chart.js';
// reactstrap components
import { Button, Card, CardHeader, Container, Row, Col } from 'reactstrap';

// core components
import { chartOptions, parseOptions } from 'variables/charts.js';

import Header from 'components/Headers/Header.js';

const Index = (props) => {
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className='mt--7' fluid>
        <Row className='mt-5'>
          <Col className='mb-5 mb-xl-0' xl='8'>
            <Card className='shadow'>
              <CardHeader className='border-0'>
                <Row className='align-items-center'>
                  <div className='col'>
                    <h3 className='mb-0'>Klinik Al Muhajirin</h3>
                  </div>
                  <div className='col text-right'>
                    <Button
                      color='primary'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                      size='sm'
                    >
                      YAMR
                    </Button>
                  </div>
                </Row>
              </CardHeader>
            </Card>
          </Col>
          <Col xl='4'></Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
