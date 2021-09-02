import React from 'react';
import './style.css';
export default function switchTable() {
  return (
    <div>
      <div class='toggle-checkbox-wrapper'>
        <input class='toggle-checkbox' type='checkbox' id='toggle' />
        <label class='slider' for='toggle'></label>
      </div>
    </div>
  );
}
