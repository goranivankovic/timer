import axios from 'axios';
import React,{useEffect,useState} from 'react'
import NavBar from '../../NavBar/Super/NavBar'
import {  useDispatch ,useSelector} from 'react-redux'

import superStyles from '../../../Styles/Super/SuperFind.module.css'
function SuperAdminSingle({...navData}) {
  const backPath = useSelector((state) => state.backPath.path)
  
  const [state, setState] = useState({});
  const[userId,setUserId]=useState('')
  const[name,setName] =useState('')
  const[lastName,setLastName] =useState('')
  const[role,setRole]=useState('')
  const[password,setPassword]=useState('')

  const[laz,setlaz] =useState(false)


  
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

async function findAdminSingle() {
  try{
    const res = await axios.get(`${backPath}/api/admin/super/users/single/${userId}`,{withCredentials:"include"})

   

    let input =document.getElementById('input')

   input.value=''

    setName(res.data.msg[0].name)
    setLastName(res.data.msg[0].lastName)
    setRole(res.data.msg[0].role)
    setPassword(res.data.msg[0].password)

    setlaz(true)

    


    setTimeout(() => {
      setlaz(false)

      setUserId('')
      
    }, 8000);
 

  }catch(err){
  
    console.log(err);

  

  }
  
} 



  return (
    <div>

     <NavBar  {...navData}/>

     
  <div className={superStyles.main}>


<div className={superStyles.firstText}>
  List of Admins

</div>



<div className={superStyles.secondText}>
   
   {admins.map((el)=><div key={el.id}><br></br>Id - {el.id} || Name - {capitilaize(el.name)} {capitilaize(el.lastName)} </div> )} 


</div>



<div className={superStyles.thredText}>
 Find Admin by Id number 


  <input type="text" className={superStyles.input} placeholder='example (22)' id='input'  onChange={(e)=>setUserId(e.target.value)} />

  <button className={superStyles.button} onClick={findAdminSingle}>Find Admin</button>

 {laz  ? <div>Name - {capitilaize(name)} {capitilaize(lastName)} || Role - {role} || Password - {password} </div> :"" }
 

</div>





</div>



    </div>
  )
}

export default SuperAdminSingle