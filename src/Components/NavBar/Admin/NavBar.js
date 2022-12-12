import React,{useState} from 'react'
import navStyles from '../../../Styles/NavStyles.module.css'
import {Link} from 'react-router-dom'

import { FaBars } from 'react-icons/fa'

import { BsFillArrowDownCircleFill,BsFillArrowRightCircleFill } from 'react-icons/bs'

import {RiCloseLine } from 'react-icons/ri'









function NavBar({...navData2}) {




   const[barLaz,setBarLaz]=useState(false)


  const[userlaz,setUserLaz]=useState(false)
  const[timeLaz,setTimeLaz]=useState(false)



  const[arrowLaz2,setArrowLaz2]=useState(true)
  const[arrowLaz3,setArrowLaz3]=useState(true)
  return (

   <div>

      {barLaz ?
   
   <div className={navStyles.main}>



<div className={navStyles.bars}><RiCloseLine onClick={()=>{setBarLaz(!barLaz)}} /></div>



 


 <div className={navStyles.item1}>
  <Link to={navData2.users.link1}>{navData2.home} </Link>  
 </div>




  <div className={navStyles.itemsAll}>





<div className={navStyles.item3}>

   <Link to={navData2.users.link1}>{navData2.users.name}</Link>


   
   {arrowLaz2 ? 
   <BsFillArrowDownCircleFill onClick={()=>{
    return setUserLaz(!userlaz) , setArrowLaz2(!arrowLaz2) }} /> : 
     <BsFillArrowRightCircleFill onClick={()=>{
      return setUserLaz(!userlaz) , setArrowLaz2(!arrowLaz2) }} />}


  

   </div>


   {userlaz ?
   <div className={navStyles.item3Drop}>
    <Link to={navData2.users.link2}> <div>{navData2.users.creatUser}</div></Link>
    <Link to={navData2.users.link3}> <div>{navData2.users.readUser}</div></Link>
    <Link to={navData2.users.link4}> <div>{navData2.users.updateUser}</div></Link>
    <Link to={navData2.users.link5}> <div>{navData2.users.deleteUser}</div></Link>
    <Link to={navData2.users.link6}> <div>{navData2.users.readAll}</div></Link>
   


 

    </div>

   :""}




<div className={navStyles.item4}>

<Link to={navData2.users.link1}> {navData2.usersTime.name} </Link> 

{arrowLaz3 ? 
   <BsFillArrowDownCircleFill onClick={()=>{
    return setTimeLaz(!timeLaz) , setArrowLaz3(!arrowLaz3) }} /> : 
     <BsFillArrowRightCircleFill onClick={()=>{
      return setTimeLaz(!timeLaz) , setArrowLaz3(!arrowLaz3) }} />}


</div>


{timeLaz ?
<div className={navStyles.item4Drop}>
 <Link to={navData2.usersTime.link1}> <div>{navData2.usersTime.readUserTime}</div></Link>
 <Link to={navData2.usersTime.link2}> <div>{navData2.usersTime.readUserAll}</div></Link>

 </div>

:""}

</div>




<div className={navStyles.item5}>
     <button onClick={navData2.logout.fun}>{navData2.logout.name}</button>  
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