import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header>
      <Link to="/"><h3 className='home-link'>Hello! My name is Tep.</h3></Link>
    </header>
  )
}

export default Header;