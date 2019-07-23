import React, { Component } from 'react';
import './style.scss';

import Modal from '../Modal/index';
import Button from '../Buttons/Button';
import Login from '../Login';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalVisible: false
    };

    this.toggleLoginShow = this.toggleLoginShow.bind(this);
  }

  toggleLoginShow = (show = true) => () => {
    this.setState({ loginModalVisible: show });
  };

  render() {
    const { loginModalVisible } = this.state;
    return (
      <div className='main-header clearfix'>
        <Modal
          open={loginModalVisible}
          onClose={this.toggleLoginShow(false)}
          style={{
            height: 300
          }}
        >
          <Login />
        </Modal>

        <div className='wrapper clearfix'>
          <div className='right'>
            <div className='rest-logo-holder'>
              <figure className='logo-holder'>
                <img
                  alt=''
                  src='https://static.delino.com/Image/Default/logo/2yujoehm.rrz_180x180.png'
                />
              </figure>
            </div>
          </div>
          <div className='left'>
            <div className='user-login-holder'>
              <div className='user-holder'>
                <Button
                  color='white'
                  size='md'
                  outline
                  onClick={this.toggleLoginShow()}
                  type='submit'
                >
                  ورود / عضویت
                  <i className='fo fo-user' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
