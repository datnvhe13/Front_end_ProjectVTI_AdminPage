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
import { closeCreateCustomerForm } from '../../../Redux/Reducer/CustomerReceiveAlertPrice/CreateNewCustomerFormReducer';

function ModalCreateNewCustomer() {

  const formState = useSelector((state) => state.CreateNewCustomerFormReducer.value);

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
         onClick={()=>{dispatch(closeCreateCustomerForm())}}
        >
          Thoát
        </Button>
      </ModalFooter>
    </Modal>
  </Container>
  )
}

export default ModalCreateNewCustomer
