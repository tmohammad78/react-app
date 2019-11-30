import styled from 'styled-components';
import { FoodItem } from './food/style';

export const FoodList = styled.div`
  direction: rtl;
  float: right;
  width: 100%;
  padding: 0 15px;
  min-height: 550px;
  overflow: hidden;
  position: relative;

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
