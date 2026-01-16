import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const NewTask = ({ item }) => {

    const { fetchLoggedInUser } = useContext(AuthContext);

    const handleAcceptTask = () => {
        const data = JSON.parse(localStorage.getItem('employees'));
        const user = JSON.parse(localStorage.getItem('loggedInUser'));

        data.forEach(function (emp) {
            if (emp.email == user.email) {
                emp.taskCounts["newTask"]--;
                emp.taskCounts["acive"]++;
                emp.tasks.push({
                    active: true,
                    newTask: false,
                    failed: false,
                    completed: false,
                })
            }
        })

        localStorage.setItem('employees', JSON.stringify(data))
        fetchLoggedInUser();
    }
    return (
        <div className='h-full rounded-2xl border border-sky-900/60 bg-sky-950/40 p-5 text-sky-50 shadow-sm'>
            <div className='flex items-center justify-between text-xs'>
                <h3 className='rounded-full border border-sky-700 bg-sky-900/60 px-3 py-1 text-[11px] font-medium text-sky-100'>{item.category}</h3>
                <h4 className='text-[11px] text-sky-200'>{item.taskDate}</h4>
            </div>
            <h2 className='mt-4 text-lg font-semibold'>{item.taskTitle}</h2>
            <p className='mt-2 text-xs leading-relaxed text-sky-100/80'>{item.taskDescription}</p>
            <div className='mt-5 flex gap-3'>
                <button
                    onClick={handleAcceptTask}
                    className='rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-emerald-500'>
                    Accept Task
                </button>
            </div>
        </div>
    )
}

export default NewTask