import React,{useState,useEffect} from 'react'
import NavBar from '../NavBar/Admin/NavBar'
import axios from 'axios'
import{useNavigate  } from 'react-router-dom'
import usersStyles from '../../Styles/Users/SuperUsersDelete.module.css'
import {  useDispatch ,useSelector} from 'react-redux'

function AdminDelete({...navData2}) {
  const navigate =useNavigate()
  const backPath = useSelector((state) => state.backPath.path)

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
       <NavBar {...navData2}/>


          
  <div className={usersStyles.main}>


<div className={usersStyles.firstText}>
  Delete  User

</div>



<div className={usersStyles.secondText}>
   
   {users.map((el)=><div key={el.id} className={usersStyles.secondTextItems}> {capitilaize(el.name)} {capitilaize(el.lastName)} 
    <span >Role - {el.position}</span>
     <button  className={usersStyles.button} onClick={
     async ()=>{
        try{

          const  res =  await axios.delete(`${backPath}/api/admin/delete/${el.id}`,{withCredentials:"include"})
      
          // console.log(res);

   
      
      navigate('/dashboard/admin/users/single')
      setTimeout(() => {
        navigate('/dashboard/admin/delete')
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

export default AdminDelete
