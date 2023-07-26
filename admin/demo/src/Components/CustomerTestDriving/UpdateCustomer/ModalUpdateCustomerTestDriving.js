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
import { closeUpdateCustomerForm } from '../../../Redux/Reducer/CustomerReceiveAlertPrice/CreateUpdateCustomerFormReducer';
import { closeUpdateCustomerTestDrivingForm } from '../../../Redux/Reducer/CustomerTestDriving/CreateUpdateCustomerFormReducer';

function ModalUpdateCustomerTestDriving() {

  const formState = useSelector((state) => state.CreateUpdateCustomerTestDrivingFormReducer.value);
  let customer_Update = useSelector((state) => state.CreateUpdateCustomerTestDrivingFormReducer.customerUpdate);


  const dispatch = useDispatch();

  return (
    <Container>
    <Modal isOpen={formState}>
      <ModalHeader><b>Chỉnh sửa</b></ModalHeader>
      <ModalBody>
        {/* Input Form */}
        <InputForm customer_Update={customer_Update}
        />
      </ModalBody>

      <ModalFooter>
        <Button color="danger" 
         onClick={()=>{dispatch(closeUpdateCustomerTestDrivingForm())}}
        >
          Thoát
        </Button>
      </ModalFooter>
    </Modal>
  </Container>
  )
}

export default ModalUpdateCustomerTestDriving
