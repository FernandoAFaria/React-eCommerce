import React, { Component } from "react";
import { SHOP_DATA } from "./shop.data";
import PreviewItem from "../../components/shopPreviewItem/preview-item.component";
import "./shop.styles.scss";
export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <h1 className="title">
          {this.state.collections[this.props.match.params.id - 1].title}
        </h1>
        <div className="flex-container">
          {this.state.collections[
            `${this.props.match.params.id - 1}`
          ].items.map(item => {
            return (
              <PreviewItem
                key={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
