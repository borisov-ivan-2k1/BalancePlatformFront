import styled from 'styled-components';
import { userMock, mapStateToProps, mapActionsToProps } from './User.index';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Badges, UserProfile } from 'components';
import { useParams } from 'react-router';

const Wrapper = styled.div`
  
`


const Component = () => {

  const { id } = useParams();

  return <Wrapper>
    <UserProfile />
    <Badges userId={id} />
  </Wrapper>
}

export const UserPage = connect(mapStateToProps, mapActionsToProps)(Component);