import React from 'react';
import './navbar.css';
import 'tachyons';

function Navigation() {
  return (
    <div className="Navigation">
             <ul class="navigation-items-container">
                 <div className="RCC-logo">
                     <h1> RCC</h1>
                 </div>
        <li className="nav-item"><a className="nav-item-link b hover-navy" href="#"> Home </a></li>
        <li className="nav-item"><a className="nav-item-link b hover-navy" href="#"> About Us     </a></li>
        <li className="nav-item"><a className="nav-item-link b hover-navy" href="#"> Events </a></li>
        <li className="nav-item"><a className="nav-item-link b hover-navy" href="#"> Community Development</a></li>
        <li className="nav-item"><a className="nav-item-link b hover-navy" href="#"> Youth Development</a></li>
        <li className="nav-item"><a className="nav-item-link b hover-navy" href="#"> Get Involved </a></li>
        <li className="nav-item"><a className=" nav-item-button shadow-5 br2" href="#"> Donate </a></li>
      </ul>
    </div>
  );
}

export default Navigation;