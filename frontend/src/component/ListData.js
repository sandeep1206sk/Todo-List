import { useEffect, useState } from 'react'
import AddData from "./AddData";

export default function ListData() {
  const [list,setList] = useState([]);
  const getData = async()=>{
    try{
        const resp = await fetch('http://localhost:5000/getdata');
        const data = await resp.json();
        setList(data)
    }catch(error){
        console.log(error);
    }
}
useEffect(()=>{
  getData();
},[])

  return (
    <div className=' container text-center bg-info align-items-center border border-danger border-5 mt-5'>
      <AddData getData={getData}/> 
      <div className='bg-info mb-5 mt-5  w-50 me-auto ms-auto pb-5'>
     {
        list.map((item)=>(
          <ul key = {item.plan}>
            <li className=' mt-1 fw-bold fs-4 text-start'>{item.plan}</li>
          </ul>
           ))
     }
      </div>
    </div>
  )
}


