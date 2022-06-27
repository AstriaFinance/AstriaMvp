import React from 'react'

const Home = () => {
  return (
    <div>
        <h1 className='text-5xl flex items-center justify-center'>Astria Finance MVP</h1>
    <div className=' items-center justify-center h-64 w-1/2 rounded-xl mx-80 bg-blue-900 mt-20 shadow-xl'>
        <div className='mx-3'>DEPOSIT</div>
        <input type="text" className='rounded hover:bg-purple-900' />
        <div className='mx-3'>Borrow</div>
        <input type="text" className='rounded hover:bg-purple-900' />
        <div className='mx-3'>Borrow To</div>
        <input type="text" className='rounded hover:bg-purple-900' />
    </div>
    </div>
  )
}

export default Home