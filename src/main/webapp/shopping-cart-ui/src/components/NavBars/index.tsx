import React from 'react';
// @ts-ignore
import { Icon } from 'react-materialize';
// @ts-ignore
import { NavLink } from 'react-router-dom';

import './index.css';

const NavBars = ()=> {
    return (      
      <div className="App">
     <nav className="navbar">
      <div className="nav-links">
        <ul>
          <li><NavLink activeClassName="selected" className="nav-link" exact to="/">Shopping Cart Application</NavLink></li>
        </ul>
      </div>
      <div className="shopping-cart">
        <NavLink to="/cart"><Icon medium >shopping_cart</Icon></NavLink>
      </div>
    </nav>
     </div>
    );
  }
  
  export default NavBars;