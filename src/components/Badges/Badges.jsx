import { useEffect } from 'react';
import styled from "styled-components";
import { mapStateToProps, mapActionsToProps } from './Badges.index';
import { Widget, Badge } from 'UI';
import { connect } from "react-redux";


const Wrapper = styled(Widget)`
  margin-top: 45px;
`
const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
`

const BadgesList = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  column-gap: 38px;
`


const Component = ({ badges, loading, getBadges, clearBadges, userId }) => {

  useEffect(() => {
    getBadges(userId);
    return () => {
      clearBadges();
    }
  }, [])

  const data = (!badges.length && !loading) ? [] : badges;

  return <Wrapper>
    <Title>Бейджи и награды</Title>
    <BadgesList>
      {data?.map(badge => <Badge size={200} data={badge} />)}
    </BadgesList>

  </Wrapper>
}

export const Badges = connect(mapStateToProps, mapActionsToProps)(Component);