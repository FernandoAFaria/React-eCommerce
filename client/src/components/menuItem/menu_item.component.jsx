import React from 'react';
import {  withRouter } from 'react-router-dom';
import './menu_item.styles.scss';

function Menu_Item(props) {
  return (
    <div className={`menu-item ${props.size}`} onClick={() => props.history.push("/shop/"+props.id)}>
      <div className='content'>
        <h1 className='title '>{props.title}</h1>
        <p className='subtitle'>Shop Now</p>
      </div>
      <img className='menu-item-background' src={props.background} alt={props.title} />
    </div>
  );
}

export default withRouter(Menu_Item);
