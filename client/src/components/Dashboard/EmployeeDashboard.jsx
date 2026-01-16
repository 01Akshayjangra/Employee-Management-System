import React from 'react'
import Header from './other/Header'
import TaskListNumbers from './other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='min-h-screen w-full px-6 py-8 md:p-10 bg-transparent'>
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div >
  )
}

export default EmployeeDashboard