import React from 'react'
import './preview-item.styles.scss'

export default function PreviewItem(props) {
  return (
    <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={props.imageUrl} alt="Placeholder" />
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src={props.imageUrl} alt="Placeholder" />
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{props.name}</p>
        <p className="subtitle is-6">${props.price}</p>
      </div>
    </div>

    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauri
      <br />
      
    </div>
  </div>
</div>
  )
}
