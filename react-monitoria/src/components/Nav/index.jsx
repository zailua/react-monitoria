import React from 'react';
import './style.css'

function Nav() {
  return (
    <nav>
      <ul className='menu'>
        <li><a href="./home.html">Home</a></li>
        <li><a href="./destinos.html">Destinos</a></li>
        <li><a href="./promocao.html">Promoções</a></li>
        <li><a href="./contatos.html">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
