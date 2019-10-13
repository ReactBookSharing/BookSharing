import React from 'react';

import './Tip.css';
// import infoImg from '../../../assets/images/info.png';

export default function Tip({ text }) {
  return (
    <div className="Tip">
      {/* <img className="Tip__image" src={infoImg} alt="info" /> */}
      <div className="Tip__text">{text}</div>
    </div>
  );
}
