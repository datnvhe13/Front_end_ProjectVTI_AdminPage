import React from 'react'
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import InputForm from './InputForm';
import { useDispatch, useSelector } from 'react-redux';
import { closeCreateForm } from '../../../Redux/Reducer/CreateNewFormReducer';

function ModalCreateNewCar() {

  const formState = useSelector((state) => state.formSlice.value);

  const dispatch = useDispatch();

  return (
    <Container>
    <Modal isOpen={formState}>
      <ModalHeader><b>Thêm mới</b></ModalHeader>
      <ModalBody>
        {/* Input Form */}
        <InputForm
        />

      </ModalBody>

      <ModalFooter>
        <Button color="danger" 
         onClick={()=>{dispatch(closeCreateForm())}}
        >
          Thoát
        </Button>
      </ModalFooter>
    </Modal>
  </Container>
  )
}

export default ModalCreateNewCar
