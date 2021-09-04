import { Input } from "antd";
import styled from "styled-components";

const sizes = {
  sm: 14,
  md: 16,
  lg: 20,
};

const StyledInput = styled(Input)`
  background: #eee;
  border: none;
  box-shadow: unset;
  margin-top: ${props => props.mt}px;
  font-size: ${props => sizes[props.size]}px;
  padding: 10px 30px;
  ::selection {
    background: none;
  }
`
const StyledInputPassword = styled(StyledInput.Password)`
  background: #eee;
  border: none;
  box-shadow: unset;
  margin-top: ${props => props.mt}px;
  padding: 10px 30px;
  ::selection {
    background: none;
  }
  & input {
    background: #eee;
    font-size: ${props => sizes[props.size]}px;
  }
`

const StyledTextArea = styled(Input.TextArea)`
  background: #eee;
  border: none;
  box-shadow: unset;
  margin-top: ${props => props.mt}px;
  font-size: ${props => sizes[props.size]}px;
  padding: 10px 30px;
  ::selection {
    background: none;
  }
`

const inputs = {
  text: StyledInput,
  password: StyledInputPassword,
  textarea: StyledTextArea,
}

export const CustomInput = (props) => {
  const {placeholder, value, onChange = () => {}, type = 'text', mt=0, size='sm' } = props;
  const Component = inputs[type];
  return <Component
    {...props}
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
    mt={mt}
    size={size}
  />
}