import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import {MenuTab } from '../style';
const MenuTabcompo = () => {
  return (
    <div>
      <MenuTab>
        <NavLink to='/'>منوی غذا</NavLink>
        <NavLink to='/info' activeClassName='active'>
          اطلاعات رستوران
        </NavLink>
        <NavLink to='/favorite' activeClassName='active'>
          علاقه مندی
        </NavLink>
      </MenuTab>
    </div>
  );
};

export default MenuTabcompo;
