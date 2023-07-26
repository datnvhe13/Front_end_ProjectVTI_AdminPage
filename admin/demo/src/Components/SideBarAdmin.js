
import React from 'react'
import { Link } from 'react-router-dom'
import ModalCreateNewCar from './Car/CreateCar/ModalCreateNewCar'
import ModalUpdateCar from './Car/UpdateCar/ModalUpdateCar'

function SideBarAdmin() {
  return (
   <>
     <nav>
        {/* logo */}
        {/* <div className="logo">
          <i class="bx bx-menu menu-icon"></i>
          <span className="logo-name">BMW Thạch Thất</span>
        </div> */}

        {/* side bar */}
        <div className="sidebar">
          {/* logo */}
          <div className="logo">
            <i class="bx bx-menu menu-icon"></i>
            <span className="logo-name">ADMIN PAGE</span>
          </div>
          {/* sidebar-content */}
          <div className="sidebar-content">
            {/* ul */}
            <ul className="lists">
              {/* li */}
              <li className="list">
                <Link to="/dashboard" className="nav-link">
                  {/* home icon */}
                  <i class="bx bx-home-alt icon"></i>
                  {/*  */}
                  <span class="link">Dashboard</span>
                </Link>
              </li>
              {/* end li */}
              {/* li */}
              <li className="list">
                <Link to="/home" className="nav-link">
                  {/* home icon */}
                  <i class="bx bxs-car icon"></i>
                  {/*  */}
                  <span class="link">Sản phẩm</span>
                </Link>
              </li>
              {/* end li */}
              {/* li */}
              <li className="list">
                <Link to="/customerType2" className="nav-link">
                  {/* home icon */}
                  <i class="bx bx-male-female icon"></i>
                  {/*  */}
                  <span class="link">Khách hàng nhận báo giá</span>
                </Link>
              </li>
              {/* end li */}
               {/* li */}
               <li className="list">
                <Link to="/customerType1" className="nav-link">
                  {/* home icon */}
                  <i class="bx bx-male-female icon"></i>
                  {/*  */}
                  <span class="link"> Khách hàng lái thử xe</span>
                </Link>
              </li>
              {/* end li */}
              {/* li */}
              <li className="list">
                <Link to="/news" className="nav-link">
                  {/* home icon */}
                  <i class="bx bx-news icon"></i>
                  {/*  */}
                  <span class="link">Tin tức</span>
                </Link>
              </li>
              {/* end li */}

              {/* li */}
              <li className="list">
                <Link to="/revenue" className="nav-link">
                  {/* home icon */}
                  <i class="bx bx-bar-chart-alt-2 icon"></i>
                  {/*  */}
                  <span class="link">Doanh thu</span>
                </Link>
              </li>
              {/* end li */}
             
              {/* li */}
              <li className="list">
                <Link to="/message" className="nav-link">
                  {/* home icon */}
                  <i class="bx bx-chat icon"></i>
                  {/*  */}
                  <span class="link">Tin nhắn</span>
                </Link>
              </li>
              {/* end li */}
              {/* li */}
              <li className="list">
                <Link to="/statics" className="nav-link">
                  {/* home icon */}
                  <i class="bx bx-bar-chart-alt-2 icon"></i>
                  {/*  */}
                  <span class="link">Thống kê</span>
                </Link>
              </li>
              {/* end li */}

             
              {/* li */}
              <li className="list">
                <Link to="/Logout" className="nav-link">
                  {/* home icon */}
                  <i class="bx bx-log-out icon"></i>
                  {/*  */}
                  <a href="#">
                  <span class="link">Đăng xuất</span>
                  </a>
                 
                </Link>
              </li>
              {/* end li */}
            </ul>
            {/* end ul*/}
          </div>
        </div>
      </nav>

      <ModalCreateNewCar/>
      <ModalUpdateCar/>
   </>
  )
}

export default SideBarAdmin
