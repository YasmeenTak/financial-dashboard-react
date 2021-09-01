import React, { useState } from 'react';
import './style.css';
//import Navbar from '../Navbar/Navbar';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import GroupWorkOutlinedIcon from '@material-ui/icons/GroupWorkOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import { Link } from 'react-router-dom';

export default function Sidedbar({ sidebarState }) {
  const [item, setItem] = useState('');

  return (
    <div className='sidebar' style={{ width: sidebarState ? '18%' : 0 }}>
      <div className='sidebarWapper'>
        <div className='sidebarMenu'>
          <ul className='sidebarList'>
            <Link to='/Charts' style={{ textDecoration: 'none' }}>
              <li
                // className='sidebarListItem'
                className={item === 'CHARTS' ? 'checked' : 'sidebarListItem'}
                onClick={() => setItem('CHARTS')}
              >
                <PieChartOutlinedIcon className='sidebarIcon' /> CHARTS
              </li>
            </Link>

            <Link
              to='/NotificationManagement'
              style={{ textDecoration: 'none' }}
            >
              <li
                className={
                  item === 'MANAGEMENT' ? 'checked' : 'sidebarListItem'
                }
                onClick={() => setItem('MANAGEMENT')}
              >
                <NotificationsNoneIcon className='sidebarIcon' /> NOTIFICATIONS
                MANAGEMENT
              </li>
            </Link>
            <Link to='/DebtorManagement' style={{ textDecoration: 'none' }}>
              <li
                className={
                  item === 'DEBTOR MANAGEMENT' ? 'checked' : 'sidebarListItem'
                }
                onClick={() => setItem('DEBTOR MANAGEMENT')}
              >
                <PeopleOutlineIcon className='sidebarIcon' /> DEBTOR MANAGEMENT
              </li>
            </Link>
            <Link to='/PersonnelManagement' style={{ textDecoration: 'none' }}>
              <li
                className={
                  item === 'PERSONNEL MANAGEMENT'
                    ? 'checked'
                    : 'sidebarListItem'
                }
                onClick={() => setItem('PERSONNEL MANAGEMENT')}
              >
                <PersonOutlineOutlinedIcon className='sidebarIcon' /> PERSONNEL
                MANAGEMENT
              </li>
            </Link>
            <li
              className={item === 'SETTINGS' ? 'checked' : 'sidebarListItem'}
              onClick={() => setItem('SETTINGS')}
            >
              <SettingsOutlinedIcon className='sidebarIcon' /> SETTINGS
            </li>
            <ul>
              <Link to='/Admins' style={{ textDecoration: 'none' }}>
                <li
                  className={
                    item === 'ADMINS' ? 'checked' : 'sidebarSubListItem'
                  }
                  onClick={() => setItem('ADMINS')}
                >
                  <PeopleAltOutlinedIcon className='sidebarIcon' />
                  ADMINS
                </li>
              </Link>
              <Link to='/Notification' style={{ textDecoration: 'none' }}>
                <li
                  className={
                    item === 'NOTIFICATIONS' ? 'checked' : 'sidebarSubListItem'
                  }
                  onClick={() => setItem('NOTIFICATIONS')}
                >
                  <NotificationsNoneIcon className='sidebarIcon' />
                  NOTIFICATIONS
                </li>
              </Link>
              <Link to='/Groups' style={{ textDecoration: 'none' }}>
                <li
                  className={
                    item === 'GROUPS' ? 'checked' : 'sidebarSubListItem'
                  }
                  onClick={() => setItem('GROUPS')}
                >
                  <GroupWorkOutlinedIcon className='sidebarIcon' />
                  GROUPS
                </li>
              </Link>
              <Link to='/Links' style={{ textDecoration: 'none' }}>
                <li
                  className={
                    item === 'LINKS' ? 'checked' : 'sidebarSubListItem'
                  }
                  onClick={() => setItem('LINKS')}
                >
                  <LinkOutlinedIcon className='sidebarIcon' />
                  LINKS
                </li>
              </Link>

              <Link to='/Instruction' style={{ textDecoration: 'none' }}>
                <li
                  className={
                    item === 'INSTRUCTIONS' ? 'checked' : 'sidebarSubListItem'
                  }
                  onClick={() => setItem('INSTRUCTIONS')}
                >
                  <SettingsIcon className='sidebarIcon' />
                  INSTRUCTIONS
                </li>
              </Link>
            </ul>
            <Link to='/Archive' style={{ textDecoration: 'none' }}>
              <li
                className={item === 'ARCHIVE' ? 'checked' : 'sidebarListItem'}
                onClick={() => setItem('ARCHIVE')}
              >
                <ArchiveOutlinedIcon className='sidebarIcon' /> ARCHIVE
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
