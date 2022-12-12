import React, { useEffect, useState } from 'react'
import{Await, Navigate,Outlet, useNavigate} from 'react-router-dom'

import axios from 'axios'

import {  useDispatch ,useSelector  } from 'react-redux'
import { trutheFunction, lieFunction } from '../../ReduxActions/userProtect'








function UserProtectRoutes () {
  const backPath = useSelector((state) => state.backPath.path)


  
const dispatch =useDispatch()
const navigate =useNavigate()


  async function getData(){
    try{
    


      const res = await axios.get(`${backPath}/api/user/cookie`,{withCredentials:"include"})


      
  
if (res.data.msg[0] != true) {


  navigate('/')

}else if (res.data.msg[0] == true) {
  


  navigate('/dashboard')
    dispatch(trutheFunction())
    

 

}else{
  navigate('/')
}



 

    }catch(error){
      console.error(error)

    }
  }

 
useEffect(() => {


  return () => {
   
    getData()
  }
}, [])




  let userVar = useSelector((state) => state.user.userVar)

  
    
  return (

    
    userVar ? <Outlet/> : <Navigate to='/'/> 

  )
}

export default UserProtectRoutes;