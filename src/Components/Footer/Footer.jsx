import React from 'react'

export default function Footer() {
  return <>
  <div className="footer text-center text-white d-flex justify-content-around p-5">
  <div>
<h3 className='mb-4'>LOCATION</h3>
<p>2215 John Daniel Drive</p>
<p>Clark, MO 65243</p>
</div>
<div>
<h2 className='mb-lg-5'>AROUND THE WEB</h2>
<div className="icons d-flex justify-content-around m-lg-5.">
    <div className='round'>
        <i class="fa-brands fa-facebook-f"></i>
</div>
<div className="round">
<i class="fa-brands fa-twitter"></i>

</div>
<div className="round">
<i class="fa-brands fa-linkedin-in"></i>
</div>
<div className="round">
<i class="fa-brands fa-instagram"></i></div>

</div>

</div>
<div>
<h3 className='mb-4'>ABOUT FREELANCER</h3>
<p>Freelance is a free to use, MIT</p>
<p>licensed Bootstrap theme created by</p>
<p>Route</p>
</div>

  </div>
<div className="copyright text-center">
    <p className='p-4 mb-0'>Copyright © Your Website 2021</p>
</div>

  </>
}
