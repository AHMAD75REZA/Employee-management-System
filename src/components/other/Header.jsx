import React from 'react'

function Header() {
    return (
        <div className='flex  justify-between items-center bg-[#1c1c1c] text-white m-5 p-5 '>

            <h1>Hello <br /> Ahmad </h1>
            <button className='bg-red-500 text-white px-5 py-2 rounded' >Log out</button>
        </div>
    )
}

export default Header
