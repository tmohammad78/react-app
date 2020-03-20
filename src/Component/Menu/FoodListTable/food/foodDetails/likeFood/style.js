import styled from 'styled-components';
import PropTypes from 'prop-types';
// interface IProps {
//   className: string;
//   children: React.ReactNode;
//   onClick: () => void;
// }

const Parent = ({ className, children, onClick }) => <div className={className}> {children} </div>;
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

Parent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func
};
