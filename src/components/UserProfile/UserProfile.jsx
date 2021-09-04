import { useEffect } from 'react';
import styled from "styled-components";
import { mapStateToProps, mapActionsToProps } from './UserProfile.index';
import { Widget, Icon } from 'UI';
import { colors } from "utils/constants";
import { connect } from "react-redux";
import { useParams } from 'react-router';
import { formatDate, formatPhone } from 'utils';


const Wrapper = styled(Widget)`
  display: flex;
`
const Photo = styled.div`
  width: 330px;
  height: 385px;
  background-color: ${colors.gray};
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center center;
  margin-right: 136px;

`
const Info = styled.div`
  display: flex;
  flex-direction: column;
`
const InfoWrapper = styled.div`
  display: flex;
  font-size: 20px;
`
const InfoTitles = styled.div`
  color: ${colors.darkGray};
  margin-right: 60px;
  & > div {
    margin-top: 18px;
  }
`
const InfoValues = styled.div`
  & > div {
    margin-top: 18px;
    color: #000;
  }
`
const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`
const Currency = styled.div`
  display: flex;
  margin-top: 48px;
`
const CurrencyItem = styled.div`
  display: flex;
  &:first-child {
    margin-right: 40px;
  }
  span {
    color: ${colors.main};
    font-size: 36px;
    line-height: 1;
    margin-left: 12px;
  }
`


const Component = ({ user, loading, getUser, clearUser }) => {

  const { id } = useParams();

  useEffect(() => {
    getUser(id);
    return () => {
      clearUser();
    }
  }, [])

  const data = (!user) ? undefined : user;

  if (!user) return <></>;

  return <Wrapper>
    <Photo imgUrl={data.imgUrl} />
    <Info>
      <Name>{data.title}</Name>
      <InfoWrapper>
        <InfoTitles>
          <div>Дата рождения:</div>
          <div>Город:</div>
          <div>Телефон:</div>
          <div>Email:</div>
        </InfoTitles>
        <InfoValues>
          <div>{formatDate(data.birthday)}</div>
          <div>{data.city}</div>
          <div>{formatPhone(data.phone)}</div>
          <div>{data.email}</div>
        </InfoValues>
      </InfoWrapper>
      <Currency>
        <CurrencyItem>
          <Icon size={50} type='spentCurrency' />
          <span>{data.spentCurrency}</span>
        </CurrencyItem>
        <CurrencyItem>
          <Icon size={50} type='currency' />
          <span>{data.currency}</span>
        </CurrencyItem>
      </Currency>
    </Info>
  </Wrapper>
}

export const UserProfile = connect(mapStateToProps, mapActionsToProps)(Component);