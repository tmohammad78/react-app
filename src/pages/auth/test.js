import React from 'react';
import { Button } from 'component/Buttons/Button';
import { NavLink } from 'react-router-dom';
const Test = props => {
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
          <Button ptb='13' prl='100' bgcolor='transparent' borderSize='2'>
            فعلا نه
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Test;
