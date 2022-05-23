import {useEffect,useState,Component,React} from 'react';
import PieChart from '../components/admin/PieChart';
import SidebarAdmin from '../components/admin/SidebarAdmin'
// import {Card, Container, Col, Row, Form, Button} from 'react-bootstrap'
// import { BiUserCircle } from 'react-icons/bi';
// import uiImg from '../images/login_page.svg';
// import TestData from '../data/test.json'

const Dashboard = () => {
   return (
   <div style={{color: 'black'}} className="col main pt-5 mt-3">
       <p style={{color: 'black'}} className="lead d-none d-sm-block">Equipment Details and Requisitions</p>

       <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more
        </div>

       
        <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                  <div className="mb-5" style={{height:"100px",width:"200px"}}><PieChart/> 
                </div>
        </div>
    </div>
   )
}

export default Dashboard;
