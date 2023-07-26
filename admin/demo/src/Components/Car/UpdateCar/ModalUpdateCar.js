import React from "react";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import InputUpdateForm from "./InputUpdateForm";
import { useDispatch, useSelector } from "react-redux";
import { closeUpdateForm } from "../../../Redux/Reducer/CreateUpdateFormReducer";

function ModalUpdateCar() {
  let dispatch = useDispatch();
  const showUpdateForm = useSelector((state) => state.formUpdateSlice.value);
  const car_Update = useSelector((state) => state.formUpdateSlice.car);

  return (
    <Container>
      <Modal isOpen={showUpdateForm}>
        <ModalHeader><b>Chỉnh sửa</b></ModalHeader>
        <ModalBody>
          {/* Input Form */}
          <InputUpdateForm car_Update={car_Update}/>
        </ModalBody>

        <ModalFooter>
          <Button color="danger" onClick={() => dispatch(closeUpdateForm())}>
            Thoát
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalUpdateCar;
