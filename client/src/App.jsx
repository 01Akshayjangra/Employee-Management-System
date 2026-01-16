import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './utils/localStorage'

const App = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className='min-h-screen min-w-full bg-zinc-950 text-zinc-100'>
      {!user && <Login />}
      {user && user.role == "admin" && <AdminDashboard />}
      {user && user.role == "employee" && <EmployeeDashboard />}
    </div>
  )
}

export default App