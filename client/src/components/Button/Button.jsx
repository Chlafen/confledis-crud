import React from 'react';
import './index.css'
const Button = ({
  callback = (e) => {},
  children = null,
}) => {
  return (
    <div className='button'>
      <button onClick={callback}>
        {children}
      </button>
    </div>
  );
}

export default Button;
