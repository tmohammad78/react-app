import React from 'react';

import Selectbox from 'component/Selectbox';
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
