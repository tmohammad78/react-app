import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { resturantData } from '../../services/util';
import './style.scss';

const Cover = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    handleFetchInfo();
  }, []);

  const handleFetchInfo = () => {
    return axios
      .get(resturantData)
      .then(res => {
        const resInfo = res.data;
        setData(resInfo);
      })
      .catch(err => {
        console.log(`Could not fetch products. Try again later. + ${err}`);
      });
  };

  if (data) {
    return (
      <div className='cover-container clearfix'>
        <div
          className='rest-cover'
          style={{
            backgroundImage: `url(https://static.delino.com/Image/Restaurant/Cover/st5xrnas.i4s_big.jpg)`
          }}
        />
        <div className='wrapper clearfix'>
          <div className='rest-logo-holder'>
            <aside>
              <h1>{data.name}</h1>
              <h2>{data.fullAddress}</h2>
            </aside>
          </div>
          <footer>
            <div className='online-status offline'>
              <span>
                <span>{data.offlineText}</span>
                {data.mealTime}
              </span>
            </div>
          </footer>
        </div>
      </div>
    );
  } else {
    return '';
  }
};
export default Cover;
