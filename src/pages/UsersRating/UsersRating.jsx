import styled from 'styled-components';
import { mapStateToProps, mapActionsToProps } from './UsersRating.index';
import { UserRatingItem } from 'components';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 24px;
`


const Component = ({ items, loading, getUsersRating }) => {

  useEffect(() => {
    getUsersRating();
  }, [])

  const data = (!items.length && !loading) ? [] : items;

  return <Wrapper>
    {data.map(item => <UserRatingItem key={item.id} data={item} />)}
  </Wrapper>
}

export const UsersRatingPage = connect(mapStateToProps, mapActionsToProps)(Component);