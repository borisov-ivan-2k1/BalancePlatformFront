import styled from 'styled-components';
import { mapStateToProps, mapActionsToProps } from './Dash.index';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

const Wrapper = styled.div`
  
`


const Component = () => {

  const { id } = useParams();

  return <Wrapper>
    
  </Wrapper>
}

export const DashPage = connect(mapStateToProps, mapActionsToProps)(Component);