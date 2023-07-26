import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeCreateForm } from "../../../Redux/Reducer/CreateNewFormReducer";
import { actionAddCarAPI } from "../../../Redux/Reducer/CarSliceReducer";

function InputForm() {
  // 
  let dispatch = useDispatch();
  // 
  const listCarCategory = useSelector(
    (state) => state.carCategorySlice.listCarCategory
  );

  let items = "";
  items = listCarCategory.map((carCategory, index) => {
    return <option value={carCategory.name}>{carCategory.name}</option>;
  });

  // declare States to save data in Input TextField
  let [carName, setCarName] = useState("");
  let [price, setPrice] = useState("");
  let [description, setDescription] = useState("");
  let [desDetail, setDesDetail] = useState("");
  let [imagePath, setImagePath] = useState("");
  let [year, setYear] = useState("2018");
  let [carType, setCarType] = useState("SUV");

  // function to get image link
  function getImageName(imageLink) {
    // transfer path to array
    var itemArray = imageLink.split("\\");
    // get last element
    var imageName = itemArray[itemArray.length - 1];
    return imageName;
  }

  // add new function
  let handleCreateButton = () => {
    let car_new = {
      name: carName,
      price: price,
      info: description,
      detail: desDetail,
      image: getImageName(imagePath),
      year: year,
      category: carType,
    };
    dispatch(actionAddCarAPI(car_new))
    // console.log("car_new : ", car_new);
    alert("Add successfully !")
    dispatch(closeCreateForm())
  };

  return (
    <>
      <Form>
        {/* CarName */}
        <FormGroup>
          <Label for="exampleName">
            <b>Tên xe</b>
          </Label>
          <Input
            id="Name"
            name="Name"
            placeholder="Nhập tên xe"
            type="text"
            value={carName}
            onChange={(event) => {
              setCarName(event.target.value);
            }}
          />
        </FormGroup>
        {/* Price */}
        <FormGroup>
          <Label for="examplePrice">
            <b>Giá</b>
          </Label>
          <Input
            id="Price"
            name="Price"
            placeholder="Nhập giá xe"
            type="number"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </FormGroup>
        {/* Description */}
        <FormGroup>
          <Label for="exampleDescription">
            <b>Mô tả</b>
          </Label>{" "}
          <br />
          <textarea
            style={{ width: "100%", height: "80px" }}
            id="Description"
            name="Description"
            placeholder="Nhập thông tin mô tả"
            type="textArea"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </FormGroup>
        {/* Description detail */}
        <FormGroup>
          <Label for="exampleDescriptionDetail">
            <b>Mô tả chi tiết</b>
          </Label>{" "}
          <br />
          <textarea
            style={{ width: "100%", height: "80px" }}
            id="DescriptionDetail"
            name="DescriptionDetail"
            placeholder="Nhập thông tin mô tả chi tiết"
            type="textArea"
            value={desDetail}
            onChange={(event) => {
              setDesDetail(event.target.value);
            }}
          />
        </FormGroup>
        {/* Choose file */}
        <FormGroup>
          <Label for="exampleSelect">
            <b>Chọn ảnh</b>
          </Label>
          <Input
            id="ImageSelect"
            name="Image"
            type="file"
            value={imagePath}
            onChange={(event) => {
              setImagePath(event.target.value);
            }}
          ></Input>
        </FormGroup>

        {/* Year */}
        <FormGroup>
          <Label for="exampleYear">
            <b>Năm sản xuất</b>
          </Label>
          <Input
            id="Year"
            name="Year"
            placeholder="Nhập năm sản xuất"
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
            {items}
          </Input>
        </FormGroup>

        {/* Button */}
        <Button
          color="primary"
          onClick={() => {
            handleCreateButton();
          }}
        >
          Thêm mới
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
