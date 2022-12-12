import axios from 'axios';
import React,{useEffect,useState} from 'react'

import NavBar from '../../NavBar/Super/NavBar'


import superUsersStyles from '../../../Styles/Users/SuperUsersAll.module.css'

import {  useDispatch ,useSelector} from 'react-redux'

function SuperUserAll({...navData}) {
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

     <NavBar  {...navData}/>

     
  <div className={superUsersStyles.main}>


<div className={superUsersStyles.firstText}>
  All  Users

</div>



<div className={superUsersStyles.secondText}>
   
   {users.map((el)=><div key={el.id}><br></br> Name - {capitilaize(el.name)} {capitilaize(el.lastName)} |
    Position - {el.position} | Gender - {el.gender} | Join - {el.yearsActive.slice(0,10)} 
    | Paycheck - {el.paycheck+' din'} | Overtime - {el.overTime+' din'}
    </div> )} 


</div>








</div>




    </div>
  )
}

export default SuperUserAll