import React from 'react'
import {Col, Container, Row, Form, Button} from 'react-bootstrap'
import './login.css'
import { BiUserCircle } from 'react-icons/bi';
import uiImg from '../images/login_page.svg';

function login() {
  return (
    <>
      <Container className='m-5'>
        <Row>
            <Col lg={6} md={6} className='text-center mt-5 p-3'>
                <BiUserCircle size='60px' className='loginIcon'/>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="btn btn-primary w-100" type="submit">
                        Sign In
                    </Button>
                    {/* forgot-password can be added later here */}
                </Form>
            </Col> 
            <Col lg={6} md={6}>
                <img className='svg' src={uiImg} alt=''/>
            </Col>
        </Row>
      </Container>  

    </>
  )
}

export default login