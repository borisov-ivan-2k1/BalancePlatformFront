import styled from 'styled-components';
import { mapStateToProps, mapActionsToProps } from './User.index';
import { connect } from 'react-redux';
import { Badges, UserProfile } from 'components';
import { useParams } from 'react-router';
import { Content } from 'UI';

const Wrapper = styled.div`
  
`

const Goals = styled.div`
  margin-top: 45px;
  margin-bottom: 45px;
`


const Component = ({ data }) => {

  const { id } = useParams();

  return <Wrapper>
    <UserProfile />
    <Goals>
      <Content data={data} />
    </Goals>
    <Badges userId={id} />
  </Wrapper>
}

export const UserPage = connect(mapStateToProps, mapActionsToProps)(Component);