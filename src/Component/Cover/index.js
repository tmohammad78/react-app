import React, { Component } from 'react';
import axios from 'axios';
import { resturantData } from '../../services/util';
import './style.scss';

class Cover extends Component {
  state = {
    resturantData: ''
  };

  componentDidMount() {
    this.handleFetchInfo();
  }

  handleFetchInfo() {
    return axios
      .get(resturantData)
      .then(res => {
        const resInfo = res.data;
        this.setState({
          resturantData: resInfo
        });
      })
      .catch(err => {
        console.log(`Could not fetch products. Try again later. + ${err}`);
      });
  }

  render() {
    const dataInfo = this.state.resturantData;
    if (dataInfo) {
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
                <h1>{dataInfo.name}</h1>
                <h2>{dataInfo.fullAddress}</h2>
              </aside>
            </div>
            <footer>
              <div className='online-status offline'>
                <span>
                  <span>{dataInfo.offlineText}</span>
                  {dataInfo.mealTime}
                </span>
              </div>
            </footer>
          </div>
        </div>
      );
    }
    return '';
  }
}
export default Cover;
