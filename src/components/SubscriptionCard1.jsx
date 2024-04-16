import React from 'react'

const SubscriptionCard1 = ({ popular, title, price, dark = false }) => {
    return (
        <div className={`${dark ? 'bg-gray-900' : 'bg-white'} rounded-2xl text-slate-500 min-w-80 shadow`}>
            {/* first section-price description */}
            <section className={`flex flex-col gap-5 p-6 border-b-[1px] ${dark ? 'border-slate-500' : 'border-slate-200'}`}>
                <div className={'flex justify-between items-center'}>
                    <h5 className={`${dark ? 'text-lime-400' : 'text-slate-900'} first-letter:capitalize font-bold`}>{title}</h5>
                    {popular && <button className={`text-gray-900  py-1 px-3 inline-flex bg-lime-400 capitalize font-semibold text-xs rounded-xl`}>popular</button>}
                </div>
                <div className='flex gap-2'>
                    <span className={`${dark ? 'text-white' : 'text-slate-900'} text-5xl  font-semibold`}>${price}</span>
                    <div className='text-sm font-semibold self-end'>per user<br />per month</div>
                </div>
                <p className='first-letter:capitalize text-sm font-semibold'>creating teams with upto 20 users</p>
                <div className={'flex flex-col gap-2'}>
                    <button className={`py-2 ${dark ? 'bg-lime-400 text-gray-900' : 'bg-slate-900 text-white'} first-letter:capitalize rounded-md shadow font-semibold`}>get started</button>
                    <button className='py-2 bg-white text-gray-900 first-letter:capitalize rounded-md shadow font-semibold'>chat to start</button>
                </div>
            </section>
             {/* second section-feature description */}
            <section className={'flex flex-col gap-4 p-6'}>
                <div>
                    <h5 className={`uppercase ${dark ? 'text-white' : 'text-slate-900'} font-semibold`}>features</h5>
                    <p className='first-letter:capitalize'>everthing in basic plus...</p>
                </div>
                {/* feature list */}
                <ul className='flex flex-col gap-2 text-sm font-semibold'>
                    <li className='flex items-center gap-2 first-letter:capitalize'><span className='text-lime-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clipRule="evenodd" />
                    </svg></span> 200+ integrations
                    </li>
                    <li className='flex items-center gap-2'><span className='text-lime-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clipRule="evenodd" />
                    </svg></span>Advanced reporting and analytics
                    </li>
                    <li className='flex items-center gap-2'><span className='text-lime-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clipRule="evenodd" />
                    </svg></span>Upto 20 individual users
                    </li>
                    <li className='flex items-center gap-2'><span className='text-lime-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clipRule="evenodd" />
                    </svg></span>4000 individual data each day
                    </li>
                    <li className='flex items-center gap-2'><span className='text-lime-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clipRule="evenodd" />
                    </svg></span>Priority chat and email support
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default SubscriptionCard1