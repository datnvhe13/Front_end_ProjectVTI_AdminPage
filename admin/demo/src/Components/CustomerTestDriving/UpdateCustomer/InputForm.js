import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeUpdateCustomerTestDrivingForm } from "../../../Redux/Reducer/CustomerTestDriving/CreateUpdateCustomerFormReducer";
import { actionUpdateCustomerAPI } from "../../../Redux/Reducer/CustomerTestDriving/CustomerTestDrivingSliceReducer";

function InputForm(props) {
  // const listCarCategory = useSelector((state)=> state.carCategorySlice.listCarCategory);
  let { customer_Update } = props;
  const dispatch = useDispatch();
  console.log("customer_Update props : ", customer_Update);

  // declare States to save data in Input TextField
  let [fullName, setFullName] = useState(customer_Update.FullName);
  let [carType, setCarType] = useState("SUV");
  let [date, setDate] = useState(customer_Update.Date);
  let [phoneNumber, setPhoneNumber] = useState(customer_Update.PhoneNumber);

  let handleEditButton = () => {
    let customer_TestDriving_Update = {
      FullName: fullName,
      CarType: carType,
      Date: date,
      PhoneNumber: phoneNumber,
      id: customer_Update.id
    };
    console.log('customer_TestDriving_Update : ', customer_TestDriving_Update);
    dispatch(actionUpdateCustomerAPI(customer_TestDriving_Update))
    alert("Chỉnh sửa thành công");
    dispatch(closeUpdateCustomerTestDrivingForm())
    
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
            <b>Ngày lái thử</b>
          </Label>
          <Input
            id="date"
            name="date"
            // placeholder="Nhập giá xe"
            type="date"
            value={date}
            onChange={(event) => {
              setDate(event.target.value);
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
        {/* Button */}
        <Button
          color="primary"
          onClick={() => {
            handleEditButton();
          }}
        >
          Chỉnh Sửa
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
