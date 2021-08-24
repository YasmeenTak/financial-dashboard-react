import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Sidedbar from './Components/Sidedbar/Sidedbar';
import DebtorManagement from './Components/DebtorManagement/DebtorManagement';
import NotificationManagement from './Components/NotificationManagement/Notification';
import Notification from './Components/Notification/Notification';
import TableNotif from './Components/TableNotif/TableNotif';
import AddDebater from './Components/AddDebtor/AddDebater';

import Home from './Components/Home/Home';
import AddPersonnel from './Components/AddPersonnel/AddPersonnel';
import PersonnelManagement from './Components/PersonnelManagement/PersonnelManagement';
import Tt from './Components/tt/tt';
import AddName from './Components/AddName/AddName';
import AddPerson from './Components/AddPerson/AddPerson';
import AddInstruction2 from './Components/AddInstruction2/AddInstruction2';
import AddLink from './Components/AddLink/AddLink';
import Instruction from './Components/Instruction/Instruction';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        {/* <AddName /> */}
        {/* <Tt /> */}
        {/* <TableNotif /> */}
        {/* <Login /> */}
        {/* <Sidedbar /> */}

        {/* <AddDebater /> */}
        {/* <AddPersonnel /> */}

        <div className='containerr'>
          <Sidedbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/DebtorManagement'>
              <DebtorManagement />
            </Route>

            <Route path='/NotificationManagement'>
              <NotificationManagement />
            </Route>

            <Route path='/PersonnelManagement'>
              <PersonnelManagement />
            </Route>

            <Route path='/Notification'>
              <Notification />
            </Route>

            <Route path='/AddName'>
              <AddName />
            </Route>

            <Route path='/AddPerson'>
              <AddPerson />
            </Route>

            <Route path='/AddInstruction2'>
              <AddInstruction2 />
            </Route>

            <Route path='/AddLink'>
              <AddLink />
            </Route>

            <Route path='/Instruction'>
              <Instruction />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
