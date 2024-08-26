// src/views/auth/Login.js
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
  // Row,
  Col,
  Alert,
} from 'reactstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError('');
      await auth.login(email, password);
      navigate('/admin/index');
    } catch (error) {
      setError('Failed to log in: ' + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setError('');
      await auth.loginWithGoogle();
      navigate('/admin/index');
    } catch (error) {
      setError('Failed to log in with Google: ' + error.message);
    }
  };

  if (!auth) {
    return <div>Loading...</div>;
  }

  return (
    <Col lg='5' md='7'>
      <Card className='bg-secondary shadow border-0'>
        <CardHeader className='bg-transparent pb-5'>
          <div className='text-muted text-center mt-2 mb-3'>
            <small>Sign in with</small>
          </div>
          <div className='btn-wrapper text-center'>
            <Button
              className='btn-neutral btn-icon'
              color='default'
              href='#pablo'
              onClick={handleGoogleLogin}
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
            <small>Or sign in with credentials</small>
          </div>
          <Form role='form' onSubmit={handleLogin}>
            <FormGroup className='mb-3'>
              <InputGroup className='input-group-alternative'>
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
            <div className='text-center'>
              <Button className='my-4' color='primary' type='submit'>
                Sign in
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Login;
