import styled from "styled-components";
import { mapStateToProps, mapActionsToProps } from './GroupItem.index';
import { Widget, GroupRewards, Icon, Avatar } from 'UI';
import { colors } from "utils/constants";
import { connect } from "react-redux";


const Wrapper = styled(Widget)`
  position: relative;
  flex: 1;
  min-width: 384px;
  max-width: 384px;
`

const Inner = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
`

const Info = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
`

const GroupName = styled.div`
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
const GroupDescription = styled.div`
  height: 60px;
  font-size: 14px;
  color: ${colors.darkGray};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-top: 8px;
`

const UsersCount = styled.div`
  position: absolute;
  top: 6px;
  right: 10px;
  display: flex;
  align-items: center;
  span {
    margin-left: 6px;
    color: ${colors.darkGray}
  }
`

const Component = ({ data }) => {
  return <Wrapper>
    <Inner>
      <Avatar type='group' id={data.id} size={100} imgUrl={data.imgUrl} name={data.title} />
      <Info>
        <GroupName>{data.title}</GroupName>
        <GroupDescription>{data.description}</GroupDescription>
        <GroupRewards placeOnTop={data.placeOnTop} wins={data.wins} draws={data.draws} defeats={data.defeats} />
      </Info>
    </Inner>
    <UsersCount>
      <Icon type='user' size={10} />
      <span>{data.usersCount}</span>
    </UsersCount>
  </Wrapper>
}

export const GroupItem = connect(mapStateToProps, mapActionsToProps)(Component);