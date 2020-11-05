import styled from 'styled-components';

export const TextIw = styled.p``;
export const Iw = styled.div`
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  width: 95px;
  display: inline-block;
  margin: 0 5px;
  transition: all 0.5s;
  .inner {
    background: transparent;
    .caption {
      color: white;
    }
  }
  .activecategory {
    border-bottom: 5px soild #be901e !important  ;
  }

  ${TextIw} {
    color: ${({ theme }) => theme.categoryColor};
  }
`;

export const CategoryBar = styled.div`
	background-color: ${({ theme }: any) => (theme.categoryBar)};
`;
