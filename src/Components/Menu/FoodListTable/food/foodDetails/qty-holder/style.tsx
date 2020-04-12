import React from 'react';
import styled from 'styled-components';
interface IProps {
	className: string;
	children: React.ReactNode
}
const Parent = ({ className, children }: IProps) => <div className={className}>{children}</div>;
export const QtyStyle = styled(Parent).attrs({
	className: ''
})`
  position: absolute;
  left: 7px;
  bottom: 7px;
  .anc-box {
    border-radius: 50px;
    text-align: center;
    background-color: transparent;
    button {
      width: 25px;
      height: 25px;
      padding: 0;
      color: #ff7714;
      border: 1px solid #ff7714;
    }
  }
  &.show-detail {
    .anc-box {
      background-color: #ff7714;
      button {
        color: white;
        border: 0px solid #ff7714;
      }
    }
  }
  &.hide-detail {
    .anc-box {
      width: 30px;
      height: 25px;
    }
  }
`;

export const AvailableBox = styled.div`
  position: absolute;
  left: 9px;
  bottom: 9px;
  .meal-badge {
    padding: 6px 9px;
    color: ${({ theme }) => theme.AvailableBoxText};
    border-radius: 20px;
    border: 1px solid #e4e4e4;
    -webkit-border-radius: 20px;
    background-color: ${({ theme }) => theme.AvailableBox};
    font-size: 0.75rem;
    min-height: 35px;
    max-width: 100px;
    span {
      vertical-align: middle;
      line-height: 18px;
    }
  }
`;
