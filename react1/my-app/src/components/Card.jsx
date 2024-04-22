import React, { useState } from 'react'

function Card({ imag, name, profession }) {
    const [isShown, setIsShown] = useState(false);
    function handleEnter() {
        setIsShown(true)
    }
    function handleLeave() {
        setIsShown(false)
    }
    return (
        <div className='w-52 bg-white '>


            {/* {!isShown ? (<div className='w-full h-32 bg-sky-200' onMouseEnter={handleEnter} >
                <img className='object-center' src={imag} />
            </div>) : (<div className='w-2xl h-128 bg-sky-200' onMouseLeave={handleLeave} >
                <img className='object-center' src={imag} />
            </div>)} */}

            <div>
                {!isShown ? (<img src={imag} alt={name} className='w-full h-64 md:transition-all' onMouseEnter={handleEnter} />) : <img className='w-full h-128' src={imag} onMouseLeave={handleLeave} />}
            </div>

            <div className='w-full p-3'>
                <h1 className='text-xl font-semibold'>{name}</h1>
                <h5 className='text-xs'>{profession}</h5>
                <button onClick={() => alert("adding alert")} className='px-3 py-1 text-xs text-white bg-blue-500
            font-semibold'>Add frend</button>

            </div>

        </div>
    )
}

export default Card;