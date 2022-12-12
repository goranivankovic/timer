import React, { useEffect, useState } from 'react'

import axios from 'axios'


import NavBar from '../../NavBar/Super/NavBar'


import superStyles from '../../../Styles/Super/Super.module.css'


import {  useDispatch ,useSelector} from 'react-redux'


function Super({...navData}) {

  const backPath = useSelector((state) => state.backPath.path)


  const [state, setState] = useState({});
  const[name,setName]=useState()
  const[lastName,setLastName]=useState()

  
  useEffect(async () => {

    //Name and Lastname of Super Admin
 getSuperAdminData()
     return () => {

      setState({}); // This worked for me
   
    }


  }, [])
  




//Super Admin Data

  async function getSuperAdminData(){
    try{
      const res = await axios.get(`${backPath}/api/admin/super/login/cookie`,{withCredentials:"include"})


// console.log(res);

     setName(res.data.msg[2])
     setLastName(res.data.msg[3])
    

    }catch(error){
      console.error(error)

    }
  }





  
  return (
    <div>

    





  
  <NavBar  {...navData}/>


  <div className={superStyles.main}>


    <div className={superStyles.firstText}>
      Welcome Super Admin

    </div>



    <div className={superStyles.secondText}>
       { name } {lastName}

    </div>








  </div>




   


    </div>
  )
}

export default Super;