import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red"
  };
  return (
    <div >
      {/* header */}
      <div className="right_header_info">
        <ul className='d-flex list-style m-0  bg-black text-white p-3'>
          <li className=" mx-5">Contact Us : 01787003585</li>
          <li className=" mx-5"><p >Email : dmschool@gmail.com</p></li>
          <li className=" mx-5"><p >Location: Noakhali</p></li>


          <li className='mx-5'>
            <button type="button" id="sidebarCollapse">
              Student Login
            </button>
          </li>
          <li>
            <button type="button" id="sidebarCollapse">
               Student Sign Up
            </button>
          </li>
        </ul>
      </div>
      <div>
        {/* navlink use */}
        <nav className='text pb-4 fs-4 ' >
          <NavLink className='gap' activeStyle={activeStyle} to='/home'>Home</NavLink>
          <NavLink className='gap' activeStyle={activeStyle} to='/service'>Service</NavLink>
          <NavLink className='gap' activeStyle={activeStyle} to='/about'>About</NavLink>
          <NavLink className='gap' activeStyle={activeStyle} to='/blog'>Blog</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;