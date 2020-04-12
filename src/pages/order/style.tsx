import React from 'react';
import styled from 'styled-components';
import { LeftSideHolder, CartShowMobile } from 'Components/FloatCart/style';
import { RestInfo, LeftBox, RightBox } from 'Components/infoRes/style';

const Clear = ({ className, children }: any): JSX.Element => {
	return <div className={className}> {children} </div>
};

export const RightSideHolder = styled.div`
  > div & {
			margin-bottom: 20px;
  }
  @media (min-width: 992px) {
		width: 95%;
		margin: 0 auto;
		min-height: 600px;
  }
`;

export const RestMenuHolder = styled(Clear).attrs({
	className: 'clearfix'
})`
  padding: 40px 0 50px;
  z-index: 1500px;
  ${CartShowMobile} {
			position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
    color: white;
    direction: rtl;
    background-color: #ff7714;
    .content {
			padding: 10px;
      .totalProduct {
        &::before {
			content: '(';
        }
        &::after {
			content: ')';
        }
      }
    }
  }
  @media (min-width: 992px) {
			padding: 160px 0 50px;
  }
  @media (min-width: 767px) {
			${CartShowMobile} {
			display: none;
    }
    .wrapper {
			width: 71%;
      float: right;
    }
  }
`;

export const TabContentHolder = styled(Clear).attrs({
	className: 'clearfix white-box'
})`
  position: relative;
  ${RestInfo} {
			min-height:700px;
    padding: 20px;
    h2 {
			color: #be901e;
      font-size: 16px;
      font-size: 1rem;
      text-align: center;
    }
    .address-box {
			address {
			font-style: normal;
        margin-bottom: 10px;
      }
    }
    ${LeftBox} {
			float: left;
      .map {
			background: url('https://api.cedarmaps.com/v1/static/light/35.80741619412945,51.40486836433411,15/400x400@2x?access_token=7901df5912f7f7339cf23c3bf371a20fb84910aa&markers=marker-default|35.80741619412945,51.40486836433411');
        width: 100%;
        height: 100%;
        z-index: 2;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-position: 53% !important;
      }
    }
    ${RightBox} {
			float: right;
    }
    section {
			text-align: center;
    }
    .food-type {
			li {
			display: inline-block;
        padding: 4px 15px;
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;
        border: 1px solid #e4e4e4;
        font-size: 14px;
        font-size: 0.875rem;
        margin: 2px;
      }
    }
  }
  @media (min-width: 992px) {
			${RestInfo} {
			${LeftBox} {
			width: 50%;
        padding-left: 10px;
      }
      ${RightBox} {
			width: 50%;
      }
    }
  }
`;

export const RestProfileContainer = styled.div``;
export const MenuTab = styled.nav`
  display: flex;
  direction: rtl;
  position: relative;
  z-index: 2;
  top: 1px;
  .active:hover {
			color: inherit;
  }
  .active {
			border-width: 1px 1px 0;
    border-style: solid;
    border-color: #e4e4e4;
    background-color: #fff;
  }
  a {
			-webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding: 10px 15px;
    text-align: center;
    color: #333;
    -webkit-border-radius: 5px 5px 0 0;
    -moz-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;

    &:active,
    &:hover {
			outline: 0;
    }
    &:hover {
			color: #ffbd41;
    }
  }
  @media (min-width: 650px) {
			a {
			-webkit-flex-grow: 0;
      -moz-flex-grow: 0;
      flex-grow: 0;
    }
  }
`;
