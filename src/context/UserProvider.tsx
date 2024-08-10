import { Children, createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react'
import { SessionType } from 'src/data/types'

interface UserLocationState {
  userLocation?: string
}
interface SessionTypeState {
  sessionType: SessionType
}
interface UserContextType {
  userLocation: UserLocationState['userLocation']
  setUserLocation: Dispatch<SetStateAction<UserLocationState['userLocation']>>
  sessionType: SessionTypeState['sessionType']
  setSessionType: Dispatch<SetStateAction<SessionTypeState['sessionType']>>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

const UserProvider = ({ children }: PropsWithChildren) => {
  const [userLocation, setUserLocation] = useState<string | undefined>(undefined)
  const [sessionType, setSessionType] = useState<SessionType>('online')

  return (
    <UserContext.Provider value={{ userLocation, setUserLocation, sessionType, setSessionType }}>
      {children}
    </UserContext.Provider>
  )
}

const useUserContext = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
}

export { UserProvider, useUserContext }
