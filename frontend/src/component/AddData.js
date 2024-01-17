import React, { useState } from 'react'

export default function AddData({getData}) {

  const[plan,setPlan]=useState('');
   
  const handleSubmit =async(e)=>{
        if(plan===""){
            alert('please enter plan')
        }else{
            e.preventDefault();
            console.log({plan});
            try {
                const resp =await fetch('http://localhost:5000/add',{
                method:'post',
                body:JSON.stringify({plan}),
                headers:{'content-type':'application/json'}
            })
            if(resp.status===200){
                getData();
                setPlan('');
                // alert('data added')
            }
            } catch (error) {
                console.log(error)
            }}
        }
 return (
    <div >
        <div className=' text-center bg-info align-items-center  w-75 m-auto '>
            <h1 className='pt-5 pb-3 text-danger'>Day Plan App</h1>
            <form action=""  onSubmit={handleSubmit} className="row  align-items-center">
                <div className="col-md-3 col-xs-12">
                    <h2  className="">Your Plan</h2>
                </div>
                <div className="col-md-6 col-xs-12">
                    <input id='plan' type="text" value={plan} onChange={(e)=>setPlan(e.target.value)}  className="form-control w-100" placeholder='Enter your plan'/>
                </div>
                <div className="col-md-3 col-xs-12">
                    <button type="submit" className="btn btn-warning fw-bold">Add Plan</button>
                </div>
            </form>
        </div> 
    </div>
  )
}

