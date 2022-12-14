import './App.css';
import Adduser from './Components/Adduser';
import Listuser from './Components/Listuser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Components/Login';
import Header from './Components/Header';
import UserDashboard from './Components/UserDashboard';
import ListHistory from './Components/Leavehistory';
import PermissionHistory from './Components/Permissionhistory'
import WFHhistory from './Components/WFHhistory'
import EnterTimeSheet from './Components/EnterTimeSheet';
import ViewTimeSheet from './Components/ViewTimeSheet';
import OnBoardEmployee from './Components/OnbordEmployee'
import EmployeeList from './Components/EmployeeList';
import ActivateAccount from './Components/ActivateAccount';
import Forgetpassword from './Components/Forgetpassword'

const  App = () => {
  return (
     <div> 
      {((window.location.pathname !== '/') && (window.location.pathname !== '/forgetpassword') &&
      (window.location.pathname !== '/activate')) && <Header/>}
     <Router>
       <Routes>
          <Route path='' element={<Login/>} />
          <Route path='/add' element={<Adduser/>} />
          <Route path='/list' element={<Listuser/>} />
          <Route path='/dashboard' element={<UserDashboard/>} />
          <Route path='/leavehistory' element={<ListHistory/>} />
          <Route path='/permissionhistory' element={<PermissionHistory/>} />
          <Route path='/wfhhistory' element={<WFHhistory/>} />
          <Route path='/entersheet' element={<EnterTimeSheet/>} />
          <Route path='/viewsheet' element={<ViewTimeSheet/>} />
          <Route path='/onboard' element={<OnBoardEmployee/>} />
          <Route path='/forgetpassword' element={<Forgetpassword/>} />
          <Route path='/activate' element={<ActivateAccount/>} />
          <Route path='/employeelist' element={<EmployeeList/>} />
        </Routes>
      </Router> 
  </div>
  );
}

export default App;

