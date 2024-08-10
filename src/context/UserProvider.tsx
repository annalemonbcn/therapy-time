import { Children, createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react'

interface UserLocationState {
  userLocation?: string
}

interface UserContextType {
  userLocation: UserLocationState['userLocation']
  setUserLocation: Dispatch<SetStateAction<UserLocationState['userLocation']>>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

const UserProvider = ({ children }: PropsWithChildren) => {
  const [userLocation, setUserLocation] = useState<string | undefined>(undefined)

  return <UserContext.Provider value={{ userLocation, setUserLocation }}>{children}</UserContext.Provider>
}

const useUserContext = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
}

export { UserProvider, useUserContext }
