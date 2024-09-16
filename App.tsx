import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { useLoadInitialConfig } from 'src/hooks'
import { UserProvider, useUserContext } from 'src/context/UserProvider'
import AllowLocationScreen from 'src/screens/allowLocationScreen'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabBar from 'src/navigation/bottomTabBar'
import { Provider, useSelector } from 'react-redux'
import { RootState, store } from 'src/store'
import AuthNavigator from 'src/navigation/authNavigator'
import { NotifierWrapper } from 'react-native-notifier'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export const AppDisplay = () => {
  const { userLocation } = useUserContext()

  if (!userLocation) return <AllowLocationScreen />

  return <BottomTabBar />
}

const MainNavigator = () => {
  const user = useSelector((state: RootState) => state.user.user.basicInfo.uuid)
  const userEmail = useSelector((state: RootState) => state.user.user.basicInfo.email)

  return <>{user ? <AppDisplay /> : <AuthNavigator />}</>
}

const App = () => {
  const { loaded, error } = useLoadInitialConfig()

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) return null

  return (
    <GestureHandlerRootView>
      <NotifierWrapper>
        <Provider store={store}>
          <NavigationContainer>
            <UserProvider>
              <MainNavigator />
            </UserProvider>
          </NavigationContainer>
        </Provider>
      </NotifierWrapper>
    </GestureHandlerRootView>
  )
}

export default App
