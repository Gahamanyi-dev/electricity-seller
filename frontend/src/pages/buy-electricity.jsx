import React from 'react'

export default function BuyElectricity() {
  return (
    <div className='container mt-5'>
     <div className='col-6'>
     <form>
  <div class="form-group  ">
    <input type="email" class="form-control" placeholder='Meter' id="email"/>
  </div>
  <div class="form-group">

    <input type="password" class="form-control" placeholder='Amount' id="pwd"/>
  </div>
 
  <button type="submit" class="btn btn-default bg-primary text-white w-50 mt-5">Buy Electricity</button>
</form>
</div>
<div className='col-6 mt-5 input-group'>
  <label htmlFor="token" className='font-weight-bold'>YOUR TOKEN : </label> <p className='text-primary'>123456</p>
</div>
    </div>
  )
}
