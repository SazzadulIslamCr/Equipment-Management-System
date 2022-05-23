import React, { useState } from "react";
import "./TopBar.css";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import Logo from '../../images/coderexIcon.png'
import 'react-bootstrap-icons'
//import Login from '../Login'

function TopBar() {
    return (
    <div className="TopBar">
        <Navbar sticky="top">
            <Nav.Item>
                <img src={Logo} width='45px'></img>
            </Nav.Item>
            <Nav.Item style={{marginLeft: 'auto'}}>
                Equipment Management System
            </Nav.Item>
            <Nav.Link href='#' style={{marginLeft: 'auto', paddingRight:'2em'}}>
                <i class="bi bi-bell-fill"></i>
            </Nav.Link>
       </Navbar>
    </div>)
}


export default TopBar;