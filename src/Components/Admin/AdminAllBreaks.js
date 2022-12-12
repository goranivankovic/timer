import axios from 'axios';
import React,{useEffect,useState} from 'react'
import NavBar from '../NavBar/Admin/NavBar'
import {  useDispatch ,useSelector} from 'react-redux'

import usersStyles from '../../Styles/Users/SuperUserAllBreaks.module.css'

function AdminAllBreaks({...navData2}) {
  const backPath = useSelector((state) => state.backPath.path)

 let stoEnter=0
 let stoExit=0

 let stoPause=0
 let stoEndPause=0
 

  const [state, setState] = useState({});

  const[userId,setUserId]=useState('')
 


  const[name,setName] =useState('')
  const[lastName,setLastName] =useState('')



  const[startTime,setStartTime]=useState([])
  const[endTime,setEndTime]=useState('')

  const[startPause,setStartPause]=useState('')
  const[endPause,setEndPause]=useState('')



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

    setStartPause(res.data.msg[0].startPause)

    setEndPause(res.data.msg[0].endPause)




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


{!laz ?
<div className={usersStyles.thredText}>
 Find User Time by Id number 


  <input type="text" className={usersStyles.input} placeholder='example (1)' id='input'  onChange={(e)=>setUserId(e.target.value)} />

  <button className={usersStyles.button} onClick={findAdminSingle}>Find User</button>
 

</div>

:""}


{laz  ? 

<div className={usersStyles.fourText}>


<div><div className={usersStyles.enter} >Enter Time</div>   {startTime.map((e)=> <div key={Math.random()}> <br></br>{stoEnter++}. {e} </div> )}</div> 
 

  
<div><div className={usersStyles.enter} >Start Pause</div>   {startPause.map((e)=> <div key={Math.random()}> <br></br>{stoPause++}. {e} </div> )}</div> 
  <div><div className={usersStyles.enter} >End Pause</div>   {endPause.map((e)=> <div key={Math.random()}> <br></br> {stoEndPause++}. {e}</div> )}</div> 

  <div><div className={usersStyles.enter} >Exit Time</div>   {endTime.map((e)=> <div key={Math.random()}> <br></br> {stoExit++}. {e}</div> )}</div> 

  </div>

 :"" }



</div>




    </div>
  )
}

export default AdminAllBreaks