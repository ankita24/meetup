import React from 'react';
import { withRouter } from 'react-router-dom';
import './card.css';

function Card({
  name,
  city,
  country,
  description,
  organizer,
  key_photo,
  urlname,
  ...props
}) {
  function handleClick() {
    props.history.push(`/list/${urlname}`);
  }
  return (
    <div onClick={handleClick}>
      <div>{name}</div>
      <div>{city}</div>
      <div>{country}</div>
      <div>{description}</div>
      <div>{organizer.name}</div>
      <div>{key_photo && <img src={key_photo.thumb_link} />}</div>
    </div>
  );
}

export default withRouter(Card);
