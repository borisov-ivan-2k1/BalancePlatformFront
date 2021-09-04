import { Modal } from 'antd';
import styled from 'styled-components';
import { Button } from 'UI';

const StyledModal = styled(Modal)`
  .ant-modal-body {
    padding: 50px;
  }
`

const Header = styled.div`
  font-size: 46px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  margin-top: -20px;
`
const Body = styled.div`

`

export const Actions = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`

export const CustomModal = ({
  open,
  onClose,
  title,
  onApprove,
  approveText = 'ОК',
  children,
  width
}) => {

  return <StyledModal width={width} footer={null} centered visible={open} onCancel={onClose}>
    <Header>
      {title}
    </Header>
    <Body>
      {children}
    </Body>
    {onApprove && <Actions>
       <Button onClick={onApprove} type='primary'>
          {approveText}
        </Button>
    </Actions>}
  </StyledModal>
}