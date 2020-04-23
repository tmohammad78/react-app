import React from 'react';

import Selectbox from '../../Selectbox/index';
interface Iprops {
	onChange: (values: string) => void
}
const Sort = ({ onChange }: Iprops) => {
	const handleSort = (value: string ) => {
		onChange(value);
	};

	return <Selectbox handleOnChange={handleSort} />;
};


export default Sort;
