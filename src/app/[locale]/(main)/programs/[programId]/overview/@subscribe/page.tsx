import Subscribe from '@/components/forms/SubscribeProgramForm'
import ProgramDetails from '@/components/ProgramDetails'

const ProgramPage = () => {
  return (
    <div className='flex flex-col md:flex-row max-w-6xl mx-auto py-6 space-y-6 md:space-y-0 md:space-x-6'>
      <div className='flex-1 p-4 '>
        <Subscribe />
      </div>

      <div className='flex-1 p-4 '>
        <ProgramDetails />
      </div>
    </div>
  )
}

export default ProgramPage
