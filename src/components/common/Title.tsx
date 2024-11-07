type Props = {
  title: string
}

const Title = ({ title }: Props) => {
  return <h1 className='text-3xl font-bold text-blue-800'>{title}</h1>
}

export default Title
