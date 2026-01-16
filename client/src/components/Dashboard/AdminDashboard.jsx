import React from 'react'
import Header from './other/Header'
import CreateTask from './other/CreateTask'
import AllTask from './other/AllTask'

const AdminDashboard = () => {
    return (
        <div className='min-h-screen w-full px-6 py-8 md:p-10 bg-transparent'>
            <Header />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard