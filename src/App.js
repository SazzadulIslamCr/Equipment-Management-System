import './App.css';
import SidebarAdmin from './components/admin/SidebarAdmin'
import Login from './components/Login'
import Dashboard from './pages/dashboard'
import TopBar from './components/admin/TopBar'
import 'react-bootstrap'
import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div>
      <TopBar/>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <SidebarAdmin/>
        </Grid>
        <Grid item xs={10}>
          <Dashboard/>
          {/* <Login/> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
