import React from 'react';
import { currency } from 'helper';
import { QtySpan } from './style';

export const Span = ({ qty }) => {
  return <QtySpan>{currency(qty, false)}</QtySpan>;
};
