import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { actionUpdateCarAPI } from '../../../Redux/Reducer/CarSliceReducer';
import { closeUpdateForm } from '../../../Redux/Reducer/CreateUpdateFormReducer';

function InputUpdateForm(props) {
  let { car_Update } = props;
  console.log('car_Update props : ', car_Update);
  const listCarCategory = useSelector((state)=> state.carCategorySlice.listCarCategory);

  let items = "";
  items = listCarCategory.map((carCategory, index)=> {
    return (
      <option value={carCategory.name}>{carCategory.name}</option>
    );
  });

  let [fullName, setFullName] = useState(car_Update.name);
  let [price, setPrice] = useState(car_Update.price);
  let [description, setDescription] = useState(car_Update.information);
  let [descripDetail, setDescripDetail] = useState(car_Update.detail);
  let [imagePath, setImagePath] = useState("");
  let [year, setYear] = useState(car_Update.year);
  let [carType, setCarType] = useState(car_Update.category);

  // function to get image link
  function getImageName(imageLink) {
    // transfer path to array
    var itemArray = imageLink.split("\\");
    // get last element
    var imageName = itemArray[itemArray.length - 1];
    return imageName;
  }

  let dispatch = useDispatch();

  let handleUpdateButton = ()=> {
    let carUpdate = {
      id: car_Update.id, 
      name: fullName,
      price: price,
      information: description,
      detail: descripDetail,
      image: getImageName(imagePath),
      year: year,
      category: carType,
    };
    console.log('car_Update : ', carUpdate);
    // console.log('car_Update_ID : ', car_Update.id);
    dispatch(actionUpdateCarAPI(carUpdate))
    // console.log("car_new : ", car_new);
    // alert("Chỉnh sửa successfully !")
    dispatch(closeUpdateForm())
  }



  return (
    <>
    <Form>
      {/* CarName */}
      <FormGroup>
        <Label for="exampleName"><b>Tên xe</b></Label>
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
      {/* Price */}
      <FormGroup>
        <Label for="examplePrice"><b>Giá</b></Label>
        <Input
          id="Price"
          name="Price"
          type="text"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
      </FormGroup>
      {/* Description */}
      <FormGroup>
        <Label for="exampleDescription"><b>Mô tả</b></Label> <br/>
        <textarea
        style={{width: "100%", height: "80px"}}
          id="Description"
          name="Description"
          type="textArea"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </FormGroup>
      {/* Description detail */}
      <FormGroup>
        <Label for="exampleDescriptionDetail"><b>Mô tả chi tiết</b></Label> <br/>
        <textarea
        style={{width: "100%", height: "80px"}}
          id="DescriptionDetail"
          name="DescriptionDetail"
          type="textArea"
          value={descripDetail}
          onChange={(event) => {
            setDescripDetail(event.target.value);
          }}
        />
      </FormGroup>
       {/* Choose file */}
       <FormGroup>
        <Label for="exampleSelect"><b>Chọn ảnh</b></Label>
        <Input
          id="ImageSelect"
          name="Image"
          type="file"
          value={imagePath}
          onChange={(event) => {
            setImagePath(event.target.value);
          }}
        >
          
        </Input>
      </FormGroup>

      {/* Year */}
      <FormGroup>
        <Label for="exampleYear"><b>Năm sản xuất</b></Label>
        <Input
          id="Year"
          name="Year"
          type="select"
          value={year}
          onChange={(event) => {
            setYear(event.target.value);
          }}
        >
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </Input>
      </FormGroup>

      {/* CarType */}
      <FormGroup>
        <Label for="exampleSelect"><b>Chọn loại xe</b> </Label>
        <Input
          id="CarTypeSelect"
          name="CarType"
          type="select"
          value={carType}
          onChange={(event) => {
            setCarType(event.target.value);
          }}
        >
          {items}
        </Input>
      </FormGroup>
     
      {/* Button */}
      <Button color="primary" 
      onClick={()=>{handleUpdateButton()}}
      >
        Sửa
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

export default InputUpdateForm