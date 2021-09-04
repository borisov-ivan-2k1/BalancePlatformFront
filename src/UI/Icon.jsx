import styled from 'styled-components';

import users from 'assets/svg/users.svg';
import user from 'assets/svg/user.svg';
import groups from 'assets/svg/groups.svg';
import rating from 'assets/svg/rating.svg';
import shop from 'assets/svg/shop.svg';
import win from 'assets/svg/win.svg';
import draw from 'assets/svg/draw.svg';
import defeat from 'assets/svg/defeat.svg';
import email from 'assets/svg/email.svg';
import phone from 'assets/svg/phone.svg';
import currency from 'assets/svg/currency.svg';
import spentCurrency from 'assets/svg/spentCurrency.svg';
import dash from 'assets/svg/dash.svg';





const icons = {
  user,
  users,
  groups,
  rating,
  shop,
  win,
  draw,
  defeat,
  email,
  phone,
  currency,
  spentCurrency,
  dash
}

const StyledIcon = styled.img`
  width: ${(props) => props.size}px;
`

export const Icon = ({ type, size=32 }) => {
  return <StyledIcon src={icons[type]} size={size} alt={type} />
}