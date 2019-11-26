import styled from 'styled-components';
import { darken } from 'polished';

const ButtonBase = styled.button`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  direction: rtl;
  background: none;
  font-family: 'IRANSans', Tahoma;
  border: none;
  outline: 0;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  color: $color-white;
  padding: 8px 20px;
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);

  &[disabled] {
    cursor: default;
    background-color: #eeee;
  }
`;
const theme = {
  main: '#FFBD41'
};

const color = {
  primary: '#fff',
  secondery: '#eee'
};

const size = {
  borderRaduis: {
    primary: 10
  },
  borderSize: {
    default: 2
  }
};

export const ButtonStyle = styled(ButtonBase)`
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
  padding: ${props => props.ptb}px ${props => props.prl}px;
  border-radius: ${props => props.borderRadius}px;
  border: ${props => props.borderSize || 0}px solid ${props => props.color};
  &:hover {
    background-color: ${props => darken(0.2, props.bgcolor)};
    &[disabled] {
      background-color: #eeee;
    }
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const AncStyle = styled(ButtonBase)`
  width: 20px;
  height: 20px;
  background-color: #ffbd41;
  border-radius: 50%;
  border: 1px solid #ffbd41;
`;

ButtonStyle.defaultProps = {
  bgcolor: '#FFBD41',
  color: '#fff',
  borderSize: 0,
  borderRadius: 10,
  ptb: '8px',
  prl: '20px'
};
