import styled from "styled-components";
import { mapStateToProps, mapActionsToProps } from './UserRatingItem.index';
import { Widget, Icon, Avatar, InfoItem, LineProgress } from 'UI';
import { colors, medals } from "utils/constants";
import { connect } from "react-redux";


const Wrapper = styled(Widget)`
  flex: 1;
  display: flex;
  position: relative;
  min-width: 384px;
  max-width: 384px;
  align-items: center;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 24px;
  width: 100%;
`

const PlaceOnTop = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;

  span {
    line-height: 1;
    font-weight: bold;
    font-size: 22px;
    color: ${colors.darkGray}
  }
`
const Totals = styled.div`

`

const Component = ({ data }) => {
  const medal = medals[data.placeOnTop];

  const percent = (data.score / data.totalScore) * 100;

  return <Wrapper>
      <Avatar size={100} type='user' id={data.id}imgUrl={data.imgUrl} name={data.title} />
      <Info>
        <InfoItem>
          <Icon size={15} type='user' />
          <div>{data.title}</div>
        </InfoItem>
        <LineProgress percent={percent} />
        <Totals>{data.score}/{data.totalScore}</Totals>
      </Info>

      <PlaceOnTop>
        {
          medal ?
          <img src={medal} alt='placeOnTop' /> :
          <span>{data.placeOnTop}</span>
        }
      </PlaceOnTop>
  </Wrapper>
}

export const UserRatingItem = connect(mapStateToProps, mapActionsToProps)(Component);