import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import Home from './src/screens/home'
import { useLoadInitialConfig } from 'src/hooks'
import { UserProvider, useUserContext } from 'src/context/UserProvider'
import LocationScreen from 'src/screens/locationScreen'
import DoctorDetails from 'src/screens/doctorDetails'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from 'types'
import { theme } from 'theme'
import { TouchableOpacity } from 'react-native'

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppDisplay = () => {
  const { userLocation } = useUserContext()

  if (!userLocation) return <LocationScreen />

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: theme.colors.main,
        headerBackTitleVisible: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Doctor Details"
        component={DoctorDetails}
        options={{
          title: 'Details'
        }}
      />
    </Stack.Navigator>
  )
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
    <NavigationContainer>
      <UserProvider>
        <AppDisplay />
      </UserProvider>
    </NavigationContainer>
  )
}

export default App
