import React from "react";
import './menu_item.styles.scss'

export default function Menu_item(props) {
  
  return (
    <div className={`menu-item ${props.size}` }>
      <div className="content">
        <h1 className="title ">{props.title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
      <img className='menu-item-background' src={props.background} alt={props.title}/>
    </div>
  );
}
