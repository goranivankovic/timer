import React,{useState,useEffect} from 'react'
import NavBar from '../../NavBar/Super/NavBar'
import axios from 'axios'
import{Form, useNavigate  } from 'react-router-dom'
import superUsersStyles from '../../../Styles/Users/SuperUsersCreate.module.css'

import {useSelector} from 'react-redux'

function SuperUserCreate({...navData}) {

  const backPath = useSelector((state) => state.backPath.path)

  const navigate =useNavigate()

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
       <NavBar {...navData}/>


          
  <div className={superUsersStyles.main}>


<div className={superUsersStyles.firstText}>
Create User

</div>






<div className={superUsersStyles.thredText}>
<div className={superUsersStyles.thredTextMainText}>All columns must be filled </div>



<input type="text" id='i1' className={superUsersStyles.input} placeholder='CardId' onChange={(c)=>{setCardId(c.target.value)}}   />

  <input type="text"  id='i2'   className={superUsersStyles.input} placeholder="Name"  onChange={(a)=>{setName(a.target.value)}} />


 <input type="text"   id='i3' className={superUsersStyles.input} placeholder='Lastname' onChange={(b)=>{setLastName(b.target.value)}} />

 
<div>Male <input type="radio" name='age'  value="Male" onClick={(g)=>{setGender(g.target.value)}}/> </div> 
 <div>Female <input type="radio"  name='age' value="Female" onClick={(k)=>{setGender(k.target.value)}} /> </div> 





<input type="text"  id='i4'  className={superUsersStyles.input} placeholder="Position"  onChange={(a)=>{setPosition(a.target.value)}} />





<input type="date" placeholder='Join'  className={superUsersStyles.input} onChange={(b)=>{setYearsActive(b.target.value)}} />


  <input type="text"  id='i5'  className={superUsersStyles.input} placeholder="Paycheck"  onChange={(a)=>{setPaycheck(a.target.value)}} />


 <input type="text"  id='i6' className={superUsersStyles.input} placeholder='Overtime' onChange={(b)=>{setOverTime(b.target.value)}}    />



  


 


  <button className={superUsersStyles.button}  onClick={updateAdmin}>Create </button>



</div>


<div className={superUsersStyles.fourText}>{msg}</div>


</div>




    </div>
  )
}

export default SuperUserCreate