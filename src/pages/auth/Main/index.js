import React from 'react';
import { Button } from 'component/Buttons/Button';
import { NavLink } from 'react-router-dom';
const MainAuth = props => {
  return (
    <div className='inner_content'>
      <div className='title'>
        <span>انتخاب کن و سفارش بده..!</span>
      </div>
      <div className='registerButton'>
        <div className='registerbtn'>
          <NavLink to={`${props.match.url}/test`}>
            <Button ptb='16' prl='100' onClick={props.callBackChangeState}>
              ثبت نام
            </Button>
          </NavLink>
        </div>
        <div></div>
        <div className='registerbtn'>
          <NavLink
            to={{
              pathname: `${props.location.state.from.pathname}`
              //   state: {
              //     logged: 'skiped'
              //   }
            }}
          >
            <Button
              ptb='13'
              prl='100'
              bgcolor='transparent'
              borderSize='2'
              onClick={props.handleSkipAuth}
            >
              فعلا نه
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default MainAuth;
