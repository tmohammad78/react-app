import React from 'react';
import styled from 'styled-components';

interface IProps {
	className: string,
	children: React.ReactNode,
	onClick: (e: React.FormEvent<EventTarget>) => void
}
const Parent = ({ className, children, onClick }: IProps) => {
	return (
		<div className={className} onClick={onClick} >
			{children}
		</div>
	);
};
export const LikeFoodStyle = styled(Parent).attrs({
	className: ''
})`
  position: absolute;
  right: 15px;
  width: 17px;
  bottom: 15px;
  height: 17px;
  display: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1.06);
  svg {
    width: 100%;
    height: 100%;
  }
  &.show {
    display: inline-block;
  }
`;
