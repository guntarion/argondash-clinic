// src/views/auth/Register.js
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Alert,
} from 'reactstrap';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      await signup(email, password);
      navigate('/admin/index');
    } catch (error) {
      setError('Failed to create an account: ' + error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      setError('');
      await loginWithGoogle();
      navigate('/admin/index');
    } catch (error) {
      setError('Failed to sign up with Google: ' + error.message);
    }
  };

  return (
    <Col lg='6' md='8'>
      <Card className='bg-secondary shadow border-0'>
        <CardHeader className='bg-transparent pb-5'>
          <div className='text-muted text-center mt-2 mb-4'>
            <small>Register dengan</small>
          </div>
          <div className='text-center'>
            <Button
              className='btn-neutral btn-icon'
              color='default'
              href='#pablo'
              onClick={handleGoogleSignUp}
            >
              <span className='btn-inner--icon'>
                <img
                  alt='...'
                  src={
                    require('../../assets/img/icons/common/google.svg').default
                  }
                />
              </span>
              <span className='btn-inner--text'>Google</span>
            </Button>
          </div>
        </CardHeader>
        <CardBody className='px-lg-5 py-lg-5'>
          {error && <Alert color='danger'>{error}</Alert>}
          <div className='text-center text-muted mb-4'>
            <small>Or sign up with credentials</small>
          </div>
          <Form role='form' onSubmit={handleSubmit}>
            <FormGroup>
              <InputGroup className='input-group-alternative mb-3'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <i className='ni ni-hat-3' />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder='Name'
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className='input-group-alternative mb-3'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <i className='ni ni-email-83' />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder='Email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className='input-group-alternative'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <i className='ni ni-lock-circle-open' />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder='Password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
            </FormGroup>
            <Row className='my-4'>
              <Col xs='12'>
                <div className='custom-control custom-control-alternative custom-checkbox'>
                  <input
                    className='custom-control-input'
                    id='customCheckRegister'
                    type='checkbox'
                  />
                  <label
                    className='custom-control-label'
                    htmlFor='customCheckRegister'
                  >
                    <span className='text-muted'>
                      I agree with the{' '}
                      <a href='#pablo' onClick={(e) => e.preventDefault()}>
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>
              </Col>
            </Row>
            <div className='text-center'>
              <Button className='mt-4' color='primary' type='submit'>
                Create account
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Register;
