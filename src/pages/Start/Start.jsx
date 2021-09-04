import styled from 'styled-components';
import { mapActionsToProps, mapStateToProps } from './Start.index';
import logo from 'assets/svg/logo.svg';
import background from 'assets/images/background.png';
import preview from 'assets/images/preview.png';
import { connect } from 'react-redux';
import { LoginModal } from 'components';

import { Button, Content } from 'UI';

const Wrapper = styled.div`

`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height: 80px;
`


const Preview = styled.div`
  box-sizing: border-box;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background});
 }

  h1 {
    font-weight: bold;
    font-size: 60px;
    max-width: 950px;
    text-align: center;
    background: #fff;
  }
`

const Features = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`

export const Component = ({
  changeLoginData,
  loginData,
  data
}) => {

  console.log(loginData, 'loginData')
  const openModal = () => {
    changeLoginData({ open: true })
  }

  return <Wrapper>
    <Header>
      <img src={logo} alt='logo' />
      <Button onClick={openModal} type="primary">
        Войти
      </Button>
    </Header>

    <Preview>
      <h1>
        Платформа геймификации рабочих процессов
      </h1>
      <img src={preview} alt='preview' />
    </Preview>

    <Features>
      <Content data={data} />
    </Features>
    

    <LoginModal />
  </Wrapper>
}

export const StartPage = connect(mapStateToProps, mapActionsToProps)(Component)