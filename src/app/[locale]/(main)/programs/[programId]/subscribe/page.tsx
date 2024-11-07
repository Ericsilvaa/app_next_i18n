import Subscribe from '@/components/forms/SubscribeProgramForm'
import ProgramDetails from '@/components/ProgramDetails'

const ProgramPage = () => {
  return (
    <div className='flex max-w-6xl mx-auto p-6 space-x-6'>
      <div className='flex-1'>
        <Subscribe />
      </div>

      <div className='flex-1'>
        <ProgramDetails showBackLink={false} />
      </div>
    </div>
  )
}

export default ProgramPage
