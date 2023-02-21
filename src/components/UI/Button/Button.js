import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick} style={{background: `${props.entered ? '#8b005d' : '#ccc'}`}}>
      {props.children}
    </button>
  );
};

export default Button;
