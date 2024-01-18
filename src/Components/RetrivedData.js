import React, { useState } from 'react'
import { useContext } from 'react'
import DirectoryDataContext from '../context/DirectoryDataContext'

const RetrivedData = () => {
    const Directory=useContext(DirectoryDataContext);
    const [inputText,setInputText]=useState("");
    const [personData,setpersonData]=useState([]);
    

    const FindData=()=>{
       const data=Directory.data.filter((person)=>person.mobile==inputText);
       setpersonData(data);
       console.log()
    }
  return (
    <div className='p-4'>
        <input type="number" className='p-2 border-2 border-solid border-gray-600 rounded w-1/2' placeholder='Enter mobile number' min={10000000000} value={inputText} onChange={(e)=>{setInputText(e.target.value)}}/>
        <button className='py-2 px-4 m-2 bg-sky-600 text-white rounded' onClick={FindData}> Find </button>
        { 
        personData.length>0?<div className='p-2 border-2 border-gray-500 w-fit' >
            <p>name:{personData[0].name}</p>
            <p>DOB:{personData[0].dob}</p>
            <p>Aadhar Number:{personData[0].aadhar}</p>
            <p>Mobile Number:{personData[0].mobile}</p>
            <p>Age:{personData[0].age}</p>
        </div>:<div>no data</div>
        }
      
    </div>

  )
}

export default RetrivedData
