import React from 'react'
import CenteredNavbar from './CenteredNavbar'
import Button from './Button'
import OutlinedButton from './OutlinedButton'
import LinkedlnNavbar from './LinkedlnNavbar'
import SubscriptionCard1 from './SubscriptionCard1'
import SubscriptionCard2 from './SubscriptionCard2'

const App = () => {
  return (
    <div className='flex flex-col my-3 gap-8 p-2'>
      {/* navbars */}
      <CenteredNavbar />
      <CenteredNavbar dark={true} />
      <LinkedlnNavbar />
      <LinkedlnNavbar dark={true} />
      {/* subscription cards-1 */}
      <div className='flex gap-5 justify-center flex-wrap bg-neutral-900 px-2 py-6'>
        <SubscriptionCard2 title={'free'} price={0} />
        <SubscriptionCard2 title={'grow'} price={350} recommended={true} />
        <SubscriptionCard2 title={'scale'} price={750} />
      </div>
      {/* subscription cards-2 */}
      <div className='flex gap-4 justify-center flex-wrap'>
      <SubscriptionCard1 title={'basic plan'} price={10} />
      <SubscriptionCard1 dark={true} popular={true} title={'business plan'} price={20} />
      <SubscriptionCard1 title={'enterprise plan'} price={40} />
      </div>
    </div>
  )
}

export default App