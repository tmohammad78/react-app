import React from 'react';
import './style.scss';
const Tittle = ({ tittle }) => {
  return (
    <header className='tittle-food'>
      <h3 className='tittle'>{tittle}</h3>
    </header>
  );
};
export default Tittle;
