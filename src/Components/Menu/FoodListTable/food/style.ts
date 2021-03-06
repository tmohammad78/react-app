import styled from 'styled-components';
import { LikeFoodStyle } from './foodDetails/likeFood/style';
export const FoodItem = styled.div`
  position: relative;
  width: 100%;
  float: right;
  padding-bottom: 15px;
  transition: all 0.2s cubic-bezier(0, 0.5, 0.5, 1);
  > section {
    user-select: none;
    &:hover {
      ${LikeFoodStyle} {
        display: inline-block;
      }
    }
  }
  figure {
    width: 65px;
    height: 65px;
    float: right;
    overflow: hidden;
    border-radius: 10px;
    background-size: 100%;
    background-position: center;
    background-size: 150px;
    background: url(https://www.delino.com/img/general/food-default.jpg) no-repeat 50% #eff2f6;

    img {
      width: 100%;
      height: 100%;
    }
  }
  section {
    position: relative;
    width: 100%;
    min-height: 114px;
    padding: 8px;
    display: inline-block;
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    overflow: hidden;
    background-color: ${props => props.theme.foodItem_bgcolor};
  }
  figure {
    cursor: default;
    .ingredient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      -webkit-transition-duration: 0.3s;
      -moz-transition-duration: 0.3s;
      -o-transition-duration: 0.3s;
      transition-duration: 0.3s;
      background: -moz-radial-gradient(
        center,
        ellipse cover,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.7) 100%
      );
      background: -webkit-radial-gradient(
        center,
        ellipse cover,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.7) 100%
      );
      background: radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.7) 100%
      );
      overflow: hidden;
      text-align: center;
      opacity: 0;
      z-index: 5;
      span {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        filter: alpha(opacity=0);
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1);
        padding: 15px;
        font-size: 14px;
        font-size: 0.875rem;
      }
      b {
        position: relative;
        top: 50%;
        width: 100%;
        float: right;
        font-weight: bold;
        direction: rtl;
        font-size: 12px;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
      }
    }
  }

  .active-box {
    border: 1.5px solid #ff7714;
    .quantity-badge {
      opacity: 1;
      -webkit-opacity: 1;
    }
  }
  .quantity-badge {
    position: absolute;
    right: 0;
    top: 0;
    width: 24px;
    text-align: center;
    color: #fff;
    line-height: 28px;
    font-size: 0.8125rem;
    opacity: 0;
    z-index: 10;
    -webkit-opacity: 0;
    filter: alpha(opacity=0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    span {
      position: relative;
      z-index: 2;
    }
  }
  .quantity-badge:before {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    height: 0;
    width: 0;
    border: solid transparent;
    pointer-events: none;
    border-color: rgba(190, 144, 30, 0);
    border-bottom-color: #ff7714;
    border-width: 28px;
    margin-top: -28px;
    margin-right: -28px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    z-index: 1;
  }
  .addBfutton,
  .removeButton {
    cursor: pointer;
    width: 25px;
    height: 25px;
    padding: 0;
    color: #be901e;
    font-size: 0.9rem;
    border: 1px solid #be901e;
    background: none;
    border-radius: 999px;
    text-align: center;
    -webkit-transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    &:focus {
      outline: none;
    }
    &.activeAddBtn {
      color: white;
      background-color: #be901e;
    }
    &:active {
      -webkit-transform: scale(0.98);
      transform: scale(0.9);
    }
  }
  &:hover {
    .ingredient {
      opacity: 1;
      visibility: visible;
    }
  }
  @media (min-width: 992px) {
    width: 50%;
    section {
      transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1.06);
      &:hover {
        box-shadow: 0px 14px 20px rgba(56, 60, 71, 0.1);
        transform: translateY(-2px);
      }
    }
  }
  @media (min-width: 650px) {
    padding: 10px;
  }
`;
