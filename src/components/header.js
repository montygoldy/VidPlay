import React from 'react';
import Logo from './logo.png';

const Header = () => {
  return(
    <div className="logo col-md-4">
      <img src={Logo} alt=""/>
    </div>
  )
}

export default Header;