import styled from 'styled-components';
import { QtyStyle } from 'component/Menu/FoodListTable/food/foodDetails/qty-holder/style';
export const RestCart = styled.div`
  position: sticky;
  float: right;
  top: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.bgCart};
  .cross-icon {
    position: absolute;
    padding: 10px;
    z-index: 4000;
  }
  .header-cart {
    position: relative;
    width: 100%;
    float: right;
    padding: 10px;
    direction: rtl;
    border-bottom: 1px solid #e4e4e4;
    h3 {
      float: right;
      margin: 0;
      font-size: 17px;
    }
    .cart-size {
      &::before {
        content: '(';
      }
      &::after {
        content: ')';
      }
    }
  }
  .cart-holder-inner {
    direction: rtl;
    width: 100%;
    float: right;
  }
  .empty-cart {
    display: block;
    text-align: center;
    padding: 50px 0;
    span {
      color: #ccc;
      display: block;
    }
    .fo {
      color: #ccc;
      font-size: 80px;
      font-size: 5rem;
      display: inline-block;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 992px) {
    border: 1px solid #e4e4e4;
    > .header-cart {
      h3 {
        line-height: normal;
      }
    }
  }
`;

export const CartListHolder = styled.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 419px;

  // whole of scroll
  &::-webkit-scrollbar {
    width: 3px;
  }

  //just element that background in display
  &::-webkit-scrollbar-thumb {
    background: #ffbd41;
    border-radius: 5px;
  }
  .item {
    position: relative;
    display: table; //??
    width: 100%;
    padding: 10px 15px;
    border-bottom: 1px solid #ddd;
    direction: rtl;
    font-size: 13px;
    font-size: 0.8125rem;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .item-aside {
      position: relative;
      float: right;
      width: 60%;
      .ancFullRemove {
        position: absolute;
        top: 50%;
        transform: translate(0px, -50%) scale(0);
        transition: all 0.2s ease-out;
      }
      &:hover {
        .ancFullRemove {
          transform: translate(0px, -50%) scale(1.5);
        }
        .cartInfoFood {
          padding-right: 18px;
        }
      }
      .cartInfoFood {
        margin: 0;
        font-weight: 700;
        font-size: 14px;
        font-size: 0.875rem;
        transition: all 0.2s ease-out;
      }
    }

    ${QtyStyle} {
      left: 15px;
      top: 50%;
      overflow: hidden;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
      .anc-box {
        background-color: transparent;
        button {
          width: 25px;
          color: #ff7714;
          border: 1px solid #ff7714;
        }
      }
      span {
        //   display: inline-block;
        width: 15px;
        color: #333;
      }
    }
  }
`;
const Parent = ({ className, children }) => <div className={className}>{children}</div>;
export const LeftSideHolder = styled(Parent).attrs({
  className: ''
})`
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  z-index: 6000;
  transform: translate3d(-500px, 0, 0px);
  transition: all ease-out 0.5s;
  z-index: 2000;
  .rest-cart {
    height: 100%;
  }

  @keyframes animation-close {
    0% {
      opacity: 0.3;
    }
    25% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.7;
    }
    75% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
  &.show-cart {
    @keyframes animation-open {
      0% {
        opacity: 0.5;
      }
      50% {
        opacity: 0.7;
      }
      75% {
        opacity: 0.8;
      }
      100% {
        opacity: 1;
      }
    }
    animation: animation-open 0.5s cubic-bezier(0.5, 0, 0.5, 1);
    transform: translate3d(-0px, 0, 0px);
  }
  &.hide-cart {
    animation: animation-close 0.5s cubic-bezier(0.5, 0, 0.5, 1);
  }

  @media (min-width: 767px) {
    position: sticky !important;
    width: 28% !important;
    transform: translate3d(0, 0px, 0px) !important;
    .rest-cart {
      height: auto !important;
      position: -webkit-sticky;
      position: sticky;
      top: 70px;
      width: 85%;
      background-color: white;
      margin: 0 auto;
      .cross-icon {
        display: none;
      }
    }
  }
`;
