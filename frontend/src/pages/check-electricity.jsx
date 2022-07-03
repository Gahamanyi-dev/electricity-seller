import React from 'react'
import Navbar from '../components/Navbar'

export default function CheckElectricity() {
  return (
    <div>
    <Navbar />
    <div className='d-flex flex-row mt-5 justify-content-between w-75 mx-auto'>

    <div className='p-2 w-100'>
    <form>
 <div class="form-group  ">
   <input type="text" class="form-control" placeholder='Meter' id="email"/>
 </div>
 

 <button type="submit" class="check btn btn-default bg-primary text-white w-50 mt-5">Check Details</button>
</form>
</div>

<div className='p-2 w-100' >
<label htmlFor="token" className='font-weight-bold'>YOUR METER : </label> <p className='text-primary'>123456</p>
<label htmlFor="token" className='font-weight-bold'>Token :</label> <p className='text-primary'>12345678</p>
<label htmlFor="token" className='font-weight-bold'>Remaining days :</label> <p className='text-primary'>12 Days</p>

</div>

   </div>
   </div>
  )
}
