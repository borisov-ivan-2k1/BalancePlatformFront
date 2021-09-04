import styled from "styled-components";
import { mapStateToProps, mapActionsToProps } from './Product.index';
import { Widget, Button } from 'UI';
import { colors } from "utils/constants";
import { connect } from "react-redux";


const Wrapper = styled(Widget)`
  padding: 0;
  flex: 1;
  min-width: 282px;
  max-width: 282px;
`

const ProductImage = styled.div`
  height: 200px;
  width: 100%;
  background: ${colors.gray};
  background-image: url(${props => props.imgUrl});
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
`
const ProductInfo = styled.div`
  padding: 24px;
`

const ProductName = styled.div`
  height: 46px;
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const ProducDescription = styled.div`
  height: 60px;
  font-size: 16px;
  color: ${colors.darkGray};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-top: 18px;
`

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.main};
  margin-top: 18px;
`

const StyledButton = styled(Button)`
  margin-top: 18px;
  width: 178px;
  &.ant-btn {
    height: 40px;
  }
  & span {
    font-size: 18px;
    font-weight: normal;
  }
`

const Component = ({ data, orderProduct }) => {
  return <Wrapper>
    <ProductImage imgUrl={data.imgUrl} />
    <ProductInfo>
      <ProductName>{data.title}</ProductName>
      <ProducDescription>{data.description}</ProducDescription>
      <ProductPrice>{data.price} кредитов</ProductPrice>
      <StyledButton onClick={() => orderProduct(data)}>Заказать</StyledButton>
    </ProductInfo>
    
  </Wrapper>
}

export const Product = connect(mapStateToProps, mapActionsToProps)(Component);