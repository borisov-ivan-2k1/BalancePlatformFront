import { colors } from 'utils/constants';
import { Layout } from 'antd'
import styled from 'styled-components';
import logo from 'assets/svg/logo.svg';
import { Input } from 'UI';

const { Header } = Layout;

const Wrapper = styled(Header)`
  &.ant-layout-header {
    height: 80px;
    background: ${colors.white};
    position: fixed;
    max-width: calc(100vw - 80px);
    width: 100%;
    z-index: 2;
  }
`

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

const Logo = styled.img`
  height: 40px;
`

const Search = styled(Input)`
  max-width: 400px;
  padding: 10px 12px;
`

const Component = ({}) => {

  return <Wrapper>
    <Inner>
      <Logo src={logo} alt='logo' />
      <Search placeholder='Поиск...' />
    </Inner>
  </Wrapper>
}

export const CustomHeader = Component