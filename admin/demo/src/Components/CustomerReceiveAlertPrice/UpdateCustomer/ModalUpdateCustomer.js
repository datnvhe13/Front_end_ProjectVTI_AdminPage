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
import { closeUpdateCustomerForm } from '../../../Redux/Reducer/CustomerReceiveAlertPrice/CreateUpdateCustomerFormReducer';

function ModalUpdateCustomer() {

  const formState = useSelector((state) => state.CreateUpdateCustomerFormReducer.value);
  let customerUpdate = useSelector((state) => state.CreateUpdateCustomerFormReducer.customer);

  const dispatch = useDispatch();

  return (
    <Container>
    <Modal isOpen={formState}>
      <ModalHeader>Chỉnh sửa</ModalHeader>
      <ModalBody>
        {/* Input Form */}
        <InputForm customerUpdate={customerUpdate}
        />
      </ModalBody>

      <ModalFooter>
        <Button color="danger" 
         onClick={()=>{dispatch(closeUpdateCustomerForm())}}
        >
          Thoát
        </Button>
      </ModalFooter>
    </Modal>
  </Container>
  )
}

export default ModalUpdateCustomer
