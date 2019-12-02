import styled from 'styled-components';

const BoxShadow = '0px 0px 1px 1px rgba(0, 0, 0, 0.35)';
export const InputStyle = styled.input`
  border: none;
  border-radius: 5px;
  padding: 10px 5px;
  font-size: 17px;
  color: ${({ theme }) => theme.text};
  direction: rtl;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

export const ParentInput = styled.div`
  position: relative;
  border-radius: 5px;
  width: 250px;
  float: right;
  -webkit-box-shadow: ${BoxShadow};
  -moz-box-shadow: ${BoxShadow};
  box-shadow: ${BoxShadow};

  label {
    position: absolute;
    top: 50%;
    user-select: none;
    pointer-events: none;
    transform: translateY(-50%);
    right: 30px;
    color: #888;
    transition: all 0.3s ease-out;
  }

  &.focus {
    border: 1px solid #ff7714;
    box-shadow: 0px 0px 1px 1px #ff7714;
    label {
      top: 0px;
      right: 10px;
      font-size: 13px;
      color: #ff7714;
      background-color: ${({ theme }) => theme.bgCart};
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
