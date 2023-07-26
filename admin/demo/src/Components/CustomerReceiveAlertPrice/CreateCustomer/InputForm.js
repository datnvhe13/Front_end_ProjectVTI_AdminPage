import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { closeCreateCustomerForm } from '../../../Redux/Reducer/CustomerReceiveAlertPrice/CreateNewCustomerFormReducer';
import { actionAddCustomerAPI } from '../../../Redux/Reducer/CustomerReceiveAlertPrice/CustomerSliceReducer';

function InputForm() {


  let dispatch = useDispatch();

  // declare States to save data in Input TextField
  let [fullName, setFullName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [carType, setCarType] = useState("");
  let [paymentMethod, setPaymentMethod] = useState("");
  // 

  let handleCreateButton = () => {
    let customer = {
      FullName: fullName,
      PhoneNumber: phoneNumber,
      CarType: carType,
      PaymentMethod: paymentMethod
    }
    console.log('customer : ', customer);
    dispatch(actionAddCustomerAPI(customer))
   
    alert("Thêm mới thành công !");
    dispatch(closeCreateCustomerForm());
    // setListCustomer(listCustomer)
  }



  return (
    <>
     
      <Form>
        {/* CarName */}
        <FormGroup>
          <Label for="exampleName"><b>Họ và tên (*)</b></Label>
          <Input
            id="Name"
            name="Name"
            placeholder="Nhập tên khách hàng"
            type="text"
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </FormGroup>

        {/* Phone */}
        <FormGroup>
          <Label for="exampleName"><b>Số điện thoại</b></Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Nhập số điện thoại"
            type="number"
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </FormGroup>

        {/* CarType */}
        <FormGroup>
          <Label for="exampleSelect"><b>Chọn loại xe</b></Label>
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
          <Label for="examplePrice"><b>Hình thức</b></Label> <br/>
          <Input
            name="gender"
            type="radio"
            value="Trả thẳng"
            onChange={(event) => {
              setPaymentMethod(event.target.value);
            }}
          /> Trả thẳng
           <Input
            name="gender"
            type="radio"
            value="Trả góp"
            style={{marginLeft: "20px"}}
            onChange={(event) => {
              setPaymentMethod(event.target.value);
            }}
          /> Trả góp
        </FormGroup>

        {/* Button */}
        <Button
          color="primary"
          onClick={()=>{handleCreateButton()}}
        >
          Tạo mới
        </Button>
        <Button
          color="danger"
          // onClick={handleResetButton}
        >
          Reset
        </Button>
      </Form>
    </>
  )
}

export default InputForm