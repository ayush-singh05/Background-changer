import React, { useState } from 'react'
import './index.css'


const App = ( )=> {
    const [color,setColor] = useState("black");

    return (
        <div className='w-screen h-screen flex flex-col  mx-auto' style={{backgroundColor: color}}>
            <div className='flex justify-center'>
                <ul className='flex flex-wrap gap-5 bg-slate-100 rounded-full p-3 shadow-xl shadow-indigo-500/40 w-fit fixed bottom-2 text-white'>
                <li className='bg-black  px-5 py-2 font-semibold text-lg rounded-full cursor-pointer hover:shadow-md'
                    onClick={()=> setColor("#000000")}>Black</li>
                    <li className='bg-red-500 px-5 py-2 font-semibold text-lg rounded-full cursor-pointer hover:shadow-md'
                        onClick={()=> setColor("#EF4444")}>Red</li>
                    <li className='bg-blue-500 px-5 py-2 font-semibold text-lg rounded-full cursor-pointer hover:shadow-md'
                        onClick={()=> setColor("#3B82F6")}>Blue</li>
                    <li className='bg-pink-500 px-5 py-2 font-semibold text-lg rounded-full cursor-pointer hover:shadow-md'
                        onClick={()=> setColor("#EC4899")}>Pink</li>
                    <li className='bg-magenta px-5 py-2 font-semibold text-lg rounded-full cursor-pointer hover:shadow-md '
                        onClick={()=> setColor("magenta")}>Magenta</li>
                    <li className='bg-yellow-500 px-5 py-2 font-semibold text-lg rounded-full cursor-pointer hover:shadow-md'
                        onClick={()=> setColor("yellow")}>Yellow</li>
                    <li  className='bg-purpal px-5 py-2 font-semibold text-lg rounded-full cursor-pointer hover:shadow-md'
                        onClick={()=> setColor("#800080")}>Purpal</li>
                    <li className='bg-green-500 px-5 py-2 font-semibold text-lg rounded-full cursor-pointer hover:shadow-lg'
                        onClick={()=> setColor("#22C55E")}>Green</li>
                </ul>
            </div>
                

        </div>
    )
}
export default App;