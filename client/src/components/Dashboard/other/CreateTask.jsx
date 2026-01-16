import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthProvider';

const CreateTask = () => {
    const { allUsers, fetchUserdata } = useContext(AuthContext);

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [category, setCategory] = useState("")
    const [assignTo, setAssignTo] = useState(allUsers?.employees[1].email)

    const handleCreateTask = async (e) => {
        e.preventDefault();

        const data = JSON.parse(localStorage.getItem('employees'));

        data.forEach(function (emp) {
            if (emp.email == assignTo) {
                emp.taskCounts["newTask"]++;
                emp.tasks.push({
                    active: false,
                    newTask: true,
                    failed: false,
                    completed: false,
                    taskTitle: title,
                    taskDescription: description,
                    taskDate: date,
                    category: category
                })
            }
        })

        localStorage.setItem('employees', JSON.stringify(data))

        setTitle("")
        setDescription("")
        setDate("")
        setCategory("")
        setAssignTo(allUsers?.employees[1].email)
        fetchUserdata()
    }
    return (
        <div className='mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-sm'>
            <form
                onSubmit={(e) => handleCreateTask(e)}
                className='flex w-full flex-col gap-6 pb-4 md:flex-row md:gap-10'>
                <div className='w-full space-y-4'>

                    <div>
                        <h3 className='text-sm font-semibold text-zinc-100'>Task Title</h3>
                        <input
                            type="text"
                            placeholder='Make a UI design'
                            className='mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-50 outline-none ring-emerald-500/0 transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div>
                        <h3 className='text-sm font-semibold text-zinc-100'>Date</h3>
                        <input
                            type="date"
                            className='mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-50 outline-none ring-emerald-500/0 transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 className='text-sm font-semibold text-zinc-100'>Assign to</h3>
                        <select
                            placeholder='Employee name'
                            className='mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-50 outline-none ring-emerald-500/0 transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40'
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                        >
                            {allUsers && allUsers.employees.map((emp) => (
                                <option key={emp.email} value={emp.email}>
                                    {emp.firstName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h3 className='text-sm font-semibold text-zinc-100'>Category</h3>
                        <input
                            type="text"
                            placeholder='Design, Dev, etc.'
                            className='mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-50 outline-none ring-emerald-500/0 transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>

                </div>

                <div className='w-full space-y-4'>
                    <div>
                        <h3 className='text-sm font-semibold text-zinc-100'>Description</h3>
                        <textarea
                            cols={30}
                            rows={7}
                            className='mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-50 outline-none ring-emerald-500/0 transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button
                        className='mt-2 w-full rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60'
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask