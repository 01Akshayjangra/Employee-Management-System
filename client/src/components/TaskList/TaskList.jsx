import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = () => {
    const { user } = useContext(AuthContext);

    if (!user) return null;

    return (
        <div className='mt-10 w-full'>
            <h2 className='mb-6 text-xl font-semibold text-zinc-50'>My Tasks</h2>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {user.tasks.map((item, index) => {
                    if (item.newTask) return <NewTask item={item} key={index} />
                    if (item.active) return <AcceptTask item={item} key={index} />
                    if (item.completed) return <CompleteTask item={item} key={index} />
                    if (item.failed) return <FailedTask item={item} key={index} />
                    return null;
                })}
            </div>
        </div>
    )
}

export default TaskList
