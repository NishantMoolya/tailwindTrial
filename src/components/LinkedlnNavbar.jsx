import React from 'react'

const LinkedlnNavbar = ({ dark=false }) => {
    return (
        <nav className={`flex ${dark?'bg-cyan-900':'bg-white'} justify-between py-3 px-4 shadow rounded-sm flex-wrap`}>
            <section className='flex items-center gap-3 flex-wrap'>
                <h5 className={`${dark?'text-white':'text-sky-600'} font-bold flex items-center`}>Linked<span className={`${dark?'text-cyan-900 bg-white':'text-white bg-sky-600'} ml-[1.5px] px-[2px] h-5 inline-flex items-center rounded-[1px]`}>in</span></h5>
                <div className={`flex items-center border-2 ${dark?'border-cyan-900':'border-sky-600'} px-2 rounded-sm bg-white`}>
                    <span className={`${dark?'text-cyan-900':'text-sky-600'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <input type="text" placeholder='Rechercher' className={`${dark?'placeholder:text-cyan-900 text-cyan-900':'placeholder:text-sky-600 text-sky-600'} p-1 text-xs font-medium border-none outline-none`} />
                </div>
            </section>
            <ul className={`flex gap-5 ${dark?'text-white':'text-cyan-900'} flex-wrap`}>
                <li className={`flex items-center gap-1 capitalize text-xs font-semibold p-2 ${dark?'bg-white text-cyan-900':'bg-cyan-900 text-white'}`}><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                    <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
                </svg>
                </span>accueil</li>
                <li className='flex items-center gap-1 capitalize text-xs font-semibold'><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                    <path d="M8 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.156 11.763c.16-.629.44-1.21.813-1.72a2.5 2.5 0 0 0-2.725 1.377c-.136.287.102.58.418.58h1.449c.01-.077.025-.156.045-.237ZM12.847 11.763c.02.08.036.16.046.237h1.446c.316 0 .554-.293.417-.579a2.5 2.5 0 0 0-2.722-1.378c.374.51.653 1.09.813 1.72ZM14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 13c-.552 0-1.013-.455-.876-.99a4.002 4.002 0 0 1 7.753 0c.136.535-.324.99-.877.99H5Z" />
                </svg>
                </span>reseau</li>
                <li className='flex items-center gap-1 capitalize text-xs font-semibold'><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                    <path d="M12 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-1ZM6.5 6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6ZM2 9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9Z" />
                </svg>
                </span>emplois</li>
                <li className='flex items-center gap-1 capitalize text-xs font-semibold'><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                </span>messegerie</li>
                <li className={`flex items-center gap-1 capitalize text-xs font-semibold ${dark?'text-white':'text-sky-600'}`}><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12 5a4 4 0 0 0-8 0v2.379a1.5 1.5 0 0 1-.44 1.06L2.294 9.707a1 1 0 0 0-.293.707V11a1 1 0 0 0 1 1h2a3 3 0 1 0 6 0h2a1 1 0 0 0 1-1v-.586a1 1 0 0 0-.293-.707L12.44 8.44A1.5 1.5 0 0 1 12 7.38V5Zm-5.5 7a1.5 1.5 0 0 0 3 0h-3Z" clipRule="evenodd" />
                </svg>
                </span><span className='w-8 h-8 bg-slate-200 rounded-full'></span></li>
                <li className={`flex items-center gap-1 capitalize text-xs font-semibold ${dark?'text-white':'text-sky-600'} underline`}>essai premium<br></br>free 01 mois</li>
            </ul>
        </nav>
    )
}

export default LinkedlnNavbar