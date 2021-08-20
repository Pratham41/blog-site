import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container, Nav } from 'react-bootstrap';
const Header = () => {
  return (
    <header>
      <Navbar
        className='py-3'
        bg='dark'
        expand='lg'
        variant='dark'
        collapseOnSelect
      >
        <Container className='d-flex justify-content-between'>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <h4 className='text-success'>
                BLOG<span className='text-warning'>SITE</span>
              </h4>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/'>
                <Nav.Link>
                  <i className='fas fa-home text-success'>
                    <strong className='text-warning'> HOME</strong>
                  </i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/create'>
                <Nav.Link>
                  <i className='fas fa-edit text-success'>
                    <strong className='text-warning'> CREATE</strong>
                  </i>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
