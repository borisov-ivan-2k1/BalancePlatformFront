import styled from "styled-components";

const Wrapper = styled.div`
  max-width: ${props => props.size}px;
`
const Image = styled.div`
  min-width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
`
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 52px;
`

export const Badge = ({ size=100, data }) => {

  const { imgUrl, title, description } = data;

  return <Wrapper size={size}>
    <Image size={size} imgUrl={imgUrl} />
    <Title>{title}</Title>
  </Wrapper>
}