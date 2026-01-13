import React from 'react'

const TaskListNumbers = () => {
    return (
        <div className='flex mt-10 justify-between gap-5 min-w-full'>
            <div className='bg-red-400 rounded-xl py-6 px-9 w-full'>
                <h2 className='text-3xl font-semibold text-white'>0</h2>
                <h3 className='text-3xl font-medium text-white'>New Task</h3>
            </div>
            <div className='bg-blue-400 rounded-xl py-6 px-9 w-full'>
                <h2 className='text-3xl font-semibold text-white'>0</h2>
                <h3 className='text-3xl font-medium text-white'>New Task</h3>
            </div>
            <div className='bg-green-400 rounded-xl py-6 px-9 w-full'>
                <h2 className='text-3xl font-semibold text-white'>0</h2>
                <h3 className='text-3xl font-medium text-white'>New Task</h3>
            </div>
            <div className='bg-yellow-400 rounded-xl py-6 px-9 w-full'>
                <h2 className='text-3xl font-semibold text-white'>0</h2>
                <h3 className='text-3xl font-medium text-white'>New Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers