import './App.css';
import SidebarAdmin from './components/admin/SidebarAdmin'
import Login from './components/Login'
import Dashboard from './pages/dashboard'
import TopBar from './components/admin/TopBar'
import 'react-bootstrap'

function App() {
  return (
    <div>
          <TopBar/>
          <Dashboard/>
          {/* <Login/> */}
          
    </div>
  );
}

export default App;
