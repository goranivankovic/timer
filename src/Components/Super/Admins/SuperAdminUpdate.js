import React,{useState,useEffect} from 'react'
import NavBar from '../../NavBar/Super/NavBar'
import axios from 'axios'
import{Form, useNavigate  } from 'react-router-dom'
import superStyles from '../../../Styles/Super/SuperUpdate.module.css'
import {  useDispatch ,useSelector} from 'react-redux'

function SuperAdminUpdate({...navData}) {
  const navigate =useNavigate()
  const backPath = useSelector((state) => state.backPath.path)

  const [state, setState] = useState({}); 
  const[admins,setAdmins]=useState([])

  const[laz,setLaz]=useState(false)



  const[id,setId]=useState('')
  const[name,setName]=useState('')
  const[lastName,setLastName]=useState('')
  const[password,setPassword]=useState('')
  const[role,setRole]=useState('')



  const[laz2,setLaz2]=useState(true)


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








async function updateAdmin(g) {
  g.preventDefault()
  try{

    const res = await axios.post(`${backPath}/api/admin/super/update/${id}`,{ name ,lastName ,password ,role },{withCredentials:"include"})

   

// console.log(res);



    setLaz(!laz)
    setLaz2(!laz2)

    

    navigate('/dashboard/admin/super')
    setTimeout(() => {
      navigate('/dashboard/admin/super/update')
    }, 1000);

  

  }catch(err){
    
    console.log(err);

  }
  
}



  return (
    <div>
       <NavBar {...navData}/>


          
  <div className={superStyles.main}>


<div className={superStyles.firstText}>
Update Admin

</div>
{laz2 ?


<div className={superStyles.secondText}>
   
   {admins.map((el)=><div key={el.id} className={superStyles.secondTextItems}>{capitilaize(el.name)} {capitilaize(el.lastName)} 
    <span >Role - {el.role}</span>
     <button  className={superStyles.button}  onClick={
     async ()=>{
        try{

          setId(el.id)
          setName(el.name)
          setLastName(el.lastName)
          setPassword(el.password)
          setRole(el.role)
          setLaz(!laz)


   
         setLaz2(!laz2)
      
        }catch(err){
          console.log(err);
        }
      
      }

     }>Update</button> </div> )} 


</div>

:""}



{laz   ?
<div className={superStyles.thredText}>
<div className={superStyles.thredTextMainText}> Upadte Admin </div>





  <input type="text" name='name'   className={superStyles.input} placeholder="New name"  onChange={(a)=>{setName(a.target.value)}} />


 <input type="text"  className={superStyles.input} placeholder='New lastname' onChange={(b)=>{setLastName(b.target.value)}}    />

  

 <input type="text"  className={superStyles.input} placeholder='New password' onChange={(c)=>{setPassword(c.target.value)}}   />





<div>Admin <input type="radio" name='age'  value="admin" onClick={(g)=>{setRole(g.target.value)}}/> </div> 
 <div>Super <input type="radio"  name='age' value="super" onClick={(k)=>{setRole(k.target.value)}} /> </div> 


 


 


  <button className={superStyles.button}  onClick={updateAdmin}>Update</button>



</div>


 :"" }


</div>



    </div>
  )
}

export default SuperAdminUpdate