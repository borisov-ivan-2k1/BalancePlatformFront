import styled from 'styled-components';
import { colors } from 'utils/constants';

export const InfoItem = styled.div`
display: flex;
align-items: center;
div {
  margin-left: 12px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${colors.darkGray};
}
`