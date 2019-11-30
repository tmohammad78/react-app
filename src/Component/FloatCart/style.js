import styled from 'styled-components';

export const RestCart = styled.div`
  position: sticky;
  float: right;
  top: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.bgCart};
  .cross-icon {
    position: absolute;
    padding: 10px;
    z-index: 4000;
  }
  .header-cart {
    position: relative;
    width: 100%;
    float: right;
    padding: 10px;
    direction: rtl;
    border-bottom: 1px solid #e4e4e4;
    h3 {
      float: right;
      margin: 0;
      font-size: 17px;
    }
    .cart-size {
      &::before {
        content: '(';
      }
      &::after {
        content: ')';
      }
    }
  }
  .cart-holder-inner {
    direction: rtl;
    width: 100%;
    float: right;
  }
  .empty-cart {
    display: block;
    text-align: center;
    padding: 50px 0;
    span {
      color: #ccc;
      display: block;
    }
    .fo {
      color: #ccc;
      font-size: 80px;
      font-size: 5rem;
      display: inline-block;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 992px) {
    border: 1px solid #e4e4e4;
    > .header-cart {
      h3 {
        line-height: normal;
      }
    }
  }
`;
