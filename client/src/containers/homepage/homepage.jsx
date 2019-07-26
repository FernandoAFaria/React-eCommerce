import React, { Component } from 'react';

import Hero from '../../components/hero/hero.component';
import Footer from '../../components/footer/footer.component';
import DirectoryMenu from '../../containers/directoryMenu/directoryMenu';
import './homepage.scss';
import '../../../node_modules/bulma/bulma.sass';

export default class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>
        <Hero />
        <DirectoryMenu />
        <Footer />
      </div>
    );
  }
}
