import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar({cartItemLength}) {
  var addSearchData=''
  function getSearchData($e){
    addSearchData=$e.target.value    
    }
    
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-xl navbar-light  navbar-fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo2"
            aria-controls="navbarTogglerDemo2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink className="navbar-brand" to={'/'}>
            Looka
          </NavLink>
          <div
            className="collapse navbar-collapse show"
            id="navbarTogglerDemo2"
          >
            <ul className="navbar-nav  mb-2 mb-xl-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to={'/'}>
                  Home
                </NavLink>
              </li>
              <div className="dropdown d-xl-flex align-items-center">
                <span
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <NavLink className="dropdown-item" to={'/electonics'}>
                    Electronics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to={'/jewelery'}>
                    Jewelery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to={'/menscloth'}>
                    Men's clothing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to={'/womencloth'}>
                    Women's clothing
                    </NavLink>
                  </li>
                </ul>
              </div>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/about'}>
                About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/contact'}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="search-container d-flex align-items-center gap-xl-5 justify-content-between">
           
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={getSearchData}
              />
              <button className="btn btn-outline-success" type='button'>
                Search
              </button>
            </form>
            <div className='cart-container'>
              <Link className='cart-count text-white' to={'/cart'}>{cartItemLength+1}</Link>
              <Link to={'/cart'} className='text-dark'><i className="fa-solid fa-cart-shopping cart-icon" to={"/cart"}></i></Link>

            </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
