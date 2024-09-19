import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { RootTabParamList } from 'types'
import Map from 'src/screens/map'
import ProfileScreen from 'src/screens/profile'
import LocationIcon from '../../components/icons/locationIcon'
import UserIcon from '../../components/icons/userIcon'
import HomeIcon from '../../components/icons/homeIcon'
import HomeNavigator from 'src/navigation/homeNavigator'
import TabBarIcon from './components/tabBarIcon'
import { theme } from 'theme'
import CalendarIcon from 'src/components/icons/calendarIcon'
import AppointmentsScreen from 'src/screens/appointmentsScreen'

const Tab = createBottomTabNavigator<RootTabParamList>()

const BottomTabBar = () => (
  <Tab.Navigator
    initialRouteName="TabHome"
    screenOptions={{
      tabBarShowLabel: false,
      headerShadowVisible: false,
      headerStyle: { backgroundColor: theme.colors.b50 }
    }}
  >
    <Tab.Screen
      name="TabHome"
      component={HomeNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={<HomeIcon size={20} />} />
      }}
    />
    <Tab.Screen
      name="TabMap"
      component={Map}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={<LocationIcon size={20} />} />
      }}
    />
    <Tab.Screen
      name="TabAppointments"
      component={AppointmentsScreen}
      options={{
        headerTitle: 'My Appointments',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={<CalendarIcon size={20} />} />
      }}
    />
    <Tab.Screen
      name="TabProfile"
      component={ProfileScreen}
      options={{
        headerTitle: 'Profile',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={<UserIcon size={20} />} />
      }}
    />
  </Tab.Navigator>
)

export default BottomTabBar
