

import {BrowserRouter , Routes, Route  } from 'react-router-dom'


//User routes
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import UserProtectRoutes  from './Components/User/UserProtectRoutes'




//Login Admin and Super Admin
import LoginAdmin from './Components/Login/LoginAdmin';





//Admin Routes
import Admin from './Components/Admin/Admin'
import AdminCreate from './Components/Admin/AdminCreate';
import AdminAll from './Components/Admin/AdminAll';
import AdminUpdate from './Components/Admin/AdminUpdate';
import AdminDelete from './Components/Admin/AdminDelete';
import AdminSingle from './Components/Admin/AdminSingle';
import AdminProtectRoutes  from './Components/Admin/AdminProtectRoutes'
import AdminEnterExit  from './Components/Admin/AdminEnterExit'
import AdminAllBreaks  from './Components/Admin/AdminAllBreaks'




//Super Admin Routes
import SuperAdmin from './Components/Super/Admins/Super'
import SuperCreate from './Components/Super/Admins/SuperCreate';
import SuperAdminAll from './Components/Super/Admins/SuperAdminAll';
import SuperAdminUpdate from './Components/Super/Admins/SuperAdminUpdate';
import SuperAdminDelete from './Components/Super/Admins/SuperAdminDelete';
import SuperAdminSingle from './Components/Super/Admins/SuperAdminSingle';


import SuperUserAll from './Components/Super/Users/SuperUserAll';
import SuperUserSingle from './Components/Super/Users/SuperUserSingle';
import SuperUserDelete from './Components/Super/Users/SuperUserDelete';
import SuperUserUpdate from './Components/Super/Users/SuperUserUpdate';
import SuperUserCreate from './Components/Super/Users/SuperUserCreate';
import SuperUserEnterExit from './Components/Super/Users/SuperUserEnterExit';
import SuperUserAllBreaks from './Components/Super/Users/SuperUserAllBreaks';


import SuperAdminProtectRoutes  from './Components/Super/Admins/SuperAdminProtectRoutes'








import axios from 'axios';





import {  useDispatch ,useSelector } from 'react-redux'

// Admin react-redux function
import { trutheFunctionAdmin, lieFunctionAdmin } from './ReduxActions/adminProtect'


//Super Admin react-redux function
import { trutheFunctionSuper, lieFunctionSuper } from './ReduxActions/superProtect'




function App() {

  const backPath = useSelector((state) => state.backPath.path)

  const dispatch =useDispatch()

  
  



  let  navData={
    home:"Home",
    admin:{
      name:"Admin",
      creatAdmin:"Create Admin",
      readAdmin:"Find Admin",
      updateAdmin:"Update Admin",
      deleteAdmin:"Delete Admin",
      readAll:"All Admins",
      link1:"/dashboard/admin/super",
      link2:"/dashboard/admin/super/create",
      link3:"/dashboard/admin/super/single",
      link4:"/dashboard/admin/super/update",
      link5:"/dashboard/admin/super/delete",
      link6:"/dashboard/admin/super/all"
    },

    users:{
      name:"Users",
      creatUser:"Create User",
      readUser:"Find User",
      updateUser:"Update User",
      deleteUser:"Delete User",
      readAll:"All Users",
      link1:"/dashboard/admin/super/users/all",
      link2:"/dashboard/admin/super/users/create",
      link3:"/dashboard/admin/super/users/single",
      link4:"/dashboard/admin/super/users/update",
      link5:"/dashboard/admin/super/users/delete",
      link6:"/dashboard/admin/super/users/all"
    },
    usersTime:{
      name:"Time",
      readUserTime:"Entry and Exit",
      readUserAll:"All Breaks",
      link1:"/dashboard/admin/super/time/break",
      link2:"/dashboard/admin/super/time/break/all",
    },
    logout:{
      name:"Logout",
      fun:  async ()=>{
        try{
          const res = await axios.get(`${backPath}/api/admin/super/clear/super/cookie`,{withCredentials:"include"})
    

     
    
      dispatch(lieFunctionSuper())
      dispatch(lieFunctionAdmin())
    
        }catch(error){
          console.error(error)
    
        }
      }
    }

  }




  
//User Navbar Schema


  let  navData2={
    home:"Home",
   
    users:{
      name:"Users",
      creatUser:"Create User",
      readUser:"Find User",
      updateUser:"Update User",
      deleteUser:"Delete User",
      readAll:"All Users",
      link1:"/dashboard/admin",
      link2:"/dashboard/admin/create",
      link3:"/dashboard/admin/users/single",
      link4:"/dashboard/admin/update",
      link5:"/dashboard/admin/delete",
      link6:"/dashboard/admin/users"
    },
    usersTime:{
      name:"Time",
      readUserTime:"Entry and Exit",
      readUserAll:"All Breaks",
      link1:"/dashboard/admin/time/break",
      link2:"/dashboard/admin/time/break/all",
    },
    logout:{
      name:"Logout",
      fun:  async ()=>{
        try{
          const res = await axios.get(`${backPath}/api/admin/super/clear/admin/cookie`,{withCredentials:"include"})
    

     
    
    
      dispatch(lieFunctionAdmin())
    
        }catch(error){
          console.error(error)
    
        }
      }
    }

  }




  





  return (
      <BrowserRouter>
    <div className="App">
      <Routes>

     
    


            <Route path="/login/admin" element ={<LoginAdmin />} />
            
            <Route path="/" element ={<Login />} />



        
      
       <Route  element={<UserProtectRoutes />}>
               <Route path ="/dashboard" element={<User />} />
       </Route>






       <Route element={<AdminProtectRoutes />}>
               <Route path ="/dashboard/admin" element={<Admin {...navData2}  />} />
               <Route path="/dashboard/admin/create" element={<AdminCreate  {...navData2}/>} />
               <Route path="/dashboard/admin/users" element={<AdminAll {...navData2}/>} />
               <Route path="/dashboard/admin/update" element={<AdminUpdate {...navData2}/>} />
               <Route path="/dashboard/admin/delete" element={<AdminDelete {...navData2}/>} />
               <Route path="/dashboard/admin/users/single" element={<AdminSingle  {...navData2}/>} />
               <Route path="/dashboard/admin/time/break" element={<AdminEnterExit  {...navData2}/>} />
               <Route path="/dashboard/admin/time/break/all" element={<AdminAllBreaks  {...navData2}/>} />
       </Route>





       <Route element={<SuperAdminProtectRoutes />}> 
            
            {/* Admin Routes */}
               <Route path ="/dashboard/admin/super" element={<SuperAdmin  {...navData} />} />
               <Route path="/dashboard/admin/super/create" element={<SuperCreate {...navData} />} />
               <Route path="/dashboard/admin/super/single" element={<SuperAdminSingle  {...navData}/>} />
               <Route path="/dashboard/admin/super/update" element={<SuperAdminUpdate {...navData} />} />
               <Route path="/dashboard/admin/super/delete" element={<SuperAdminDelete {...navData}/>} />
               <Route path="/dashboard/admin/super/all" element={<SuperAdminAll {...navData}/>} />

              {/* Users Routes */}
               <Route path="/dashboard/admin/super/users/single" element={<SuperUserSingle {...navData}/>} />
               <Route path="/dashboard/admin/super/users/update" element={<SuperUserUpdate {...navData}/>} />
               <Route path="/dashboard/admin/super/users/delete" element={<SuperUserDelete {...navData}/>} />
               <Route path="/dashboard/admin/super/users/all" element={<SuperUserAll {...navData}/>} />
               <Route path="/dashboard/admin/super/users/create" element={<SuperUserCreate {...navData}/>} />
               <Route path="/dashboard/admin/super/time/break" element={<SuperUserEnterExit {...navData}/>} />
               <Route path="/dashboard/admin/super/time/break/all" element={<SuperUserAllBreaks {...navData}/>} />


     
     </Route>


              

      </Routes>
    </div>
</BrowserRouter>

  );
}

export default App;
