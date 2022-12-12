import axios from 'axios';
import React,{useEffect,useState} from 'react'

import NavBar from '../../NavBar/Super/NavBar'


import superStyles from '../../../Styles/Super/SuperAll.module.css'
import {  useDispatch ,useSelector} from 'react-redux'


function SuperAdminAll({...navData}) {
  const backPath = useSelector((state) => state.backPath.path)


  const [state, setState] = useState({});

  
  const[admins,setAdmins]=useState([])

  useEffect(() => {
  
getAdminData()

    return () => {
  

      setState({}); // This worked for me
     
    }
  }, [])
  


  
  async function getAdminData(){
    try{
      const res = await axios.get(`${backPath}/api/admin/super/users`,{withCredentials:"include"})

      // console.log('====================================');
      // console.log(res.data);
      // console.log('====================================');
      
     setAdmins(res.data.msg)

    
    }catch(error){
      console.error(error)

    }
  }

   
const capitilaize=(c)=>{

 return c.charAt(0).toUpperCase() + c.slice(1).toLowerCase();

}



  return (
    <div>

     <NavBar  {...navData}/>

     
  <div className={superStyles.main}>


<div className={superStyles.firstText}>
  All  Admins

</div>



<div className={superStyles.secondText}>
   
   {admins.map((el)=><div key={el.id}><br></br>Id - {el.id} || Name - {capitilaize(el.name)} {capitilaize(el.lastName)} ||
    Role - <span style={{textDecoration:"underline"}}>{el.role}</span>  </div> )} 


</div>








</div>





    </div>
  )
}

export default SuperAdminAll