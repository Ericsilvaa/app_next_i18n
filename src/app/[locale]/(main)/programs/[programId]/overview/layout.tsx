const ProgramsLayout = ({
  children,
  subscribe,
  related
}: {
  children: React.ReactNode
  subscribe: React.ReactNode
  related: React.ReactNode
}) => {
  return (
    <div className='max-w-5xl mx-auto flex flex-col px-6 py-12'>
      {children}
      {subscribe}
      {related}
    </div>
  )
}

export default ProgramsLayout
