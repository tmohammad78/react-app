import styled from 'styled-components';
import { LeftSideHolder } from 'component/FloatCart/style';
const Clear = ({ className, children }) => <div className={className}>{children}</div>;

export const RightSideHolder = styled.div`
  > div & {
    margin-bottom: 20px;
  }
  @media (min-width: 992px) {
    width: 95%;
    margin: 0 auto;
    min-height: 600px;
  }
`;

export const RestMenuHolder = styled(Clear).attrs({
  className: 'clearfix'
})`
  padding: 40px 0 50px;
  @media (min-width: 992px) {
    padding: 160px 0 50px;
  }
  @media (min-width: 767px) {
    .wrapper {
      width: 71%;
      float: right;
    }
  }
`;
