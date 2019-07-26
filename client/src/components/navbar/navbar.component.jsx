import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/dog-side.png';

export default class Navbar extends Component {
  expandMenu = () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  };

  componentDidMount() {
    this.expandMenu();
  }

  render() {
    return (
      <nav className='navbar is-light' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link className='navbar-item' to='/'>
            <img src={logo} alt='logo' />
          </Link>

          <Link
          to="/"
            role='button'
            className='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </Link>
        </div>

        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <Link to='/' className='navbar-item'>
              Home
            </Link>

            <Link to='#test' className='navbar-item'>
              About
            </Link>

            <div className='navbar-item has-dropdown is-hoverable'>
              <Link to='#test' className='navbar-link'>
                Shop
              </Link>

              <div className='navbar-dropdown'>
                <Link to='#test' className='navbar-item'>
                  Dogs
                </Link>
                <Link to='#test' className='navbar-item'>
                  Cats
                </Link>
              </div>
            </div>
          </div>

          <div className='navbar-end'>
            <div className="navbar-item">
              <input type="text" className="input" placeholder="search for a product..."/>
              <button className="button is-info">Search</button>
            </div>
            <div className='navbar-item'>
              <div className='buttons'>
                <Link to='#test' className='button is-danger'>
                  <strong>Sign up</strong>
                </Link>
                <Link to='#test' className='button is-light'>
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
