import React from 'react'

const CreateTask = () => {
    return (
        <div>
            <form className='mt-10 pb-10 flex justify-between gap-10 w-full'>
                <div className='w-full'>

                    <div className=''>
                        <h3 className='text-lg font-semibold'>Task Title</h3>
                        <input
                            type="text"
                            placeholder='Make a ui design'
                            className='px-3 py-2 bg-zinc-700 rounded-lg w-full mt-2 outline-none'
                        />
                    </div>

                    <div>
                        <h3 className='text-lg font-semibold'>Date</h3>
                        <input
                            type="date"
                            className='px-3 py-2 bg-zinc-700 rounded-lg w-full mt-2 outline-none'
                        />
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold'>Assign to</h3>
                        <input
                            type="text"
                            placeholder='Employee Name'
                            className='px-3 py-2 bg-zinc-700 rounded-lg w-full mt-2 outline-none'
                        />
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold'>Category</h3>
                        <input
                            type="text"
                            placeholder='Design, Dev, etc'
                            className='px-3 py-2 bg-zinc-700 rounded-lg w-full mt-2 outline-none'
                        />
                    </div>

                </div>

                <div className='w-full'>
                    <div>
                        <h3 className='text-lg font-semibold'>Description</h3>
                        <textarea
                            name=""
                            id=""
                            cols={30}
                            rows={7}
                            className='px-3 py-2 bg-zinc-700 rounded-lg w-full mt-2 outline-none'
                        />
                    </div>
                    <button
                        className='px-3 py-2 bg-emerald-600 rounded-lg w-full mt-5'
                    > Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask