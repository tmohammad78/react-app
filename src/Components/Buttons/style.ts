import styled from 'styled-components';
import { darken } from 'polished';

const ButtonBase = styled.button`
  display: inline-block;
  position: relative;
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
  &:focus {
    -webkit-appearance: none;
    outline: 0px !important ;
    -webkit-tap-highlight-color: transparent;
  }
`;

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
interface ButtonProps {
	bgcolor: string;
	theme: any;
	width: string;
	height: string;
	ptb: string;
	prl: string;
	borderRadius: number;
	borderSize: number;
	btnbg:string;
}
export const ButtonStyle = styled(ButtonBase)`
  background-color: ${({ bgcolor, theme }: ButtonProps) => (bgcolor ? bgcolor : theme.btnbg)};
  color: ${({ theme, color }) => (color ? color : theme.color)};
  padding: ${(props: ButtonProps) => props.ptb}px ${props => props.prl}px;
  border-radius: ${(props: ButtonProps) => props.borderRadius}px;
  border: ${(props: ButtonProps) => props.borderSize || 0}px solid ${props => props.color};
  &:hover {
    background-color: ${props => darken(0.2, props.bgcolor)};
    &[disabled] {
      background-color: #eeee;
    }
  }
  &:active {
    transform: scale(0.98);
  }
  @keyframes open-shadow {
    0% {
      transform: scale(0);
      box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.8);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0);
    }
  }
  .testing {
    transform: scale(0);
    position: absolute;
    border-radius: inherit;
    pointer-events: none;
    z-index: 0;
  }

  &:active {
    .testing {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      animation: open-shadow 0.5s;
      background-color: rgba(0, 0, 0, 0.08);
    }
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
	bgcolor: '#FF7714',
	color: '#fff',
	borderSize: 0,
	borderRadius: 10,
	ptb: '8px',
	prl: '20px'
};
