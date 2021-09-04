import styled from 'styled-components';
import { mapStateToProps, mapActionsToProps } from './Groups.index';
import { GroupItem, GroupModal } from 'components';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import addIng from 'assets/images/add.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`

const Add = styled.img`
  position: fixed;
  right: calc((100vw / 2) - 600px - 40px); // 100vw / 2 - половина экрана, 600 - половина контентаной части, 40 - половина меню
  bottom: 80px;
  cursor: pointer;
`


const Component = ({ groups, loading, getGroups, changeAddGroup }) => {

  useEffect(() => {
    getGroups();
  }, [])

  const data = (!groups.length && !loading) ? [] : groups;

  return <Wrapper>
    {data.map(group => <GroupItem key={group.id} data={group} />)}

    <Add src={addIng} onClick={() => changeAddGroup({ open: true })} />

    <GroupModal />
  </Wrapper>
}

export const GroupsPage = connect(mapStateToProps, mapActionsToProps)(Component);