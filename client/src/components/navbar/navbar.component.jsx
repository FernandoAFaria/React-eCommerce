import React, { Component } from 'react';
import logo from '../../imgs/dog-side.png';

export default class Navbar extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', () => {
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
    });
  }

  render() {
    return (
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='#test'>
            <img src={logo} alt='logo' />
          </a>

          <a
            role='button'
            className='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <a href='#test' className='navbar-item'>
              Home
            </a>

            <a href='#test' className='navbar-item'>
              About
            </a>

            <div className='navbar-item has-dropdown is-hoverable'>
              <a href='#test' className='navbar-link'>
                Shop
              </a>

              <div className='navbar-dropdown'>
                <a href='#test' className='navbar-item'>
                  Dogs
                </a>
                <a href='#test' className='navbar-item'>
                  Cats
                </a>
              </div>
            </div>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <a href='#test' className='button is-primary'>
                  <strong>Sign up</strong>
                </a>
                <a href='#test' className='button is-light'>
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
