import Styled from 'styled-components';
import { FoodItem } from '../FoodListTable/food/style';
export const SubFoodStyle = Styled.div`
  @media (min-width: 992px) {
	  .details-holder{
		  float:right;
	  }
	${FoodItem}{
		width: 100%;
}

`;
