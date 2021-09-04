import styled from 'styled-components';
import { mapStateToProps, mapActionsToProps } from './Group.index';
import { connect } from 'react-redux';
import { Content } from 'UI';

const Wrapper = styled.div`
  
`

const Goals = styled.div`
  margin-top: 45px;
  margin-bottom: 45px;
`


const Component = ({ data }) => {

  return <div>
    <Content data={data} />
  </div>
}

export const GroupPage = connect(mapStateToProps, mapActionsToProps)(Component);