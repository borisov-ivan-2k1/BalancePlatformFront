// import { Modal } from 'antd';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { mapStateToProps, mapActionsToProps } from './LoginModal.index';
import { Button, Input, Modal } from 'UI';


// const StyledModal = styled(Modal)`
//   .ant-modal-body {
//     padding: 50px;
//   }
// `

// const Header = styled.div`
//   font-size: 46px;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 30px;
//   margin-top: -20px;
// `
// const Body = styled.div`

// `

// const Actions = styled.div`
//   margin-top: 30px;
//   display: flex;
//   justify-content: center;
// `

const Component = ({
  data,
  changeLoginData,
  cleatLoginData,
  login,
}) => {

  const onCloseModal = () => {
    console.log('CLOSE');
    changeLoginData({ open: false });
  }

  return <Modal open={data.open} onCancel={onCloseModal} title='Вход' onApprove={login} approveText='Войти'>
    <Input mt={30} placeholder='Логин' value={data.login} onChange={login => changeLoginData({ login })} size='lg' />
    <Input mt={30} type='password' placeholder='Пароль' value={data.password} onChange={password => changeLoginData({ password })} size='lg' />
  </Modal>
  // <StyledModal footer={null} centered visible={data.open} onCancel={onCloseModal}>
  //   <Header>
  //     Вход
  //   </Header>
  //   <Body>
  //     <Input mt={30} placeholder='Логин' value={data.login} onChange={login => changeLoginData({ login })} size='lg' />
  //     <Input mt={30} type='password' placeholder='Пароль' value={data.password} onChange={password => changeLoginData({ password })} size='lg' />
  //     {/* <LoginInput placeholder='Логин' />
  //     <PasswordInput placeholder='Пароль' /> */}
  //   </Body>
  //   <Actions>
  //     <Button onClick={login} type='primary'>
  //       Войти
  //     </Button>
  //   </Actions>
  // </StyledModal>
}

export const LoginModal = connect(mapStateToProps, mapActionsToProps)(Component)