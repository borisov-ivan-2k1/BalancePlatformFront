import { colors } from 'utils/constants';
import { Layout } from 'antd'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Icon, Avatar } from 'UI';


const { Sider } = Layout;

const Wrapper = styled(Sider)`
  &.ant-layout-sider {
    width: 80px;
    max-width: 80px;
    background: ${colors.main};
  }
`

const Item = styled(NavLink)`
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${colors.darkMain};
  }
  &.active {
    background: ${colors.darkMain};
  }
`

const item = {
  name: 'Иван',
  type: 'user',
  id: '1',
}


const Component = ({}) => {

  return <Wrapper width={80}>
    <Item to={`/${item.type}/${item.id}`}>
      <Avatar size={50} name={item.name} type={item.type} id={item.id} />
    </Item>

    <Item to={`/dash`} activeClassName='active'>
      <Icon type='dash' />
    </Item>

    <Item to={`/users`} activeClassName='active'>
      <Icon type='users' />
    </Item>

    <Item to={`/groups`} activeClassName='active'>
      <Icon type='groups' />
    </Item>

    <Item to={`/rating`} activeClassName='active'>
      <Icon type='rating' />
    </Item>

    <Item to={`/shop`} activeClassName='active'>
      <Icon type='shop' />
    </Item>
  </Wrapper>
}

export const Menu = Component