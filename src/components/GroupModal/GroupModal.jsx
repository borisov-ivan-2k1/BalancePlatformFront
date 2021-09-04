import styled from "styled-components";
import { mapStateToProps, mapActionsToProps } from './GroupModal.index';
import { Input, Button, Modal } from 'UI';
import { connect } from "react-redux";
import { Upload } from "antd";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  width: 100%;
  margin-right: 24px;

`
const Right = styled.div`

`

const StyledUpload = styled(Upload)`
  margin-bottom: 12px;
  display: block;
  .ant-upload {
    width: 200px;
    height: 176px;
  }
  .ant-upload-picture-card-wrapper {
    display: block;
  }
`

const Component = ({ data, changeAddGroup, createGroup, clearAddGroup }) => {
  console.log('data', data)
  return <Modal width={800} open={data.open} onClose={clearAddGroup} title='Создание группы'>
    <Wrapper>
      <Left>
        <Input placeholder='Название' value={data.title} onChange={title => changeAddGroup({ title })} />
        <Input placeholder='Описание' mt={24} type='textarea' autoSize={{ minRows: 7 }} />
      </Left>

      <Right>

        <StyledUpload
         name="avatar"
         listType="picture-card"
         className="avatar-uploader"
         showUploadList={false}
         action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
         beforeUpload={() => {}}
         onChange={() => {}}
        >
          Фото
        </StyledUpload>

        <Button onClick={createGroup}>
          Создать
        </Button>
      </Right>
    </Wrapper>
  </Modal>
}

export const GroupModal = connect(mapStateToProps, mapActionsToProps)(Component);