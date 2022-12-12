import React, { useEffect, useState } from 'react'
import{Navigate,Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux'



function AdminProtectRoutes  ({...navData2}) {

  


const adminVar = useSelector((state) => state.admin.adminVar)



    
  return (
    adminVar ? <Outlet/> : <Navigate to='/login/admin'/>
  )
}

export default AdminProtectRoutes; 