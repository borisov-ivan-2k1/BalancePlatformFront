import { colors } from 'utils/constants';
import { Layout } from 'antd'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Icon, Avatar } from 'UI';
import { connect } from 'react-redux';
import { mapStateToProps, mapActionsToProps } from './Menu.index';


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

const Component = ({ user }) => {

  return <Wrapper width={80}>
    <Item to={`/user/${user?.id}`}>
      <Avatar size={50} name={user?.name || 'А'} imgUrl={user?.imgUrl} type={'user'} id={user?.id} />
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

export const Menu = connect(mapStateToProps, mapActionsToProps)(Component)