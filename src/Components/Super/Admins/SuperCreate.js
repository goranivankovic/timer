import React,{useState,useEffect} from 'react'
import NavBar from '../../NavBar/Super/NavBar'
import axios from 'axios'
import{ useNavigate  } from 'react-router-dom'
import {  useDispatch ,useSelector} from 'react-redux'
import superStyles from '../../../Styles/Super/SuperCreate.module.css'


function SuperCreate({...navData}) {
  const backPath = useSelector((state) => state.backPath.path)

  const navigate =useNavigate()

  const [state, setState] = useState({}); 

  const[msg,setMsg]=useState(false)




  const[name,setName]=useState('')
  const[lastName,setLastName]=useState('')
  const[password,setPassword]=useState('')
  const[role,setRole]=useState('')


const[laz,setLaz]=useState(true)


  useEffect(() => {
  

    return () => {
  

      setState({}); // This worked for me
     
    }
  }, [])
  


async function updateAdmin(g) {
  g.preventDefault()
  try{

    const res = await axios.post(`${backPath}/api/admin/super/singup`,{ name ,lastName ,password ,role },{withCredentials:"include"})

   


setName('')
setLastName('')
setPassword('')
setRole('')


    
setMsg(res.data.msg)

const i1 =document.getElementById('i1').value=''
const i2 =document.getElementById('i2').value=''
const i3 =document.getElementById('i3').value=''
const i4 =document.getElementById('i4').value=''





  }catch(err){
    
    console.log(err);
    
    
    

  }
  
}

const onChange = (event) => {
  const value = event.target.value;
  setRole(value);
};




  return (
    <div>
       <NavBar {...navData}/>


          
  <div className={superStyles.main}>


<div className={superStyles.firstText}>
Create New Admin

</div>






<div className={superStyles.thredText}>
<div className={superStyles.thredTextMainText}> Please make sure that the admin name  is Unique and password</div>

  <input type="text" id='i1'  className={superStyles.input} placeholder="Name"  onChange={(a)=>{setName(a.target.value)}} />


 <input type="text"  id='i2'  className={superStyles.input} placeholder='Lastname' onChange={(b)=>{setLastName(b.target.value)}}    />

  

 <input type="text" id='i3'   className={superStyles.input} placeholder='Password' onChange={(c)=>{setPassword(c.target.value)}}   />



 <div>Admin <input type="radio" name='age'  value="admin" onClick={(g)=>{setRole(g.target.value)}}/> </div> 
 <div>Super <input type="radio"  name='age' value="super" onClick={(k)=>{setRole(k.target.value)}} /> </div> 


 


  <button className={superStyles.button}  onClick={updateAdmin}>Create</button>




</div>






<div className={superStyles.fourText}>{msg}</div>

</div>


    </div>
  )
}

export default SuperCreate