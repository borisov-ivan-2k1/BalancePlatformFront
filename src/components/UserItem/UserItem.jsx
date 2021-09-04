import styled from "styled-components";
import { mapStateToProps, mapActionsToProps } from './UserItem.index';
import { Widget, Icon, Avatar, InfoItem } from 'UI';
import { medals } from "utils/constants";
import { connect } from "react-redux";
import { formatPhone } from 'utils';


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
  gap: 12px;
  margin-left: 24px;
`
const Medal = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
`

const Component = ({ data }) => {
  const medal = medals[data.placeOnTop];
  return <Wrapper>
      <Avatar size={100} type='user' id={data.id}imgUrl={data.imgUrl} name={data.title} />
      <Info>
        <InfoItem>
          <Icon size={15} type='user' />
          <div>{data.title}</div>
        </InfoItem>
        <InfoItem>
          <Icon size={15} type='email' />
          <div>{data.email}</div>
        </InfoItem>
        <InfoItem>
          <Icon size={15} type='phone' />
          <div>{formatPhone(data.phone)}</div>
        </InfoItem>
      </Info>
      {
        medal && <Medal src={medal} />
      }
  </Wrapper>
}

export const UserItem = connect(mapStateToProps, mapActionsToProps)(Component);