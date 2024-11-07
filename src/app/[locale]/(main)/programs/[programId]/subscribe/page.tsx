import Subscribe from '@/components/forms/SubscribeProgramForm'
import ProgramDetails from '@/components/ProgramDetails'

const ProgramPage = () => {
  return (
    <div className='grid grid-cols-2 max-w-6xl py-6'>
      <Subscribe />

      <div className='px-3 py-6'>
        <ProgramDetails />
      </div>
    </div>
  )
}

export default ProgramPage
