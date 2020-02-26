import styled from 'styled-components';

const BoxShadow = '0px 0px 1px 1px rgba(0, 0, 0, 0.35)';
export const InputStyle = styled.input`
  border: none;
  border-radius: 5px;
  padding: 13px 7px;
  font-size: 20px;
  border: none;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &:-webkit-internal-autofill-selected {
    background-color: transparent !important;
  }
  &:-webkit-autofill,
  -webkit-autofill:hover -webkit-autofill:focus {
    background-color: transparent !important;
  }
`;

export const ParentInput = styled.div`
  position: relative;
  border-radius: 5px;
  float: right;
  margin:20px 0px;
  border-bottom:2px solid white;
  /* -webkit-box-shadow: ${BoxShadow};
  -moz-box-shadow: ${BoxShadow};
  box-shadow: ${BoxShadow}; */

  label {
    position: absolute;
    top: 50%;
    user-select: none;
    pointer-events: none;
    transform: translateY(-50%);
    left: 10px;
    color: white;
    transition: all 0.3s ease-out;
  }

  .error{
	  color:red;
  }

  &.focus {
    border-bottom: 2px solid #ff7714;
    /* box-shadow: 0px 0px 1px 1px #ff7714; */
    label {
      top: 0px;
      left: -6px;
      font-size: 13px;
      color: #ff7714;
      /* background-color: ${({ theme }) => theme.bgCart}; */
      padding: 0px 1px;
    }
  }
`;
export const IconName = styled.div`
  width: 20px;
  position: absolute;
  display: inline-block;
  top: 50%;
  -webkit-transform: translateY(20%);
  -ms-transform: translateY(20%);
  transform: translateY(-50%);
  right: 5px;
  i {
    width: 100%;
  }
`;
