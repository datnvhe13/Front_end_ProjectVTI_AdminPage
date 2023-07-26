import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { closeUpdateCustomerForm } from "../../../Redux/Reducer/CustomerReceiveAlertPrice/CreateUpdateCustomerFormReducer";
import { actionUpdateCustomerAPI } from "../../../Redux/Reducer/CustomerReceiveAlertPrice/CustomerSliceReducer";

function InputForm(props) {
  let { customerUpdate } = props;
  let dispatch = useDispatch();

  // const listCarCategory = useSelector(
  //   (state) => state.carCategorySlice.listCarCategory
  // );

  // let items = "";
  // items = listCarCategory.map((carCategory, index) => {
  //   return <option value={carCategory.name}>{carCategory.name}</option>;
  // });

  // declare States to save data in Input TextField
  let [fullName, setFullName] = useState(customerUpdate.FullName);
  let [phoneNumber, setPhoneNumber] = useState(customerUpdate.PhoneNumber);
  let [carType, setCarType] = useState("SUV");
  let [paymentMethod, setPaymentMethod] = useState(
    customerUpdate.PaymentMethod
  );
  //
  let handleCreateButton = () => {
    let customer_Update = {
      FullName: fullName,
      PhoneNumber: phoneNumber,
      CarType: carType,
      PaymentMethod: paymentMethod,
      id: customerUpdate.id
    }

    console.log('customer_Update : ', customer_Update);
    dispatch(actionUpdateCustomerAPI(customer_Update))
    alert('Chỉnh sửa thành công !');
    dispatch(closeUpdateCustomerForm())

  };

  return (
    <>
      <Form>
        {/* CarName */}
        <FormGroup>
          <Label for="exampleName">
            <b>Họ và tên (*)</b>
          </Label>
          <Input
            id="Name"
            name="Name"
            type="text"
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </FormGroup>

        {/* Phone */}
        <FormGroup>
          <Label for="exampleName">
            <b>Số điện thoại</b>
          </Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </FormGroup>

        {/* CarType */}
        <FormGroup>
          <Label for="exampleSelect">
            <b>Chọn loại xe</b>
          </Label>
          <Input
            id="CarTypeSelect"
            name="CarType"
            type="select"
            value={carType}
            onChange={(event) => {
              setCarType(event.target.value);
            }}
          >
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Mui trần">Mui trần</option> 
          </Input>
        </FormGroup>
        {/* Date */}
        <FormGroup>
          <Label for="examplePrice">
            <b>Hình thức</b>
          </Label>{" "}
          <br />
          <Input
            name="gender"
            type="radio"
            value="Trả thẳng"
            onChange={(event) => {
              setPaymentMethod(event.target.value);
            }}
          />{" "}
          Trả thẳng
          <Input
            name="gender"
            type="radio"
            value="Trả góp"
            onChange={(event) => {
              setPaymentMethod(event.target.value);
            }}
            style={{ marginLeft: "20px" }}
          />{" "}
          Trả góp
        </FormGroup>

        {/* Button */}
        <Button
          color="primary"
          onClick={() => {
            handleCreateButton();
          }}
        >
          Chỉnh sửa
        </Button>
        <Button
          color="danger"
          // onClick={handleResetButton}
        >
          Reset
        </Button>
      </Form>
    </>
  );
}

export default InputForm;
