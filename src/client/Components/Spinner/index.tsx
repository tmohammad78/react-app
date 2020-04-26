import React from "react";

import './style.scss';

const Spinner = ({ error }: any) => {
	if (error) {
		return `error is ${error} `
	} else {
		return (
			<div className='spinner lds-ring'>
				<div />
				<div />
				<div />
				<div />
			</div>
		)
	}
}
export default Spinner;
