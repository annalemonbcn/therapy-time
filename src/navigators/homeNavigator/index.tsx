import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './types'
import Home from '../../screens/home'
import DoctorDetails from 'src/screens/doctorDetails'

const Stack = createNativeStackNavigator<RootStackParamList>()

const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Doctor Details" component={DoctorDetails} />
  </Stack.Navigator>
)

export default HomeNavigator