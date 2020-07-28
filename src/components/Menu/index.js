import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';
import './Menu.css';

// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

const Menu = () => {
  return (
    <header>
      <nav className="Menu">
        <Link to="/">
          <img src={ Logo } alt="Logo Toledoflix" className="Logo" />
        </Link>

        <Button as={ Link } to="/cadastro/video" className="ButtonLink">
          Novo Vídeo
        </Button>
      </nav>
    </header>
  )
}

export default Menu;