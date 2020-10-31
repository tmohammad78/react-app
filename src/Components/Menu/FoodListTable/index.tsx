import { useState, useEffect, lazy, Suspense, FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeSubFoodModal } from '../../../Redux/subFood/action';

import Food from './food/index';
import SubFood from '../subFoodModal/subFood';
import FoodListTitle from './FoodListTitle/index';
import Spinner from '../../../Components/Spinner/index';

const Modal = lazy(() => import('../../../Components/Modal/index'));
const SearchBar = lazy(() => import('./searchBar/searchBar'));
import { IApplicationState } from '../../../Redux/reducers';
import { ISubFood, IFoodList, SubFoodState } from '../../../Types/index';

import { FoodList, NotFoundStyle, FoodMenu } from './style';

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

const FoodListTable: FunctionComponent<IProps> = ({ itemFood }: IProps) => {
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
			// @ts-ignore
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
			newItem = originalItems.sort((a, b) => {

				return (
					//        a.catIndex - b.catIndex ||
					//          a.catId - b.catId ||
					(a.categoryIndex - b.categoryIndex) || ((a[sortItem.field] - b[sortItem.field]) * index)
				);
			});
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
		// @ts-ignore
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
				{

					subFood.show ?
						<>
							<Modal
								show={subFood.show}
								onClose={() => dispatch(closeSubFoodModal(true))}
								className='subFoodModal'
							>
								<SubFood subFood={subFood.food} />
							</Modal>
						</>
						: null
				}
				<FoodList>{row}</FoodList>
			</Suspense>
		</FoodMenu>
	);
};


export default FoodListTable;
