import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const currentPath = window.location.pathname;
  return (
    <div className='homePage'>
      <div className='inner'>
        <p className='title'>خوش آمدید</p>
        <div
          style={{
            position: 'absolute',
            top: '50%'
          }}
        >
          <Link to='/order' className='anchor-Link'>
            سفارش گیری
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
