import { Progress } from 'antd';
import styled from 'styled-components';
import { colors } from 'utils/constants';

const StyledLineProgress = styled(Progress)`
  .ant-progress-bg {
    background: ${colors.success};
  }
`

export const CustomLineProgress = ({percent}) => {
  return <StyledLineProgress percent={percent} showInfo={false} />
}