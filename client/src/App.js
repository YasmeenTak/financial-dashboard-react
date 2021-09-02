import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Sidedbar from './Components/Sidedbar/Sidedbar';
import DebtorManagement from './Components/DebtorManagementPage/DebtorManagement';
import NotificationManagement from './Components/NotificationManagementPage/Notification';
import Notification from './Components/NotificationPage/Notification';
import PersonnelManagement from './Components/PersonnelManagementPage/PersonnelManagement';
import AddGroup from './Components/AddGroup/AddGroup';
import AddPerson from './Components/AddPerson/AddPerson';
import AddInstruction from './Components/AddInstruction/AddInstruction';
import AddLink from './Components/AddLink/AddLink';
import AddAdmin from './Components/AddAdmin/AddAdmin';
import AddNotifManagement from './Components/AddNotifManagement/AddNotifManagement';
import Instruction from './Components/InstructionPage/Instruction';
import EditNotification from './Components/EditNotification/EditNotification';
import Charts from './Components/Charts/Charts';
import Admins from './Components/AdminsPage/Admins';
import Groups from './Components/GroupsPage/Groups';
import Links from './Components/LinksPage/Links';
import Archive from './Components/ArchivePage/Archive';
import AddDebtor from './Components/AddDebtor/AddDebtor';

function App() {
  const [sidebarState, setSidebarState] = useState();
  const handelSidebarState = (data) => {
    setSidebarState(data);
  };

  return (
    <Router>
      <div className='App'>
        <Route exact path='/login'>
          <Login />
        </Route>

        <Navbar onShowSidebarChange={handelSidebarState} />
        <div className='containerr'>
          <Sidedbar sidebarState={sidebarState} />
          <Switch>
            <Charts exact path='/' />
            <Charts exact path='/Charts' />
            <NotificationManagement path='/NotificationManagement' />
            <DebtorManagement path='/DebtorManagement' />
            <PersonnelManagement path='/PersonnelManagement' />
            <Admins exact path='/Admins' />
            <Notification path='/Notification' />
            <Groups path='/Groups' />
            <Links path='/Links' />
            <Instruction path='/Instruction' />
            <Archive path='/Archive' />

            {/* Add and edit pages routes */}
            <AddNotifManagement path='/addToNotifManagement' />
            <AddDebtor path='/AddDebtor' />
            <AddPerson path='/addPerson' />
            <AddAdmin path='/addAdmin' />
            <EditNotification path='/editNotification' />
            <AddGroup path='/addGroup' />
            <AddLink path='/addLink' />
            <AddInstruction path='/addInstruction' />
            {/* Add and edit pages routes */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
