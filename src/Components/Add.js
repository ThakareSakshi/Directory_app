import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import DirectoryDataContext from '../context/DirectoryDataContext';




const Add = ({setAddNew}) => {

    const [name,setName]=useState("");
    const [DOB,setDob]=useState(Date.now());
    const [mobileNumber,setMobileNumber]=useState("");
    const [Aadhaar,setAadhar]=useState("");
    const [age,setAge]=useState(0);
    const Directory=useContext(DirectoryDataContext)

    const OnSubmitData=()=>{
      const newPerson={
        name:name,
        dob:DOB,
        mobile:mobileNumber,
        aadhar:Aadhaar,
        age:age
      }
      Directory.setData([...Directory.data,newPerson ]);
      setAddNew(false);
        
    }
  return (
    <div className='p-2 w-full bg-blue-500'>
        <h1 className='text-white'>Fill below form for New Entry</h1>
         <table  className='w-full border-collapse border-2 border-white'>
        <tr className='w-full object-cover'>
        
       <td className='border-2  border-white'><input type="text" className='border-2 border-solid  text-center w-full p-1 ' placeholder='name' required value={name} onChange={(e)=>{setName(e.target.value)}}/></td>
       <td className='border-2  border-white'><input type="date" className='border-2 border-solid  text-center  w-full p-1 ' placeholder='DOB' required value={DOB} onChange={(e)=>{setDob(e.target.value)}}/></td>
       <td className='border-2  border-white'><input type="number" className='border-2 border-solid  text-center  w-full p-1' placeholder='aadhar number' min={100000000000} required value={Aadhaar} onChange={(e)=>{setAadhar(e.target.value)}}/></td>
       <td className='border-2  border-white'><input type="number" className='border-2 border-solid  text-center w-full p-1' placeholder='mo. number' min={10000000000} required value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}}/></td>
       <td className='border-2  border-white'><input type="number" className='border-2 border-solid  text-center w-full p-1' placeholder='age' readOnly="readonly"  value={age} onChange={(e)=>{setAge(e.target.value)}}/></td>
       <td className='border-2  border-white'><button type="submit" className='border-2 border-solid  text-center w-full p-1 bg-slate-300' value="save" onClick={OnSubmitData}>Save</button></td>
      
       </tr>
      </table>
    </div>
  )
}

export default Add
