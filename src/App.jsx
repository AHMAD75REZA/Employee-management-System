import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, SetLocalStorage } from './utils/LocalStorage'

function App() {

  // useEffect(() => {
  //   // SetLocalStorage()
  //   getLocalStorage()
  // })

const [user, setUser] = useState(null)

   const handleLogin = (Email, Password)=>{
    // console.log(email, password);
    if(Email == 'admin@me.com' && Password == '123'){
      // console.log("this is Admin")
      setUser('admin')
      console.log(user);
    }else if(Email == 'user@me.com' && Password == '123'){
        // console.log("This is user")
        setUser('employee')
        console.log(user);
        
    }
    else{
      alert('Invalid credentials')
    }
    
   }
  //  handleLogin('user@me.com',123)

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: "" }
      
     {user == 'admin' ?  <AdminDashboard /> : <EmployeeDashboard/>}
      
    </>
  )
}

export default App
