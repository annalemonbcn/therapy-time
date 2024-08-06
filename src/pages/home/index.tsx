import Location from './components/location'
import Heading from './components/heading'
import TherapistsList from './components/therapistsList'
import { useSessionType } from './hooks'
import { useEffect } from 'react'

const Home = () => {
  const { sessionType, setSessionType } = useSessionType()

  return (
    <>
      <Location />
      <Heading setSessionType={setSessionType} />
      <TherapistsList sessionType={sessionType} />
    </>
  )
}

export default Home
