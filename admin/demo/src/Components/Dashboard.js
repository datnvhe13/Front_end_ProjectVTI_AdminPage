import React from 'react'

function Dashboard() {
  return (
    <>
    <div className='container'>
      {/* image1 */}
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <img
          style={{width: "930px"}}
          src="Asset/dashboard1.JPG" class="img-responsive" alt="Image"/>
        </div>
      </div>
       {/* image2 */}
       <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <img
           style={{width: "930px"}}
          src="Asset/dashboard2.JPG" class="img-responsive" alt="Image"/>
        </div>
      </div>
      {/* image3 */}
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <img
           style={{width: "930px"}}
          src="Asset/dashboard3.JPG" class="img-responsive" alt="Image"/>
        </div>
      </div>


    </div>
    
    </>
  )
}

export default Dashboard