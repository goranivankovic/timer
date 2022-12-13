import React, { useState,useEffect } from 'react'

import workerStyles from '../../Styles/Worker/WorkerLogin.module.css'

import axios from 'axios'

import{useNavigate  } from 'react-router-dom'

import {  useDispatch ,useSelector } from 'react-redux'
import { trutheFunction, lieFunction } from '../../ReduxActions/userProtect'

import { Link } from 'react-router-dom'




// import {ImKey} from 'react-icons/im'
import {FaKey} from 'react-icons/fa'


let arrowVar;

function Login() {


  const [state, setState] = useState({});
 const[cardId,setCardId]= useState('')

 const backPath = useSelector((state) => state.backPath.path)

 




const dispatch =useDispatch()
const navigate =useNavigate()



 
async function sendPasswordValue(a){
 a.preventDefault()
  try{
   


  const res= await axios.post(`${backPath}/api/admin/login`,{cardId},{withCredentials:true})


  arrowVar = res.data.msg[1]
 

  navigate('/dashboard')




  

  }catch(error){
    console.error(error);
    
  }

}

useEffect(async () => {


   return () => {

    setState({}); // This worked for me
 
  }

})




 
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

 

       <form className={workerStyles.form} onSubmit={sendPasswordValue}  > 


       <div>Barkod / Rfid Prijava </div>
        
      <input placeholder='Password...' className={workerStyles.inputField} type="password" onChange={b=>{setCardId(b.target.value)}} />
     
<div className={workerStyles.twoButtons}>
     

   <Link to={"/login/admin"} style={{color:"black"}}>Admin Prijava</Link>

   <button className={workerStyles.button}  type='submit'><FaKey /> Login</button>
</div>

   

      </form>

      </div>



 
  <div className={workerStyles.threedDiv}>{arrowVar}</div>   

   


     

      </div>
  




      </div>


  )
}

export default Login