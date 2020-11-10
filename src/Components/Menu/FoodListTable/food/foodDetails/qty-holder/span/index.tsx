import React, { FunctionComponent } from 'react';
import { currency } from '../../../../../../../helper';
import { QtySpan } from './style';


interface IProps {
	qty: number
}

export const Span: FunctionComponent<IProps> = ({ qty }) => {
	return <QtySpan>{currency(qty, false)}</QtySpan>;
};
