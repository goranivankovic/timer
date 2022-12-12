import React,{useState,useEffect} from 'react'
import NavBar from '../../NavBar/Super/NavBar'
import axios from 'axios'
import{useNavigate  } from 'react-router-dom'
import superStyles from '../../../Styles/Super/SuperDelete.module.css'

import {  useDispatch ,useSelector} from 'react-redux'

function SuperAdminDelete({...navData}) {
  const backPath = useSelector((state) => state.backPath.path)

  const navigate =useNavigate()

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
       <NavBar {...navData}/>


          
  <div className={superStyles.main}>


<div className={superStyles.firstText}>
  Delete  Admin

</div>



<div className={superStyles.secondText}>
   
   {admins.map((el)=><div key={el.id} className={superStyles.secondTextItems}> {capitilaize(el.name)} {capitilaize(el.lastName)} 
    <span >Role - {el.role}</span>
     <button  className={superStyles.button} onClick={
     async ()=>{
        try{

          const  res =  await axios.delete(`${backPath}/api/admin/super/delete/${el.id}`,{withCredentials:"include"})
      
          // console.log(res);

   
      
      navigate('/dashboard/admin/super')
      setTimeout(() => {
        navigate('/dashboard/admin/super/delete')
      }, 1000);
      
        }catch(err){
          console.log(err);
        }
      
      }

     }>Delete</button> </div> )} 


</div>


</div>




    </div>
  )
}

export default SuperAdminDelete