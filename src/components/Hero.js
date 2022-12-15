import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import imageHero from '../assets/imageHero.png';
import './Hero.css';

const Hero = () => {
    return (
      <Container>
        <Row>
            <img
                src={imageHero}
                width='100%'
                alt="Logo de l'agence"
            />
        </Row>
        <Row>
            <Form className='formHero'>
                <Col lg={2}>
                    <Form.Control placeholder='Vente' className='formVente'/>
                </Col>
                <Col lg={3}>
                    <Form.Control placeholder='Type de bien' className='formBien'/>
                </Col>
                <Col lg={5}>
                    <Form.Control placeholder='Où ?' className='formLoc' />
                </Col>
                <Col lg={1}>
                    <Form.Control placeholder='0 km' className='formRayon'/>
                </Col>
                <Col lg={1}>
                    <Button className='search'>
                        <FontAwesomeIcon 
                            icon={faMagnifyingGlass} 
                            size='2x' 
                            color='#fff'
                        />
                    </Button>
                </Col>
            </Form>
        </Row>
      </Container>
    );
  }

export default Hero;
