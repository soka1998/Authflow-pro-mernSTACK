import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { user, logoutUser } = useGlobalContext();
  return (
    <Wrapper>
      <div className='nav-center'>
        <Link to='/' className='home-link'>
          <img src={logo} alt='jobs app' className='logo' />
        </Link>
        {user && (
          <div className='nav-links'>
            <p>hello, {user.name}</p>
            <button
              className='btn btn-small'
              onClick={() => {
                logoutUser();
              }}
            >
              logout
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};



export default Navbar;
