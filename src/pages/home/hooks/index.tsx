import { useState } from 'react'
import { SessionType } from 'src/data/types'

const useSessionType = () => {
  const [sessionType, setSessionType] = useState<SessionType>('online')

  return {
    sessionType,
    setSessionType
  }
}

export { useSessionType }
