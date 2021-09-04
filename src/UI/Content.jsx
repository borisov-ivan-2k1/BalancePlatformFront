import styled from 'styled-components';
import { useEffect, useState } from 'react';

import dash from 'assets/mock/dash.png';
import goals from 'assets/mock/goals.png';
import group from 'assets/mock/group.png';

const StyledContent = styled.img`
  visibility: ${props => props.visibility};
`

const dataTypes = {
  dash,
  goals,
  group
}

export const Content = ({data}) => {

  const [vidible, setVisible] = useState('hidden');

  useEffect(() => {
    setTimeout(() => {
      setVisible('visible')
    }, 300)
  }, [])

  console.log('data', data)

  return <StyledContent src={dataTypes[data]} visibility={vidible} />
}