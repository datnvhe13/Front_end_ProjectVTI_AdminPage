import React from 'react'

function News() {
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
          padding: "12px 6px" }}
      >
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="panel panel-default">
            <div class="panel-body">
              <h3>
                <b style={{ color: "green" }}>
                  TIN TỨC
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
                    <th>Tiêu đề</th>
                    <th>Mô tả</th>
                    <th>Chi tiết</th>
                    <th>Ngày đăng</th>
                    <th>Chỉnh sửa</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tbody id="tbProductTable">
                  <tr>
                    <td>1</td>
                    <td>Bmw X7 ra mắt 2023</td>
                    <td>Động cơ/Dung tích (cc): I6/2998</td>
                    <td>Thời gian tăng tốc 0-100 km/h (giây): 5,5</td>
                    <td>12/02/2023</td>
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
                    <td>Bmw X5-sport ra mắt 2023</td>
                    <td>Động cơ/Dung tích (cc): I6/2998</td>
                    <td>Thời gian tăng tốc 0-100 km/h (giây): 5,5</td>
                    <td>12/02/2023</td>
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
                    <td>3</td>
                    <td>Bmw X3 thiết kế mới</td>
                    <td>Động cơ/Dung tích (cc): I6/2998</td>
                    <td>Thời gian tăng tốc 0-100 km/h (giây): 5,5</td>
                    <td>12/02/2023</td>
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
  )
}

export default News