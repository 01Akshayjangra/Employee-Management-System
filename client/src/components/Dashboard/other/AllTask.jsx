import React, { useContext, useMemo } from 'react'
import { AuthContext } from '../../../context/AuthProvider';

const AllTask = () => {
    const { allUsers } = useContext(AuthContext);

    const allTasks = useMemo(() => {
        if (!allUsers || !allUsers.employees) return [];

        return allUsers.employees.flatMap((employee) =>
            (employee.tasks || []).map((task, index) => {
                let status = 'New';
                if (task.completed) status = 'Completed';
                else if (task.failed) status = 'Failed';
                else if (task.active) status = 'In Progress';
                else if (task.newTask) status = 'New';

                return {
                    id: `${employee.id}-${index}`,
                    employeeName: employee.firstName,
                    taskTitle: task.taskTitle,
                    category: task.category,
                    date: task.taskDate,
                    status,
                };
            })
        );
    }, [allUsers]);

    const taskCounts = useMemo(() => {
        const counts = {
            new: 0,
            active: 0,
            completed: 0,
            failed: 0,
        };

        allTasks.forEach((task) => {
            if (task.status === 'New') counts.new++;
            else if (task.status === 'In Progress') counts.active++;
            else if (task.status === 'Completed') counts.completed++;
            else if (task.status === 'Failed') counts.failed++;
        });

        return counts;
    }, [allTasks]);

    const getStatusBadge = (status) => {
        const styles = {
            'New': 'bg-sky-900/60 text-sky-100 border-sky-700',
            'In Progress': 'bg-amber-900/60 text-amber-100 border-amber-700',
            'Completed': 'bg-emerald-900/60 text-emerald-100 border-emerald-700',
            'Failed': 'bg-red-900/60 text-red-100 border-red-700',
        };
        return styles[status] || 'bg-zinc-800 text-zinc-200 border-zinc-700';
    };

    return (
        <div className='mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-lg'>
            <div className='mb-6 flex items-center justify-between'>
                <h2 className='text-xl font-semibold text-zinc-50'>
                    All Tasks
                </h2>
                <p className='text-sm text-zinc-400'>
                    Complete overview of all employees&apos; tasks
                </p>
            </div>

            {/* Task Statistics */}
            <div className='mb-6 grid grid-cols-2 gap-4 md:grid-cols-4'>
                <div className='w-full rounded-xl border border-sky-900/60 bg-sky-950/40 px-4 py-5 text-sky-100 shadow-sm'>
                    <h2 className='text-2xl font-semibold'>{taskCounts.new}</h2>
                    <h3 className='mt-1 text-sm font-medium'>New Tasks</h3>
                </div>
                <div className='w-full rounded-xl border border-amber-900/60 bg-amber-950/40 px-4 py-5 text-amber-100 shadow-sm'>
                    <h2 className='text-2xl font-semibold'>{taskCounts.active}</h2>
                    <h3 className='mt-1 text-sm font-medium'>Active Tasks</h3>
                </div>
                <div className='w-full rounded-xl border border-emerald-900/60 bg-emerald-950/40 px-4 py-5 text-emerald-100 shadow-sm'>
                    <h2 className='text-2xl font-semibold'>{taskCounts.completed}</h2>
                    <h3 className='mt-1 text-sm font-medium'>Completed Tasks</h3>
                </div>
                <div className='w-full rounded-xl border border-red-900/60 bg-red-950/40 px-4 py-5 text-red-100 shadow-sm'>
                    <h2 className='text-2xl font-semibold'>{taskCounts.failed}</h2>
                    <h3 className='mt-1 text-sm font-medium'>Failed Tasks</h3>
                </div>
            </div>

            <div className='overflow-x-auto'>
                <table className='w-full border-collapse'>
                    <thead>
                        <tr className='border-b border-zinc-800'>
                            <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400'>Employee</th>
                            <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400'>Task Title</th>
                            <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400'>Category</th>
                            <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400'>Date</th>
                            <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400'>Status</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-zinc-800'>
                        {allTasks.map((task) => (
                            <tr key={task.id} className='hover:bg-zinc-800/50 transition-colors'>
                                <td className='px-4 py-4 whitespace-nowrap'>
                                    <div className='text-sm font-medium text-zinc-100'>{task.employeeName}</div>
                                </td>
                                <td className='px-4 py-4'>
                                    <div className='text-sm text-zinc-300'>{task.taskTitle}</div>
                                </td>
                                <td className='px-4 py-4 whitespace-nowrap'>
                                    <span className='inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-200'>
                                        {task.category}
                                    </span>
                                </td>
                                <td className='px-4 py-4 whitespace-nowrap'>
                                    <div className='text-sm text-zinc-400'>{task.date}</div>
                                </td>
                                <td className='px-4 py-4 whitespace-nowrap'>
                                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${getStatusBadge(task.status)}`}>
                                        {task.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        {allTasks.length === 0 && (
                            <tr>
                                <td
                                    colSpan={5}
                                    className='px-4 py-6 text-center text-sm text-zinc-500'
                                >
                                    No tasks found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllTask