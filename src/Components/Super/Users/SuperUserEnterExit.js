import axios from 'axios';
import React,{useEffect,useState} from 'react'
import NavBar from '../../NavBar/Super/NavBar'

import {useSelector} from 'react-redux'

import superUsersStyles from '../../../Styles/Users/SuperEnterExit.module.css'
function SuperUserEnterExit({...navData}) {
  const backPath = useSelector((state) => state.backPath.path)

 let stoEnter=0
 let stoExit=0

  const [state, setState] = useState({});

  const[userId,setUserId]=useState('')
 


  const[name,setName] =useState('')
  const[lastName,setLastName] =useState('')



  const[startTime,setStartTime]=useState([])
  const[endTime,setEndTime]=useState('')
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

    setStartTime(res.data.msg[0].startTime)

    setEndTime(res.data.msg[0].endTime)



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

     <NavBar  {...navData}/>

     
  <div className={superUsersStyles.main}>


<div className={superUsersStyles.firstText}>
  List of Users

</div>



<div className={superUsersStyles.secondText}>
   
   {users.map((el)=><div key={el.id}><br></br>Id - {el.id} || Name - {capitilaize(el.name)} {capitilaize(el.lastName)} </div> )} 


</div>


{!laz ?
<div className={superUsersStyles.thredText}>
 Find User Time by Id number 


  <input type="text" className={superUsersStyles.input} placeholder='example (1)' id='input'  onChange={(e)=>setUserId(e.target.value)} />

  <button className={superUsersStyles.button} onClick={findAdminSingle}>Find User</button>
 

</div>

:""}


{laz  ? 

<div className={superUsersStyles.fourText}>


<div><div className={superUsersStyles.enter} >Enter Time</div>   {startTime.map((e)=> <div key={Math.random()}> <br></br>{stoEnter++}. {e} </div> )}</div> 
  <div><div className={superUsersStyles.enter} >Exit Time</div>   {endTime.map((e)=> <div key={Math.random()}> <br></br> {stoExit++}. {e}</div> )}</div> 

  </div>

 :"" }



</div>




    </div>
  )
}

export default SuperUserEnterExit