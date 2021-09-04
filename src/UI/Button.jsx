import { Button } from "antd";
import styled from "styled-components";
import { colors } from "utils/constants";


export const StyledButton = styled(Button)`
  width: 200px;
  &.ant-btn {
    height: 45px;
    background: ${colors.main};
    // color: ${colors.white};
    border: none;
    box-shadow: unset;
  }
  
  & span {
    font-size: 20px;
    font-weight: bold;
    color: ${colors.white};
  }
`