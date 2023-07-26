import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { closeCreateCustomerTestForm } from '../../../Redux/Reducer/CustomerTestDriving/CreateNewCustomerTestFormReducer';
import { actionAddCustomerTestDrivingAPI } from '../../../Redux/Reducer/CustomerTestDriving/CustomerTestDrivingSliceReducer';

function InputForm() {

  let dispatch = useDispatch()
  const listCarCategory = useSelector((state)=> state.carCategorySlice.listCarCategory);

  // let items = "";
  // items = listCarCategory.map((carCategory, index)=> {
  //   return (
  //     <option value={carCategory.name}>{carCategory.name}</option>
  //   );
  // });
  // 
  

    // declare States to save data in Input TextField
  let [fullName, setFullName] = useState("");
  let [carType, setCarType] = useState("SUV");
  let [date, setDate] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");

   

  let handleCreateButton = () => {
    let customer = {
      FullName: fullName,
      CarType: carType,
      Date: date,
      PhoneNumber: phoneNumber
    }
    dispatch(actionAddCustomerTestDrivingAPI(customer))
    alert("Thêm mới thành công !");
    dispatch(closeCreateCustomerTestForm());
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
          <Label for="examplePrice"><b>Ngày lái thử</b></Label>
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
        {/* Button */}
        <Button color="primary" 
        onClick={()=>{handleCreateButton()}}
        >
          Tạo mới
        </Button>
        <Button color="danger" 
        // onClick={handleResetButton}
        >
          Reset
        </Button>
      </Form>
    </>
  )
}

export default InputForm