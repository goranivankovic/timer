
import React, { useState ,useEffect } from 'react'

import workerStyles from '../../Styles/Worker/WorkerLogin.module.css'
import axios from 'axios'

import{useNavigate  } from 'react-router-dom'

import { Link } from 'react-router-dom'



import {  useDispatch ,useSelector } from 'react-redux'

// import {ImKey} from 'react-icons/im'
import {FaKey} from 'react-icons/fa'


let arrowVar =''

function LoginAdmin() {

  const backPath = useSelector((state) => state.backPath.path)
  
  const [state, setState] = useState({});

 
 
 
  const[name,setName]= useState('')
  const[password,setPassword]= useState('')
 
 
  
 
const navigate =useNavigate()

 useEffect(async () => {



   return () => {

    setState({}); // This worked for me
 
 
  }

})

 
 
 
  
 async function sendPasswordValue(a){
   a.preventDefault()
   try{
    
 
 
   const res= await axios.post(`${backPath}/api/admin/super/login`,{name,password},{withCredentials:'include'})
 

   navigate('/dashboard/admin/super')

   console.log('====================================');
   console.log(res);
   console.log('====================================');


  


   arrowVar=res.data.msg[1];

   

 
 
   }catch(error){
     console.error(error);
   }
 
 
 
 }





  
   return (
     <div>

<div className={workerStyles.main}>




<div className={workerStyles.firstText}>
 COMPANY/ <span style={{color:"red"}}>MIS</span> 

</div>

<div className={workerStyles.secondText}>
      @gogaDesign.uk

</div>







      {/* Form div */}
  <div className={workerStyles.formDiv}>



 <form className={workerStyles.form}  onSubmit={sendPasswordValue}> 


 <div>Barkod / Rfid Prijava </div>
  
<input placeholder=' Name...' className={workerStyles.inputField} type="text" onChange={b=>{setName(b.target.value)}} />
<input placeholder=' Password...' className={workerStyles.inputField} type="password" onChange={c=>{setPassword(c.target.value)}} />
<div className={workerStyles.twoButtons}>


<Link to={"/"} style={{color:"black"}}>Standard Prijava</Link>

<button className={workerStyles.button} type='submit'><FaKey /> Login</button>
</div>



</form>

</div>




<div className={workerStyles.threedDiv}>{arrowVar}</div>   






</div>



 
       
 
      
 
       </div>
 
 
 
 
 
   )
 }
 
 export default LoginAdmin;