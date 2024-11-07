'use client'
import EventDetails from '@/components/details/EventDetails'
import EventForm from '@/components/forms/EventForm'

const SubscribePage = () => {
  return (
    <div className='flex'>
      <div className='w-1/2 p-6'>
        <EventForm />
      </div>
      <div className='w-1/2 p-6'>
        <EventDetails />
      </div>
    </div>
  )
}

export default SubscribePage
