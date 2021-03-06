import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll';
// @ts-ignore
import Carousel, { consts } from 'react-elastic-carousel';
import { Iw, TextIw, CategoryBar } from './style';
import { Button } from '../Buttons/Button';
import { IApplicationState } from '../../Redux/reducers';
import { ICategory } from '../../types';

const Category: FunctionComponent = () => {
	const item = useSelector<IApplicationState, ICategory[]>(state => state.menu.categoryList);
	const breakPoints = [
		{ width: 1, itemsToShow: 3 },
		{ width: 550, itemsToShow: 5 },
		{ width: 768, itemsToShow: 6 },
		{ width: 1200, itemsToShow: 6 }
	];

	const actionArrow = (attr: any) => {
		const { type, onClick } = attr;
		return (
			<Button color='black' bgcolor='transparent' ptb='0' prl='5' onClick={onClick} name='carousle'>
				{type === consts.PREV ? (
					<i className='fo fo-angle-right' />
				) : (
					<i className='fo fo-angle-left' />
				)}
			</Button>
		);
	};

	return (
		<div className='parent'>
			<CategoryBar className='categories'>
				<div className='owl-item'>
					<Carousel
						isRTL
						focusOnSelect={true}
						breakPoints={breakPoints}
						pagination={false}
						renderArrow={actionArrow}
					>
						{item.map(food => {
							return (
								<Link
									key={food.catId}
									className=' indexbox'
									to={food.catId.toString()}
									spy={true}
									smooth={true}
									offset={-100}
								>
									<Iw>
										<i className={`ic-c c-${food.catLogo}`} />
										<TextIw>{food.catTitle}</TextIw>
									</Iw>
								</Link>
							);
						})}
					</Carousel>
				</div>
			</CategoryBar>
		</div>
	);
};

export default Category;
