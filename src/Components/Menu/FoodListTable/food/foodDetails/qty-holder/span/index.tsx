import React from 'react';

import { currency } from 'Helper/index';
import { QtySpan } from './style';

interface IProps {
	qty: number
}

export const Span: React.SFC<IProps> = ({ qty }) => {
	return <QtySpan>{currency(qty, false)}</QtySpan>;
};
