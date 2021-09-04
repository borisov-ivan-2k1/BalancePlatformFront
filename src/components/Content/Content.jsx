import { colors } from 'utils/constants';
import { Layout } from 'antd'
import styled from 'styled-components';

const { Content } = Layout;

const Wrapper = styled(Content)`
  &.ant-layout-content {
    background: ${colors.lightGray};
    margin-top: 80px;
    min-height: calc(100vh - 80px);
    padding: 0 50px;
  }
`

const Inner = styled(Content)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-top: 45px;
`

export const CustomContent = ({ children }) => {

  return <Wrapper>
    <Inner>
      {children}
    </Inner>
  </Wrapper>
}