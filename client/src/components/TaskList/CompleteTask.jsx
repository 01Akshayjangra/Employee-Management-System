import React from 'react'

const CompleteTask = ({ item }) => {
    return (
        <div className='h-full rounded-2xl border border-emerald-900/60 bg-emerald-950/40 p-5 text-emerald-50 shadow-sm'>
            <div className='flex items-center justify-between text-xs'>
                <h3 className='rounded-full border border-emerald-700 bg-emerald-900/60 px-3 py-1 text-[11px] font-medium text-emerald-100'>{item.category}</h3>
                <h4 className='text-[11px] text-emerald-100'>{item.taskDate}</h4>
            </div>
            <h2 className='mt-4 text-lg font-semibold'>{item.taskTitle}</h2>
            <p className='mt-2 text-xs leading-relaxed text-emerald-100/80'>{item.taskDescription}</p>
        </div>
    )
}

export default CompleteTask
