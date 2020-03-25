import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { resturantData } from 'services/util';
import './style.scss';

const Cover = () => {
  const [data, setData] = useState('');

  console.log('render cover');
  const item = useSelector(state => state.menu.categoryList);
  const backgroundCover =
    'url(https://static.delino.com/Image/Restaurant/Cover/st5xrnas.i4s_big.jpg)';
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

  return (
    <div
      className='cover-container clearfix'
      style={{
        backgroundImage: 'url(' + Image + ')'
      }}
    >
      <div
        className='rest-cover'
        style={{
          backgroundImage: `${backgroundCover}`
        }}
      />

      <div className='wrapper clearfix'>
        <div className='rest-logo-holder'>
          <figure className='logo-holder'>
            <img
              alt='logo'
              src='https://static.delino.com/Image/Default/logo/lwqgwoqw.3jj_180x180.png'
            />
          </figure>

          <aside>
            <h1>{data.name}</h1>
            <div className='categoryList'>
              {item.map(item => {
                return <span key={item.catId}> {item.catTitle}.</span>;
              })}
            </div>
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
};
export default Cover;