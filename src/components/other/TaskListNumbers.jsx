import React from 'react'

function TaskListNumbers() {
    return (
        <div className='flex mt-10 mr-4 gap-10 justify-betweenscreen'>
            <div className='h-40 w-[45%] py-10  px-10 rounded-xl bg-red-400'>
                    <h2 className='text-2xl font-semibold'>0</h2>
                    <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='h-40 w-[45%] py-10  px-10 rounded-xl bg-blue-400'>
                    <h2 className='text-2xl font-semibold'>0</h2>
                    <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='h-40 w-[45%] py-10  px-10 rounded-xl bg-green-400'>
                    <h2 className='text-2xl font-semibold'>0</h2>
                    <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='h-40 w-[45%] py-10  px-10 rounded-xl bg-yellow-400'>
                    <h2 className='text-2xl font-semibold'>0</h2>
                    <h3 className='text-xl font-medium'>New Task</h3>
            </div>

        </div>
    )
}

export default TaskListNumbers
