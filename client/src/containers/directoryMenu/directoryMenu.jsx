import MenuItem from '../../components/menuItem/menu_item.component';
//Images Import
import dog from '../../imgs/dog.jpg';
import cat from '../../imgs/cat.jpg';
import food from '../../imgs/food.jpg';
import collars from '../../imgs/collars.jpg';
import bed from '../../imgs/bed.jpg';
import './directoryMenu.styles.scss';
import React, { Component } from 'react';

export default class directoryMenu extends Component {
  constructor() {
    super();
    this.state = {
      menu_items: [
        {
          title: 'Dog Supplies',
          background: dog,
          id: 1,
          url: 'dogs'
        },
        {
          title: 'Cat Supplies',
          background: cat,
          id: 2,
          url: 'cats'
        },
        {
          title: 'Carriers & Beds',
          background: bed,
          id: 3,
          url: 'beds'
        },
        {
          title: 'Collars & Leashes',
          background: collars,
          id: 4,
          size: 'large',
          url: 'collars'
        },
        {
          title: 'Food & Suppliments',
          background: food,
          id: 5,
          size: 'large',
          url: 'food'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu '>
        {this.state.menu_items.map(({ id, background, title, size, url }) => {
          return <MenuItem key={id} id={id} background={background} url={url} title={title} size={size} />;
        })}
      </div>
    );
  }
}
