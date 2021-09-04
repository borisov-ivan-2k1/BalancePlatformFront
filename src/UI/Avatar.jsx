import { Link } from "react-router-dom";
import styled from 'styled-components';
import { colors } from "utils/constants";
import stc from'string-to-color';

const StyledAvatar = styled(Link)`
  min-width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => stc(props.name)};
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    text-transform: uppercase;
    color: ${colors.white};
    font-size: ${props => props.size - 30}px;
    margin-top: -6px;
  }
`

export const Avatar = ({ imgUrl, name, size, type, id }) => {
  const noAvatar = !imgUrl && name[0];
  return <StyledAvatar imgUrl={imgUrl} size={size} name={name} to={`/${type}/${id}`}>
    {noAvatar && <span>{noAvatar}</span>}
  </StyledAvatar>
}