import React from 'react';
import PropTypes from 'prop-types';

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
Sort.propTypes = {
	onChange: PropTypes.func.isRequired
};

export default Sort;
