import React from 'react'

const AcceptTask = ({ item }) => {
    return (
        <div className='h-full rounded-2xl border border-amber-900/60 bg-amber-950/40 p-5 text-amber-50 shadow-sm'>
            <div className='flex items-center justify-between text-xs'>
                <h3 className='rounded-full border border-amber-700 bg-amber-900/60 px-3 py-1 text-[11px] font-medium text-amber-100'>{item.category}</h3>
                <h4 className='text-[11px] text-amber-100'>{item.taskDate}</h4>
            </div>
            <h2 className='mt-4 text-lg font-semibold'>{item.taskTitle}</h2>
            <p className='mt-2 text-xs leading-relaxed text-amber-100/80'>{item.taskDescription}</p>
            <div className='mt-5 flex flex-col gap-2 sm:flex-row'>
                <button className='rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-emerald-500'>
                    Mark as Completed
                </button>
                <button className='rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-red-500'>
                    Mark as Failed
                </button>
            </div>
        </div>
    )
}

export default AcceptTask