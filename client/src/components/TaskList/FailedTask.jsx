import React from 'react'

const FailedTask = ({item}) => {
    return (
        <div className='h-full rounded-2xl border border-red-900/60 bg-red-950/40 p-5 text-red-50 shadow-sm'>
            <div className='flex items-center justify-between text-xs'>
                <h3 className='rounded-full border border-red-700 bg-red-900/60 px-3 py-1 text-[11px] font-medium text-red-100'>{item.category}</h3>
                <h4 className='text-[11px] text-red-100'>{item.taskDate}</h4>
            </div>
            <h2 className='mt-4 text-lg font-semibold'>{item.taskTitle}</h2>
            <p className='mt-2 text-xs leading-relaxed text-red-100/80'>{item.taskDescription}</p>
            <div className='mt-5 flex gap-3'>
                <button className='rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-emerald-500'>
                    Complete
                </button>
            </div>
        </div>
    )
}

export default FailedTask