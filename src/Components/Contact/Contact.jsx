import React from 'react'

export default function Contacts() {
  return <>
  <div className="contact mb-lg-5">
<div className=' text-center'>
<h1 className=' justify-content-center  d-flex mb-5'>Contact Me</h1>
  <i className="fa-solid fa-star mb-lg-5 "></i>

</div>
  


  <div className="inputs m-auto w-50">
    <input className=" form-control border-0 border-bottom mb-5 text-muted" type="text" placeholder="Name" />
  <input className="form-control border-0 border-whiteer border-bottom mb-5" type="text" placeholder="Email Address" />
  <input className="form-control border-0 border-bottom mb-5" type="text" placeholder="Phone Number" />
  <textarea className="form-control border-0 border-bottom pb-lg-5" type="text" placeholder="Message" ></textarea>
  <button className='btn btn-lg btn-success mt-4 p-2'>Send</button>

  </div>

  </div>



  </>
}
