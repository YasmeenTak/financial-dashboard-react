import React from 'react';
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

export default function Sidedbar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWapper'>
        <div className='sidebarMenu'>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <PieChartOutlinedIcon className='sidebarIcon' /> CHARTS
            </li>
            <li className='sidebarListItem'>
              <NotificationsNoneIcon className='sidebarIcon' /> NOTIFICATIONS
              MANAGEMENT
            </li>
            <li className='sidebarListItem'>
              <PeopleOutlineIcon className='sidebarIcon' /> DEBTOR MANAGEMENT
            </li>
            <li className='sidebarListItem'>
              <PersonOutlineOutlinedIcon className='sidebarIcon' /> PERSONNEL
              MANAGEMENT
            </li>
            <li className='sidebarListItem'>
              <SettingsOutlinedIcon className='sidebarIcon' /> SETTINGS
            </li>
            <ul>
              <li className='sidebarSubListItem'>
                <PeopleAltOutlinedIcon className='sidebarIcon' />
                ADMINS
              </li>
              <li className='sidebarSubListItem'>
                <NotificationsNoneIcon className='sidebarIcon' />
                NOTIFICATIONS
              </li>
              <li className='sidebarSubListItem'>
                <GroupWorkOutlinedIcon className='sidebarIcon' />
                GROUPS
              </li>
              <li className='sidebarSubListItem'>
                <LinkOutlinedIcon className='sidebarIcon' />
                LINKS
              </li>
              <li className='sidebarSubListItem'>
                <SettingsIcon className='sidebarIcon' />
                INSTRUCTIONS
              </li>
            </ul>
            <li className='sidebarListItem'>
              <ArchiveOutlinedIcon className='sidebarIcon' /> ARCHIVE
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
