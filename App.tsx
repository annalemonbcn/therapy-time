import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { useGetUserLocation, useGetUuid, useLoadInitialConfig } from 'src/hooks'
import AllowLocationScreen from 'src/screens/allowLocationScreen'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabBar from 'src/navigation/bottomTabBar'
import { Provider, useSelector } from 'react-redux'
import { RootState, store } from 'src/store'
import AuthNavigator from 'src/navigation/authNavigator'
import { NotifierWrapper } from 'react-native-notifier'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MenuProvider } from 'react-native-popup-menu'
import FillProfileScreen from 'src/screens/fillProfile'
import { useGetNameQuery } from 'src/services/user'

const MainNavigator = () => {
  const user = useSelector((state: RootState) => state.user.user.basicInfo.tokenId)

  return <>{user ? <AppDisplay /> : <AuthNavigator />}</>
}

const AppDisplay = () => {
  const uuid = useGetUuid()
  const { data: name, isFetching } = useGetNameQuery({ uuid })

  if (isFetching) return

  return <>{name ? <ShowBottomTabBar /> : <FillProfileScreen />}</>
}

const ShowBottomTabBar = () => {
  const userLocation = useGetUserLocation()

  return <>{userLocation ? <BottomTabBar /> : <AllowLocationScreen />}</>
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
        <MenuProvider>
          <Provider store={store}>
            <NavigationContainer>
              <MainNavigator />
            </NavigationContainer>
          </Provider>
        </MenuProvider>
      </NotifierWrapper>
    </GestureHandlerRootView>
  )
}

export default App
