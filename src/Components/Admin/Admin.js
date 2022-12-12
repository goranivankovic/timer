import React, { useEffect, useState } from 'react'

import axios from 'axios'

import{useNavigate  } from 'react-router-dom'


import {  useDispatch ,useSelector} from 'react-redux'

import { trutheFunctionAdmin, lieFunctionAdmin } from '../../ReduxActions/adminProtect'


import superStyles from '../../Styles/Super/Super.module.css'


import NavBar from '../NavBar/Admin/NavBar'


function Admin({...navData2}) {
  const backPath = useSelector((state) => state.backPath.path)

  const dispatch =useDispatch()
  const navigate =useNavigate()
  
  const [state, setState] = useState({});


  const[name,setName]=useState('')
  const[lastName,setLastName]=useState('')



  
  async function getAdminData(){
    try{
      const res = await axios.get(`${backPath}/api/admin/super/login/cookie`,{withCredentials:"include"})

     
      // console.log(res.data);
      setName(res.data.msg[2])
      setLastName(res.data.msg[3])
    

    }catch(error){
      console.error(error)

    }
  }





  useEffect(() => {
    getAdminData()
    return () => {
      setState({}); // This worked for me
    };
}, []);

  
  
  return (
    <div>
      
  
      <NavBar  {...navData2}/>

      
  <div className={superStyles.main}>


<div className={superStyles.firstText}>
  Welcome  Admin

</div>



<div className={superStyles.secondText}>
   { name } {lastName}

</div>








</div>
      


    
    </div>
  )
}

export default Admin;