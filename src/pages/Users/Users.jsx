import styled from 'styled-components';
import { mapStateToProps, mapActionsToProps } from './Users.index';
import { UserItem } from 'components';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 24px;
`


const Component = ({ users, loading, getUsers }) => {

  useEffect(() => {
    getUsers();
  }, [])

  const data = (!users.length && !loading) ? [] : users;

  return <Wrapper>
    {data.map(user => <UserItem key={user.id} data={user} />)}
  </Wrapper>
}

export const UsersPage = connect(mapStateToProps, mapActionsToProps)(Component);