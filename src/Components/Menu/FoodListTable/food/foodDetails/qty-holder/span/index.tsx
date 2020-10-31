// @ts-ignore
import { currency } from '../../../../../../../Helper/index';
import { QtySpan } from './style';
import { FunctionComponent } from 'react';

interface IProps {
	qty: number
}

export const Span: FunctionComponent<IProps> = ({ qty }) => {
	return <QtySpan>{currency(qty, false)}</QtySpan>;
};
