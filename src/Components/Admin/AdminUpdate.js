import React,{useState,useEffect} from 'react'
import NavBar from '../NavBar/Admin/NavBar'
import axios from 'axios'
import{Form, useNavigate  } from 'react-router-dom'
import usersStyles from '../../Styles/Users/SuperUsersUpdate.module.css'
import {  useDispatch ,useSelector} from 'react-redux'

function AdminUpdate({...navData2}) {
  const backPath = useSelector((state) => state.backPath.path)
  const navigate =useNavigate()

  const [state, setState] = useState({}); 
  const[users,setUsers]=useState([])

  const[laz,setLaz]=useState(false)



  const[id,setId]=useState('')

  const[name,setName]=useState('')
  const[lastName,setLastName]=useState('')
  const[cardId,setCardId]=useState('')
  const[role,setRole]=useState('')
  const[paycheck,setPaycheck]=useState('')
  const[overTime,setOverTime]=useState('')
  const[position,setPosition]=useState('')
  const[yearsActive,setYearsActive]=useState('')
  const[gender,setGender]=useState('')



  const[laz2,setLaz2]=useState(true)


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








async function updateAdmin(g) {
  g.preventDefault()
  try{

    const res = await axios.post(`${backPath}/api/admin/update/${id}`,{ cardId ,name ,lastName  , gender , position ,  yearsActive ,paycheck ,overTime , role},{withCredentials:"include"})

   

// console.log(res);



    setLaz(!laz)
    setLaz2(!laz2)


 const i1 =document.getElementById('i1').value=''
const i2 =document.getElementById('i2').value=''
const i3 =document.getElementById('i3').value=''
const i4 =document.getElementById('i4').value=''
const i5 =document.getElementById('i5').value=''
const i6=document.getElementById('i6').value=''




    

    navigate('/dashboard/admin/users')
    setTimeout(() => {
      navigate('/dashboard/admin/update')
    }, 1000);

  

  }catch(err){
    
    console.log(err);

  }
  
}



  return (
    <div>
       <NavBar {...navData2}/>


          
  <div className={usersStyles.main}>


<div className={usersStyles.firstText}>
Update User

</div>
{laz2 ?


<div className={usersStyles.secondText}>
   
   {users.map((el)=><div key={el.id} className={usersStyles.secondTextItems}>{capitilaize(el.name)} {capitilaize(el.lastName)} 
    <span >Role - {el.role}</span>
     <button  className={usersStyles.button}  onClick={
     async ()=>{
        try{

          setId(el.id)
          setName(el.name)
          setLastName(el.lastName)
          setCardId(el.cardId)
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
<div className={usersStyles.thredText}>
<div className={usersStyles.thredTextMainText}>All columns must be filled </div>



<input type="text" id='i1'  className={usersStyles.input} placeholder='New cardId' onChange={(c)=>{setCardId(c.target.value)}}   />

  <input type="text" id='i2'   className={usersStyles.input} placeholder="New name"  onChange={(a)=>{setName(a.target.value)}} />


 <input type="text" id='i3'   className={usersStyles.input} placeholder='New lastname' onChange={(b)=>{setLastName(b.target.value)}} />

 
<div>Male <input type="radio" name='age'  value="Male" onClick={(g)=>{setGender(g.target.value)}}/> </div> 
 <div>Female <input type="radio"  name='age' value="Female" onClick={(k)=>{setGender(k.target.value)}} /> </div> 





<input type="text"  id='i4'   className={usersStyles.input} placeholder="New  position"  onChange={(a)=>{setPosition(a.target.value)}} />





<input type="date" placeholder='Join'  className={usersStyles.input} onChange={(b)=>{setYearsActive(b.target.value)}} />


  <input type="text" id='i5'   className={usersStyles.input} placeholder="New paycheck"  onChange={(a)=>{setPaycheck(a.target.value)}} />


 <input type="text" id='i6'   className={usersStyles.input} placeholder='New overtime' onChange={(b)=>{setOverTime(b.target.value)}}    />



  


 


  <button className={usersStyles.button}  onClick={updateAdmin}>Update</button>



</div>


 :"" }


</div>




 </div>
  )
}

export default AdminUpdate