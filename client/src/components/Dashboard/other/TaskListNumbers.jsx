import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider';

const TaskListNumbers = () => {
    const { user } = useContext(AuthContext);

    if (!user) return null;

    return (
        <div className='mt-8 grid min-w-full grid-cols-2 gap-4 md:grid-cols-4'>
            <div className='w-full rounded-xl border border-blue-900/60 bg-blue-950/40 px-4 py-5 text-blue-100 shadow-sm'>
                <h2 className='text-2xl font-semibold'>{user.taskCounts.newTask}</h2>
                <h3 className='mt-1 text-sm font-medium'>New Tasks</h3>
            </div>
            <div className='w-full rounded-xl border border-emerald-900/60 bg-emerald-950/40 px-4 py-5 text-emerald-100 shadow-sm'>
                <h2 className='text-2xl font-semibold'>{user.taskCounts.completed}</h2>
                <h3 className='mt-1 text-sm font-medium'>Completed</h3>
            </div>
            <div className='w-full rounded-xl border border-amber-900/60 bg-amber-950/40 px-4 py-5 text-amber-100 shadow-sm'>
                <h2 className='text-2xl font-semibold'>{user.taskCounts.active}</h2>
                <h3 className='mt-1 text-sm font-medium'>Active</h3>
            </div>
            <div className='w-full rounded-xl border border-red-900/60 bg-red-950/40 px-4 py-5 text-red-100 shadow-sm'>
                <h2 className='text-2xl font-semibold'>{user.taskCounts.failed}</h2>
                <h3 className='mt-1 text-sm font-medium'>Failed</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers