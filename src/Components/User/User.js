import React, { useEffect, useState } from 'react'
import {  useDispatch ,useSelector } from 'react-redux'
import { trutheFunction, lieFunction } from '../../ReduxActions/userProtect'
import axios from 'axios'


import workerStyle from '../../Styles/Worker/Worker.module.css'




function User() {

  const backPath = useSelector((state) => state.backPath.path)

  const[name,setName]=useState('')
  const[lastName,setLastname]=useState('')
  const[userId,setUserId]=useState('')



  //worker Start and End TRUE OR FALSE
  const[startWorker,setStartWorker]=useState()



  
  //worker Start and End TRUE OR FALSE
  const[startPause,setStartPause]=useState()
  const[endPause,setEndPause]=useState()


  





const dispatch =useDispatch()





//Get data on load useEfect

  async function getData(){
    try{
    


      const res = await axios.get(`${backPath}/api/user/cookie`,{withCredentials:"include"})


      if (res.data.msg[5] == 1) {

        setStartWorker(true)
        
      }else if (res.data.msg[5] == 0) {
        
        setStartWorker(false)
    
      }


      if (res.data.msg[6] == 1) {

        setStartPause(true)
         
       }else if (res.data.msg[6] == 0) {
        

        setStartPause(false)
       }



       if (res.data.msg[7] == 1) {

        setEndPause(true)
         
       }else if (res.data.msg[7] == 0) {
        

        setEndPause(false)
       }


 
     
      setName(res.data.msg[2])
      setLastname(res.data.msg[3])
      setUserId(res.data.msg[4])






    }catch(error){
      console.error(error)

    }
  }





  
 //Start time when use comes to work
async function sendStartTime(a){
  a.preventDefault()
  try{

    let date=new Date()

    let d=date.getDate()
    let m=date.getMonth()+1
    let y=date.getFullYear()
     let mi = date.getMinutes()
    let h = date.getHours()
  
     if (h<=9) {
      h='0'+h
      
     }
  
     if (m<=9) {
      m='0'+m
      
     }
  
     if (h<=9) {
      h='0'+h
      
     }
  
     if (mi<=9) {
      mi='0'+mi
  
      
    }
  
  
  let startTime = `  ${d}.${m}.${y} , ${h}:${mi}  `
  const res= await axios.post(`${backPath}/api/admin/update/time/start/${userId}`,{startTime},{withCredentials:'include'})

  dispatch(lieFunction())

  }catch(error){
    console.error(error);
  }


}



//Start pause time when user goes to break
async function sendPauseTime(b){
  b.preventDefault()
  try{

    let date=new Date()

    let d=date.getDate()
    let m=date.getMonth()+1
    let y=date.getFullYear()
     let mi = date.getMinutes()
    let h = date.getHours()
  
     if (h<=9) {
      h='0'+h
      
     }
  
     if (m<=9) {
      m='0'+m
      
     }
  
     if (h<=9) {
      h='0'+h
      
     }
  
     if (mi<=9) {
      mi='0'+mi
    }

    let startPause = `  ${d}.${m}.${y} , ${h}:${mi}  `
  const res= await axios.post(`${backPath}/api/admin/update/time/pause/${userId}`,{startPause},{withCredentials:'include'})

  dispatch(lieFunction())

  }catch(error){
    console.error(error);
  }


}



//End pause time when user goes to break
async function endPauseTime(c){
 c.preventDefault()
  try{

    let date=new Date()

    let d=date.getDate()
    let m=date.getMonth()+1
    let y=date.getFullYear()
     let mi = date.getMinutes()
    let h = date.getHours()
  
     if (h<=9) {
      h='0'+h
      
     }
  
     if (m<=9) {
      m='0'+m
      
     }
  
     if (h<=9) {
      h='0'+h
      
     }
  
     if (mi<=9) {
      mi='0'+mi
    }
  
  let endPause = ` ${d}.${m}.${y} , ${h}:${mi}  `
  const res= await axios.post(`${backPath}/api/admin/update/time/endPause/${userId}`,{endPause},{withCredentials:'include'})

  dispatch(lieFunction())

  }catch(error){
    console.error(error);
  }


}




//End time when user comes too work
async function sendEndtTime(d){
  d.preventDefault()
  try{

    let date=new Date()

    let d=date.getDate()
    let m=date.getMonth()+1
    let y=date.getFullYear()
     let mi = date.getMinutes()
    let h = date.getHours()
  
     if (h<=9) {
      h='0'+h
      
     }
  
     if (m<=9) {
      m='0'+m
      
     }
  
     if (h<=9) {
      h='0'+h
      
     }
  
     if (mi<=9) {
      mi='0'+mi
    }
  
  let endTime = ` ${d}.${m}.${y} , ${h}:${mi}  `
  const res= await axios.post(`${backPath}/api/admin/update/time/end/${userId}`,{endTime},{withCredentials:'include'})

  dispatch(lieFunction())
  }catch(error){
    console.error(error);
  }


}





//LOGOUT USER

async function logOut() {

  try{
    const res = await axios.get(`${backPath}/api/admin/clear/user/cookie`,{withCredentials:'include'})
    dispatch(lieFunction())


  }catch(err){
    console.error(err)
  }
  
}
 

useEffect(() => {

   
  getData()

  }, [])

  const capitilaize=(c)=>{

    return c.charAt(0).toUpperCase() + c.slice(1).toLowerCase();
   
   }
   

  
  
  return (
    <div>


      <div className={workerStyle.main}>

    <div className={workerStyle.firstText}>
      <div>Welcome {capitilaize(name)} { capitilaize(lastName)}</div>  


      <button className={workerStyle.button} onClick={logOut}>Logout</button>
   
        </div>  



           {/* Div With Start Pause End Buttons */}
        <div className={workerStyle.secondDiv}>
         
{startWorker ?
//Start day button
    <button className={workerStyle.secondDivButtons} onClick={sendStartTime}>Start Day</button>
:''
}
   



 {startPause ?
//Start Pause button
    <button className={workerStyle.secondDivButtons} onClick={sendPauseTime}>Start Pause</button>


    :''}

    {endPause ?
//END PAUSE button
<button className={workerStyle.secondDivButtonsRed} onClick={endPauseTime}>End Pause</button>

:''}

{!startWorker ?
//END day button
<button className={workerStyle.secondDivButtons} onClick={sendEndtTime}>End Time</button>
:""}


        </div>







<div className={workerStyle.empty}> </div>


    </div>

    </div>
  )
}

export default User;