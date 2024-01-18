import React, { useState } from 'react'
import DirectoryDataContext from './DirectoryDataContext'

const DirectoryData = (props) => {

    const [data,setData]=useState([]);
    
  return (
    <DirectoryDataContext.Provider value={{data,setData}}>
      {props.children}
    </DirectoryDataContext.Provider>
  )
}

export default DirectoryData
