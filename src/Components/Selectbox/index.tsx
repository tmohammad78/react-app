import React, { useState } from 'react';

import { Button } from 'Components/Buttons/Button';

import './style.scss';

interface props {
	handleOnChange: (values: string) => void
}

interface ISelectBox {
	[x: string]: boolean;
}

interface ISelectOption {
	value: string | null,
	label: string,
	index: number
}
const Selectbox = ({ handleOnChange }: props) => {
	const options = [
		{ value: '', label: 'Select', index: 1 },
		{ value: 'lowestprice', label: 'ارزان ترین', index: 2 },
		{ value: 'highestprice', label: 'گران ترین', index: 3 }
	];

	const [checkactive, setActive] = useState<ISelectBox>({
		1: true,
		2: false,
		3: false
	});

	const createOptions = (option: ISelectOption[]) =>
		option.map((item: ISelectOption) => {
			return (
				<li key={item.index}>
					<Button
						bgcolor={checkactive[item.index] ? '#FF7714' : 'transparent'}
						color={checkactive[item.index] ? '#FFF' : '#333'}
						onClick={onClicked}
						value={item.value}
						name={item.index}
					>
						{item.label}
					</Button>
				</li>
			);
		});

	const onClicked = (e: React.FormEvent<EventTarget>) => {
		let target = e.target as HTMLInputElement;
		setActive({ [1]: false });
		setActive({ [target.name]: true });
		handleOnChange(target.value);
	};

	return (
		<div className='sort'>
			<span>مرتب سازی براساس :</span>
			<ul>{createOptions(options)}</ul>
		</div>
	);
};


export default Selectbox;
