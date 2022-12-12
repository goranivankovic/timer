

import React,{useState,useEffect} from 'react'
import NavBar from '../NavBar/Admin/NavBar'
import axios from 'axios'
import{useNavigate  } from 'react-router-dom'
import usersStyles from '../../Styles/Users/SuperUsersCreate.module.css'
import {  useDispatch ,useSelector} from 'react-redux'

function AdminCreate({...navData2}) {
  const navigate =useNavigate()
  const backPath = useSelector((state) => state.backPath.path)

  const [state, setState] = useState({}); 




  const[name,setName]=useState('')
  const[lastName,setLastName]=useState('')
  const[cardId,setCardId]=useState('')
  const[role,setRole]=useState('')
  const[paycheck,setPaycheck]=useState('')
  const[overTime,setOverTime]=useState('')
  const[position,setPosition]=useState('')
  const[yearsActive,setYearsActive]=useState('')
  const[gender,setGender]=useState('')

const[msg,setMsg]=useState('')




  useEffect(() => {
  


    return () => {
  

      setState({}); // This worked for me
     
    }
  }, [])
  


 

   
const capitilaize=(c)=>{

 return c.charAt(0).toUpperCase() + c.slice(1).toLowerCase();

}








async function updateAdmin(g) {
  g.preventDefault()
  try{

    const res = await axios.post(`${backPath}/api/admin/singup`,{ cardId ,name ,lastName  , gender , position ,  yearsActive ,paycheck ,overTime , role},{withCredentials:"include"})

   

// console.log(res);

setMsg(res.data.msg)


const i1 =document.getElementById('i1').value=''
const i2 =document.getElementById('i2').value=''
const i3 =document.getElementById('i3').value=''
const i4 =document.getElementById('i4').value=''
const i5 =document.getElementById('i5').value=''
const i6=document.getElementById('i6').value=''



    


  

  }catch(err){
    
    console.log(err);

  }
  
}



  return (
    <div>
       <NavBar {...navData2}/>


          
  <div className={usersStyles.main}>


<div className={usersStyles.firstText}>
Create User

</div>






<div className={usersStyles.thredText}>
<div className={usersStyles.thredTextMainText}>All columns must be filled </div>



<input type="text" id='i1'  className={usersStyles.input} placeholder='CardId' onChange={(c)=>{setCardId(c.target.value)}}   />

  <input type="text"  id='i2'  className={usersStyles.input} placeholder="Name"  onChange={(a)=>{setName(a.target.value)}} />


 <input type="text" id='i3' className={usersStyles.input} placeholder='Lastname' onChange={(b)=>{setLastName(b.target.value)}} />

 
<div>Male <input type="radio" name='age'  value="Male" onClick={(g)=>{setGender(g.target.value)}}/> </div> 
 <div>Female <input type="radio"  name='age' value="Female" onClick={(k)=>{setGender(k.target.value)}} /> </div> 





<input type="text" id='i4'   className={usersStyles.input} placeholder="Position"  onChange={(a)=>{setPosition(a.target.value)}} />





<input type="date" placeholder='Join'  className={usersStyles.input} onChange={(b)=>{setYearsActive(b.target.value)}} />


  <input type="text" id='i5'   className={usersStyles.input} placeholder="Paycheck"  onChange={(a)=>{setPaycheck(a.target.value)}} />


 <input type="text" id='i6'  className={usersStyles.input} placeholder='Overtime' onChange={(b)=>{setOverTime(b.target.value)}}    />



  


 


  <button className={usersStyles.button}  onClick={updateAdmin}>Create </button>



</div>


<div className={usersStyles.fourText}>{msg}</div>


</div>


    </div>
  )
}

export default AdminCreate