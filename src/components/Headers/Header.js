// src/components/Headers/Header.js
import React from 'react';
import { Container, Button } from 'reactstrap';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/auth/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <>
      <div className='header bg-gradient-info pb-8 pt-5 pt-md-8'>
        <Container fluid>
          <div className='header-body'>
            {/* Card stats */}
            {currentUser && (
              <div className='text-right'>
                <Button color='secondary' onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
