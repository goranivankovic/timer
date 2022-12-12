import React,{useState} from 'react'
import navStyles from '../../../Styles/NavStyles.module.css'
import {Link} from 'react-router-dom'

import { FaBars } from 'react-icons/fa'

import { BsFillArrowDownCircleFill,BsFillArrowRightCircleFill } from 'react-icons/bs'

import {RiCloseLine } from 'react-icons/ri'









function NavBar({...navData}) {




   const[barLaz,setBarLaz]=useState(false)

  const[adminLaz,setAdminLaz]=useState(false)
  const[userlaz,setUserLaz]=useState(false)
  const[timeLaz,setTimeLaz]=useState(false)



  const[arrowLaz1,setArrowLaz1]=useState(true)
  const[arrowLaz2,setArrowLaz2]=useState(true)
  const[arrowLaz3,setArrowLaz3]=useState(true)
  return (

   <div>

      {barLaz ?
   
   <div className={navStyles.main}>



<div className={navStyles.bars}><RiCloseLine onClick={()=>{setBarLaz(!barLaz)}} /></div>



 


 <div className={navStyles.item1}>
  <Link to={navData.admin.link1}>{navData.home} </Link>  
 </div>




  <div className={navStyles.itemsAll}>




<div className={navStyles.item2}>



   <Link to={navData.admin.link1}>{navData.admin.name}</Link>  

   {arrowLaz1 ? 
   <BsFillArrowDownCircleFill onClick={()=>{
    return setAdminLaz(!adminLaz) , setArrowLaz1(!arrowLaz1) }} /> : 
     <BsFillArrowRightCircleFill onClick={()=>{
      return setAdminLaz(!adminLaz) , setArrowLaz1(!arrowLaz1) }} />}

   </div>
   { adminLaz ?
   <div className={navStyles.item2Drop}>
    <Link to={navData.admin.link2}> <div>{navData.admin.creatAdmin}</div></Link>
    <Link to={navData.admin.link3}> <div>{navData.admin.readAdmin}</div></Link>

    <Link to={navData.admin.link4}><div>{navData.admin.updateAdmin}</div>  </Link>  
    <Link to={navData.admin.link5}> <div>{navData.admin.deleteAdmin}</div></Link>
    <Link to={navData.admin.link6}> <div>{navData.admin.readAll}</div></Link>
    </div>

   :""}





<div className={navStyles.item3}>

   <Link to={navData.users.link1}>{navData.users.name}</Link>


   
   {arrowLaz2 ? 
   <BsFillArrowDownCircleFill onClick={()=>{
    return setUserLaz(!userlaz) , setArrowLaz2(!arrowLaz2) }} /> : 
     <BsFillArrowRightCircleFill onClick={()=>{
      return setUserLaz(!userlaz) , setArrowLaz2(!arrowLaz2) }} />}


  

   </div>


   {userlaz ?
   <div className={navStyles.item3Drop}>
    <Link to={navData.users.link2}> <div>{navData.users.creatUser}</div></Link>
    <Link to={navData.users.link3}> <div>{navData.users.readUser}</div></Link>

    <Link to={navData.users.link4}><div>{navData.users.updateUser}</div>  </Link>  
    <Link to={navData.users.link5}> <div>{navData.users.deleteUser}</div></Link>
    <Link to={navData.users.link6}> <div>{navData.users.readAll}</div></Link>
    </div>

   :""}




<div className={navStyles.item4}>

<Link to={navData.admin.link1}> {navData.usersTime.name} </Link> 

{arrowLaz3 ? 
   <BsFillArrowDownCircleFill onClick={()=>{
    return setTimeLaz(!timeLaz) , setArrowLaz3(!arrowLaz3) }} /> : 
     <BsFillArrowRightCircleFill onClick={()=>{
      return setTimeLaz(!timeLaz) , setArrowLaz3(!arrowLaz3) }} />}


</div>


{timeLaz ?
<div className={navStyles.item4Drop}>
 <Link to={navData.usersTime.link1}> <div>{navData.usersTime.readUserTime}</div></Link>
 <Link to={navData.usersTime.link2}> <div>{navData.usersTime.readUserAll}</div></Link>

 </div>

:""}

</div>




<div className={navStyles.item5}>
     <button onClick={navData.logout.fun}>{navData.logout.name}</button>  
 </div>


 </div>

 :


 <div className={navStyles.mainMiniBar}>

<div className={navStyles.bars2}><FaBars onClick={()=>{setBarLaz(!barLaz)}}/></div>

 </div>
 
 }





    </div>
  )
}

export default NavBar