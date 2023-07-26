import React, { useEffect, useState } from "react";
import ModalCreateCustomerTestDriving from "./CustomerTestDriving/CreateCustomer/ModalCreateCustomerTestDriving";
import { useDispatch, useSelector } from "react-redux";
import { showCreateCustomerTestForm } from "../Redux/Reducer/CustomerTestDriving/CreateNewCustomerTestFormReducer";
import ModalUpdateCustomerTestDriving from "./CustomerTestDriving/UpdateCustomer/ModalUpdateCustomerTestDriving";
import { actionDeleteCustomerTestDrivingAPI, actionGetListCustomerTestDrivingAPI } from "../Redux/Reducer/CustomerTestDriving/CustomerTestDrivingSliceReducer";
import { showUpdateCustomerTestDrivingForm } from "../Redux/Reducer/CustomerTestDriving/CreateUpdateCustomerFormReducer";

function CustomerAdminPage() {

  let dispatch = useDispatch();


  useEffect(()=>{
    dispatch(actionGetListCustomerTestDrivingAPI())
  }, [])


  let onHandleDelete = (id_delete)=> {
    dispatch(actionDeleteCustomerTestDrivingAPI(id_delete))
    alert("Delete successfully !")
    dispatch(actionGetListCustomerTestDrivingAPI())
  }


  let listCustomer = useSelector((state)=> state.customerTestDriving.listCustomer)
  let items = "";
  items = listCustomer.map((customer, index) => {
    return (
      <tr>
        <td>{index}</td>
        <td>{customer.FullName}</td>
        <td>{customer.CarType}</td>
        <td>{customer.Date}</td>
        <td>{customer.PhoneNumber}</td>
        <td>
          <button 
          onClick={()=>dispatch(showUpdateCustomerTestDrivingForm(customer))}
          type="button" class="btn btn-primary">
            Sửa
          </button>
        </td>
        <td>
          <button
           onClick={()=> onHandleDelete(customer.id)}
          type="button" class="btn btn-danger">
            Xóa
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="container">
        {/* Search */}
        <div
          class="row"
          style={{
            border: "1px solid rgb(206, 201, 201)",
            padding: "12px 6px",
            marginBottom: "16px",
          }}
        >
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="panel panel-default">
              <div class="panel-body" style={{ display: "flex" }}>
                {/* <!-- input to search --> */}
                <div
                  class="col-xs-8 col-sm-8 col-md-8 col-lg-8"
                  style={{ margin: "0 10px" }}
                >
                  <input
                    type="text"
                    id="inputSearch"
                    class="form-control"
                    value=""
                  />
                </div>
                {/* <!-- search button --> */}
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onclick="handleToSearch()"
                  >
                    Tìm kiếm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* content */}
        <div
          class="row"
          style={{
            // border: "1px solid rgb(206, 201, 201)",
            padding: "12px 6px",
          }}
        >
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="panel panel-default">
              <div class="panel-body">
                <h3>
                  <b style={{ color: "green" }}>
                    DANH SÁCH KHÁCH HÀNG ĐĂNG KÝ LÁI THỬ
                  </b>
                </h3>
                {/* <!-- button --> */}
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={()=>dispatch(showCreateCustomerTestForm())}
                >
                  Thêm mới
                </button>
                {/* <!-- table display list product --> */}
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Stt</th>
                      <th>Họ và tên</th>
                      <th>Loại xe</th>
                      <th>Ngày lái thử</th>
                      <th>Số điện thoại</th>
                      <th>Sửa</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>
                  <tbody id="tbProductTable">{items}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalCreateCustomerTestDriving />
      <ModalUpdateCustomerTestDriving/>
    </>
  );
}

export default CustomerAdminPage;
