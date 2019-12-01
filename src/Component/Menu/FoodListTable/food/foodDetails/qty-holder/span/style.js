import styled from 'styled-components';

export const QtySpan = styled.span`
  width: 25px;
  height: 25px;
  display: inline-block;
  text-align: center;
  font-size: 0.875rem;
  line-height: 25px;
  vertical-align: middle;
  color: ${({ theme }) => theme.foodItemTextSpan};
`;
