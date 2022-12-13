import React from 'react';
import { Container, Navbar, Row, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/logo-agence.png';
import '../style.css';
import './Navbar.css';

const Navigation = () => (
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Row className='logo-agence'>
              <Navbar.Brand href="#" >
                <img
                  src={logo}
                  height="50"
                  alt="Logo de l'agence"
                />
              </Navbar.Brand>
            </Row>
            <Row className='pages'> 
              <Nav.Link href="#offres" className='link-pages'>Nos offres</Nav.Link>
              <Nav.Link href="#agence" className='link-pages'>L'agence</Nav.Link>
              <Nav.Link href="#services" className='link-pages'>Nos services</Nav.Link>
              <Nav.Link href="#contact" className='link-pages'>Contact</Nav.Link>
              <Nav.Link href="#mon-compte" className='link-pages'>Mon compte</Nav.Link>
              <Nav.Link href="#notif" className='notification'>
                <FontAwesomeIcon 
                  icon={faHeart} 
                  size='2x' 
                  color='#3e4854'
                />
              </Nav.Link>
            </Row>
          
          </Container>
        </Navbar>
    );

export default Navigation;
