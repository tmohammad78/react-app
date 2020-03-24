import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeSubFoodModal } from 'services/subFood/action';

import Food from './food/index';
import SubFood from '../subFoodModal/subFood';
import FoodListTitle from './FoodListTitle';
import Spinner from 'component/Spinner';
const Modal = lazy(() => import('component/Modal/index'));
const SearchBar = lazy(() => import('./searchBar/searchBar'));
import { IApplicationState } from 'services/reducers';
import { ISubFood, IFoodList, SubFoodState } from 'types';

import { FoodList, NotFoundStyle, FoodMenu } from './style.js';

const Sort = lazy(() => import('../sort'));

interface ITest2 {
	field: string,
	asc: boolean
}
interface ITest {
	[key: string]: ITest2
}
const sortBy: ITest = {
	lowestprice: { field: 'price', asc: true },
	highestprice: { field: 'price', asc: false }
};
interface IProps {
	itemFood: IFoodList[]
}
const FoodListTable: React.SFC<IProps> = ({ itemFood }: IProps) => {
	const originalItems = [...itemFood];
	const row = [];
	let lastCategory: string | undefined = '';

	const subFood = useSelector<IApplicationState, SubFoodState>(state => state.subFood);
	const [foodList, setFoodList] = useState(itemFood);
	const [searchKey, setSearchKey] = useState('');
	const [inStock, setInStock] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		search(searchKey, inStock);
	}, []);

	const NotFound = () => {
		return <NotFoundStyle>نتیجه ای پیدا نشد.</NotFoundStyle>;
	};

	const search = (text: string, stock: boolean, list = itemFood) => {
		let newList = list;
		let result = [];
		let searchIngredient = list;
		if (stock) {
			newList = newList.filter(item => item.available);
		}
		if (text) {
			newList = newList.filter(item => item.title.indexOf(text) > -1);
			searchIngredient = searchIngredient.filter(item => item.ingredient.indexOf(text) > -1);
			result = newList.concat(searchIngredient);
		} else {
			newList ? (result = newList) : (result = itemFood);
		}
		setFoodList(result);
	};

	const searchHandler = (text: string) => {
		search(text, inStock);
		setSearchKey(text);
	};

	const stockHandler = (value: boolean) => {
		search(searchKey, value);
		setInStock(value);
	};

	const sortHandler = (value: string) => {
		let newItem: IFoodList[] = [];
		const sortItem = sortBy[value];
		if (sortItem) {
			const index = sortItem.asc ? 1 : -1;
			// newItem = originalItems.sort((a, b) => {

			// 	// return (
			// 	// 	//        a.catIndex - b.catIndex ||
			// 	// 	//          a.catId - b.catId ||
			// 	// 	(a.categoryIndex - b.categoryIndex ? ) || (a[sortItem.field] - b[sortItem.field]) * index
			// 	// );
			// });
		} else {
			newItem = originalItems;
		}
		search(searchKey, inStock, newItem);
	};

	if (foodList.length > 0) {
		foodList.forEach((food) => {
			if (food.categoryTitle !== lastCategory) {
				row.push(<FoodListTitle category={food.categoryTitle} id={food.catId?.toString()} />);
			}
			row.push(<Food food={food} />);
			lastCategory = food.categoryTitle;
		});
	} else {
		row.push(<NotFound />);
	}

	return (
		<FoodMenu>
			<Suspense fallback={<Spinner />}>
				<Sort onChange={sortHandler} />
				<SearchBar
					filterText={searchKey}
					onfilterText={searchHandler}
					inStock={inStock}
					onChangeStock={stockHandler}
				/>
				<Modal
					show={subFood.show}
					onClose={() => dispatch(closeSubFoodModal(true))}
					className='subFoodModal'
					subFood
				>
					{/* <SubFood subfood={subFood} /> */}
				</Modal>

				<FoodList>{row}</FoodList>
			</Suspense>
		</FoodMenu>
	);
};


export default FoodListTable;
