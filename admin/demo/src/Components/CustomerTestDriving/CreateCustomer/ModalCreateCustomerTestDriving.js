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
import { closeCreateCustomerTestForm } from '../../../Redux/Reducer/CustomerTestDriving/CreateNewCustomerTestFormReducer';

function ModalCreateCustomerTestDriving() {

  const formState = useSelector((state) => state.CreateNewCustomerTestFormReducer.value);

  const dispatch = useDispatch();

  return (
    <Container>
    <Modal isOpen={formState}>
      <ModalHeader>Thêm mới</ModalHeader>
      <ModalBody>
        {/* Input Form */}
        <InputForm
        />
      </ModalBody>

      <ModalFooter>
        <Button color="danger" 
         onClick={()=>{dispatch(closeCreateCustomerTestForm())}}
        >
          Thoát
        </Button>
      </ModalFooter>
    </Modal>
  </Container>
  )
}

export default ModalCreateCustomerTestDriving
