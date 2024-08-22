import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeRootStackParamList } from './types'
import Home from '../../screens/home'
import DoctorDetails from 'src/screens/doctorDetails'
import DoctorsList from 'src/screens/doctorsList'
import { TagsEnum } from 'src/data/types'

const Stack = createNativeStackNavigator<HomeRootStackParamList>()

const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Doctors List" component={DoctorsList} initialParams={{ category: TagsEnum.All }} />
    <Stack.Screen name="Doctor Details" component={DoctorDetails} />
  </Stack.Navigator>
)

export default HomeNavigator
