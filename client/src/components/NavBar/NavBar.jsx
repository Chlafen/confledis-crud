import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Produits</Link>
        </li>
        <li>
          <Link to='/add'>Ajouter un produit</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
