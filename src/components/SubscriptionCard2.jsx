import React from 'react'

const SubscriptionCard2 = ({ title, price, recommended = false }) => {
    return (
        <div className='flex flex-col bg-neutral-800 px-6 py-8 rounded-3xl gap-6 text-neutral-500 max-w-80 border hover:border-gray-500 border-transparent hover:scale-105 transition-all duration-200'>
            <div className='flex flex-col gap-2'>
                <h4 className='capitalize text-green-400 font-bold'>{title}</h4>
                <h5 className='text-2xl font-bold'><span className='text-4xl text-white'>${price}</span>/mo</h5>
                <p className='capitalize'>upto <span className='text-green-400'>${Math.round(price/5)+5}K</span> referral ARR</p>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='first-letter:capitalize font-semibold text-white'>everthing in Free,Plus:</p>
                <div className='flex gap-4'>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    </span>
                    <p className='first-letter:capitalize break-words'>in brand customization and in-brand email design widget with menu integrations</p>
                </div>
            </div>
            {recommended && <button className='capitalize text-green-400 bg-green-300 self-center py-1 px-6 rounded-3xl font-bold bg-opacity-20 hover:bg-opacity-30'>recommended</button>}
        </div>
    )
}

export default SubscriptionCard2