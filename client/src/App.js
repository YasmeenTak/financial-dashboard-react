import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Sidedbar from './Components/Sidedbar/Sidedbar';
import DebtorManagement from './Components/DebtorManagement/DebtorManagement';
import NotificationManagement from './Components/NotificationManagement/Notification';
import TableNotif from './Components/TableNotif/TableNotif';
import AddDebater from './Components/AddDebtor/AddDebater';

import Home from './Components/Home/Home';
import AddPersonnel from './Components/AddPersonnel/AddPersonnel';
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        {/* <TableNotif /> */}
        <Login />
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
