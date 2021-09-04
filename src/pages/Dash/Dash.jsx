import styled from 'styled-components';
import { mapStateToProps, mapActionsToProps } from './Dash.index';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import dash from 'assets/mock/dash.png';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  padding: 0px;
`
const DashContent = styled.img`
  visibility: ${props => props.visibility};
`

const Component = () => {

  const [vidible, setVisible] = useState('hidden');

  useEffect(() => {
    setTimeout(() => {
      setVisible('visible')
    }, 300)
  }, [])

  return <Wrapper>
    <DashContent src={dash} visibility={vidible} alt='dasth' />
  </Wrapper>
}

export const DashPage = connect(mapStateToProps, mapActionsToProps)(Component);