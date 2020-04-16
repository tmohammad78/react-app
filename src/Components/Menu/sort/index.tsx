import React from 'react';

import Selectbox from '../../../Components/Selectbox/index';
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
