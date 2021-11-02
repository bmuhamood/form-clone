import React from 'react';

function Navbar() {
  return (
    <div className="Navbar">
        <div className="links">
        <ul>
          <li><a href="/">TAP</a></li> 
           <li><a href="/rap">RAP</a></li>
          <li><a href="/roaming">Roaming Replicator</a></li>
          <li><a href="/iot">IOT</a></li>
           <li><a href="/miscellaneous">Miscellaneous</a></li> 
           <li> <a href="/custom">Custom Reports</a></li>
           <li><a href="/special">Special Split Reports</a></li> 
           <li><a href="/PRA-Data">PRA Data Feed</a></li> 
           <li> <a href="/EDCH-Reports">EDCH Reports</a></li>
           <li><a href="/options">Options</a></li> 
           <li><a href="/theme">Theme</a></li> 
           <li><a href="/help">Help</a></li> 
          </ul>  
        </div>
    </div>
  );
}

export default Navbar;
