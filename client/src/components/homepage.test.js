import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './homepage'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
