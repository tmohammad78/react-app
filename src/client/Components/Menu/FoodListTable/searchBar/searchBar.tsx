import React, { Fragment } from 'react';
import Input from '../../../Input/index';
import './style.scss';
interface SearchProps {
	filterText: string;
	onfilterText: (value: string) => void;
	onChangeStock: (value: boolean) => void;
	inStock: boolean;
}
const SearchBar = ({ filterText, onfilterText, onChangeStock, inStock }: SearchProps) => {
	const handleTextChange = (e: React.FormEvent<EventTarget>) => {
		let target = e.target as HTMLInputElement;
		onfilterText(target.value);
	};

	const handleInStockChange = (e: React.FormEvent<EventTarget>): void => {
		let target = e.target as HTMLInputElement;
		onChangeStock(target.checked);
	};

	return (
		<Fragment>
			<div className='filter-box clearfix'>
				<Input icon='search' value={filterText} onChange={handleTextChange} label='جستجوی غذا' />
				<div className='filter-check'>
					<label htmlFor='checkbox' className='custom-checkbox'>
						<input
							type='checkbox'
							className='styled_checkbox'
							checked={inStock}
							onChange={handleInStockChange}
							id='checkbox'
						/>
						<span />
						غذاهای موجود
          		</label>
				</div>
			</div>
		</Fragment>
	);
};
export default SearchBar;
