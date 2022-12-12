import axios from 'axios';
import React,{useEffect,useState} from 'react'
import NavBar from '../NavBar/Admin/NavBar'
import {  useDispatch ,useSelector} from 'react-redux'
import usersStyles from '../../Styles/Users/SuperUsersFind.module.css'

function AdminSingle({...navData2}) {
  const backPath = useSelector((state) => state.backPath.path)

  const [state, setState] = useState({});

  const[userId,setUserId]=useState('')


  const[name,setName] =useState('')
  const[lastName,setLastName] =useState('')
  const[role,setRole]=useState('')
  const[position,setPosition]=useState('')
  const[gender,setGender]=useState('')
  const[paycheck,setPaycheck]=useState('')
  const[overTime,setOverTime]=useState('')



  const[laz,setlaz] =useState(false)
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

async function findAdminSingle() {
  try{
    const res = await axios.get(`${backPath}/api/admin/users/single/${userId}`,{withCredentials:"include"})

   
// console.log('====================================');
// console.log(res);
// console.log('====================================');
    let input =document.getElementById('input')

   input.value=''

    setName(res.data.msg[0].name)
    setLastName(res.data.msg[0].lastName)
    setRole(res.data.msg[0].role)
    setPosition(res.data.msg[0].position)
    setGender(res.data.msg[0].gender)
    setPaycheck(res.data.msg[0].paycheck)
    setOverTime(res.data.msg[0].overTime)

    setlaz(true)

    


    setTimeout(() => {
      // setlaz(false)

      setUserId('')
      
    }, 9000);
 

  }catch(err){
  
    console.log(err);

  

  }
  
} 



  return (
    <div>

     <NavBar  {...navData2}/>

     
  <div className={usersStyles.main}>


<div className={usersStyles.firstText}>
  List of Users

</div>



<div className={usersStyles.secondText}>
   
   {users.map((el)=><div key={el.id}><br></br>Id - {el.id} || Name - {capitilaize(el.name)} {capitilaize(el.lastName)} </div> )} 


</div>



<div className={usersStyles.thredText}>
 Find User by Id number 


  <input type="text" className={usersStyles.input} placeholder='example (1)' id='input'  onChange={(e)=>setUserId(e.target.value)} />

  <button className={usersStyles.button} onClick={findAdminSingle}>Find User</button>

 {laz  ? <div>Name - {capitilaize(name)} {capitilaize(lastName)} 
 | Role - {role} | Position - {position} | Gender - {gender} | Paycheck - {paycheck+' din'} | Overtime - {overTime+' din'}</div> :"" }
 

</div>





</div>



</div>
  )
}

export default AdminSingle