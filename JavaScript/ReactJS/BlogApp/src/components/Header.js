import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return <div className='text-center'>
      <Link className='me-3' to="/">Home</Link>
      <Link className='me-3' to="/blogs">Blog</Link>
      <Link className='me-3' to="/create">Create</Link>
      <Link className='me-3' to="/contact">Contact</Link>
  </div>;
};

export default Header;
