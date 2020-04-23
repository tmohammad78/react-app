import React from 'react';
import { ButtonStyle } from './style';

export const Button = ({ children, ...props }: any) => {
	return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

Button.defaultProps = {
	primary: true
};
