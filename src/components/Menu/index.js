import React from 'react';
import Logo from '../../assets/images/logo.png';
import './Menu.css';

// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

const Menu = () => {
  return (
    <header>
      <nav className="Menu">
        <a href="/">
          <img src={ Logo } className="Logo" />
        </a>

        <Button as="a" href="/" className="ButtonLink">
          Novo Vídeo
        </Button>
      </nav>
    </header>
  )
}

export default Menu;