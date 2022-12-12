import React, { useEffect, useState } from 'react'
import{Navigate,Outlet} from 'react-router-dom'
import axios from 'axios'


import{useNavigate  } from 'react-router-dom'


import {  useDispatch ,useSelector} from 'react-redux'


// Admin react-redux function
import { trutheFunctionAdmin, lieFunctionAdmin } from '../../../ReduxActions/adminProtect'


//Super Admin react-redux function
import { trutheFunctionSuper, lieFunctionSuper } from '../../../ReduxActions/superProtect'


function SuperAdminProtectRoutes  () {
  const backPath = useSelector((state) => state.backPath.path)
  const [state, setState] = useState({});

  useEffect(() => {

  getSuperData()
    return () => {
      setState({});
    
    }
  }, [])
  


  
  
const dispatch =useDispatch()
const navigate =useNavigate()


  async function getSuperData(){
    try{
    


      const res = await axios.get(`${backPath}/api/admin/super/login/cookie`,{withCredentials:"include"})

// console.log(res.data.msg);
      
  



  if(res.data.msg[0] == true && res.data.msg[4] == 'admin' ){

    dispatch(trutheFunctionAdmin())
    navigate('/dashboard/admin')


  }else if (res.data.msg[0] == true && res.data.msg[4] == 'super') {
 


    dispatch(trutheFunctionSuper())

    navigate('/dashboard/admin/super')
    
  }else{

    navigate('/login/admin')
 
   }
 

 

    }catch(error){
      console.error(error)

    }
  }

 









const superVar = useSelector((state) => state.super.superVar)



    
  return (
    superVar ? <Outlet/> : <Navigate to='/login/admin'/>
  )
}

export default SuperAdminProtectRoutes; 