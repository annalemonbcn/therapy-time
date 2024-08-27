import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeRootStackParamList } from './types'
import Home from '../../screens/home'
import DoctorDetails from 'src/screens/doctorDetails'
import DoctorsDisplay from 'src/screens/doctorsDisplay'
import { TagsEnum } from 'src/data/types'
import { TouchableOpacity } from 'react-native'
import ArrowIcon from 'src/components/icons/arrowIcon'

const Stack = createNativeStackNavigator<HomeRootStackParamList>()

const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={({ navigation, route }) => ({
      headerLeft: ({ canGoBack }) => {
        if (!canGoBack) return null
        return (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowIcon />
          </TouchableOpacity>
        )
      },
      headerShadowVisible: false
    })}
  >
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Stack.Screen
      name="Doctors Display"
      component={DoctorsDisplay}
      initialParams={{ category: TagsEnum.All }}
      // options={({ route }) => ({
      //   title: `${route.params.category} Doctors`
      // })}
      options={{ title: 'Doctors List' }}
    />
    <Stack.Screen name="Doctor Details" component={DoctorDetails} />
  </Stack.Navigator>
)

export default HomeNavigator
