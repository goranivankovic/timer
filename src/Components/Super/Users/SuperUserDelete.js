import React,{useState,useEffect} from 'react'
import NavBar from '../../NavBar/Super/NavBar'
import axios from 'axios'
import{useNavigate  } from 'react-router-dom'
import superUsersStyles from '../../../Styles/Users/SuperUsersDelete.module.css'

import { useSelector } from 'react-redux'

function SuperUserDelete({...navData}) {
  const backPath = useSelector((state) => state.backPath.path)
  const navigate =useNavigate()

  const [state, setState] = useState({}); 
  const[users,setUsers]=useState([])


  useEffect(() => {
  
getAdminData()

    return () => {
  

      setState({}); // This worked for me
     
    }
  }, [])
  


  
  async function getAdminData(){
    try{
      const res = await axios.get(`${backPath}/api/admin/super/users/korisnici`,{withCredentials:"include"})

      // console.log('====================================');
      // console.log(res.data);
      // console.log('====================================');
      
     setUsers(res.data.msg)

    
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


          
  <div className={superUsersStyles.main}>


<div className={superUsersStyles.firstText}>
  Delete  User

</div>



<div className={superUsersStyles.secondText}>
   
   {users.map((el)=><div key={el.id} className={superUsersStyles.secondTextItems}> {capitilaize(el.name)} {capitilaize(el.lastName)} 
    <span >Role - {el.position}</span>
     <button  className={superUsersStyles.button} onClick={
     async ()=>{
        try{

          const  res =  await axios.delete(`${backPath}/api/admin/delete/${el.id}`,{withCredentials:"include"})
      
          // console.log(res);

   
      
      navigate('/dashboard/admin/super/users/all')
      setTimeout(() => {
        navigate('/dashboard/admin/super/users/delete')
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

export default SuperUserDelete
