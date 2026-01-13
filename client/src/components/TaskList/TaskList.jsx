import React from 'react'

const TaskList = () => {
    return (
        <div id="tasklist" className='mt-10 w-full h-[60%] py-5  flex items-center justify-start gap-5 flex-nowrap overflow-x-auto'>
            <div className='shrink-0 h-full w-75 bg-red-400 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Learn DSA</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt neque non sint?</p>
            </div>
        </div>
    )
}

export default TaskList