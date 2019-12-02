import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const currentPath = window.location.pathname;
  return (
    <div className='homePage'>
      <div className='inner'>
        <p className='title'>خوش آمدید</p>
        <Link to='/order' className='anchor-Link'>
          سفارش گیری
        </Link>
      </div>
    </div>
  );
}
export default Home;
