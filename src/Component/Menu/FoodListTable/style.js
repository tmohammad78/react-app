import styled from 'styled-components';
import { FoodItem } from './food/style';
export const NotFoundStyle = styled.div``;
export const FoodList = styled.div`
  direction: rtl;
  float: right;
  width: 100%;
  padding: 0 15px;
  min-height: 550px;
  overflow: hidden;
  position: relative;
  ${NotFoundStyle} {
    position: absolute;
    top: 30px;
    font-size: 20px;
    color: #b1b1b1;
  }

  @media (min-width: 992px) {
    padding: 0;
    ${FoodItem} {
      width: 50%;
      section {
        transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1.06);
        &:hover {
          box-shadow: 0px 14px 20px rgba(56, 60, 71, 0.1);
          transform: translateY(-2px);
        }
      }
    }
  }
`;
// .food-item {
//   width: 50%;
//   section {
//     transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1.06);
//     &:hover {
//       box-shadow: 0px 14px 20px rgba(56, 60, 71, 0.1);
//       transform: translateY(-2px);
//     }
//   }
// }

export const FoodMenu = styled.div`
  padding-bottom: 15px;
  min-height: 700px;
  .sort {
    float: right;
    select {
      background-color: #fff;
      outline: none;
      border: 1px solid #ececec;
      border-radius: 2px;
      margin-left: 10px;
      width: auto;
      height: 35px;
      cursor: pointer;

      &:hover {
        border: 1px solid #5b5a5e;
      }
    }
  }
  h2 {
    clear: both;
    padding: 0 10px;
    color: #888;
    font-size: 20px;
    font-size: 1.25rem;
    direction: rtl;
  }
  @media only screen and (min-width: 992px) {
    padding: 0 25px 35px;
  }
`;
