import React from 'react';
import Button from '../Buttons/Button';
import axios from 'axios';

const LoginModal = () => {
	const checkToken = ()=>{
		axios.post('https://restaurant.delino.com/user/register')
		.then(res =>{
			console.log(res);
		})
	}
	
  return (
    <div className='login-content'>
      <div className='new-user'>
        <div className='new-user-content'>
          <h4>برای ورود یا عضویت شماره موبایلت رو وارد کن</h4>
          <form className='login-form'>
            <div className='field-group'>
              <input type='Tel' autoComplete='off' />
              <span>شماره موبایل</span>
            </div>
            <div className='button-holder' style={{ textAlign: 'center' }}>
              <Button
                disabled
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 45
                }}
                onKeyPress={() => {
                  alert('fff');
				}}
				onClick={checkToken}
              >
                <i className='fo fo-angle-left' />
                <span>ادامه</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
