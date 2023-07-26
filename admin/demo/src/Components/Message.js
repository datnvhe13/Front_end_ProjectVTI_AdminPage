import React from "react";

function Message() {
  return (
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
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div
        class="row"
        style={{ border: "1px solid rgb(206, 201, 201)", padding: "12px 6px" }}
      >
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="panel panel-default">
            <div class="panel-body">
              <h3>
                <b style={{ color: "green" }}>
                  TIN NHẮN
                </b>
              </h3>
              {/* <!-- button --> */}
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#myModal"
              >
                Thêm mới
              </button>
              {/* <!-- table display list product --> */}
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Tên khách hàng</th>
                    <th>Ngày gửi</th>
                    <th>Nội dung</th>
                    <th>Số điện thoại</th>
                    <th> sửa</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tbody id="tbProductTable">
                  <tr>
                    <td>1</td>
                    <td>Hoàng Quốc Việt</td>
                    <td>18/02/2023</td>
                    <td>Hi Admin, Admin cho mình hỏi là shop có chương trình mua trả góp không ạ !</td>
                    <td>098525214656</td>
                    <td>
                      <button type="button" class="btn btn-primary">
                        Sửa
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-danger">
                        Xóa
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Lê Dũng</td>
                    <td>22/02/2023</td>
                    <td>Hi Admin, chiếc Bmw X5 hôm trước mình hỏi Showrom đã nhập xe về chưa ạ ?</td>
                    <td>098525214656</td>
                    <td>
                      <button type="button" class="btn btn-primary">
                        Sửa
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-danger">
                        Xóa
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Lưu Ly</td>
                    <td>28/03/2023</td>
                    <td>Showroom có làm việc vào thứ 7 không ạ !</td>
                    <td>098525214656</td>
                    <td>
                      <button type="button" class="btn btn-primary">
                        Sửa
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-danger">
                        Xóa
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
