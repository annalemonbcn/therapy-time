import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { RootTabParamList } from 'types'
import Map from 'src/screens/map'
import Profile from 'src/screens/profile'
import LocationIcon from '../../components/icons/locationIcon'
import UserIcon from '../../components/icons/userIcon'
import HomeIcon from '../../components/icons/homeIcon'
import HomeNavigator from 'src/navigation/homeNavigator'
import StarIcon from 'src/components/icons/starIcon'
import ActiveIcon from 'src/components/activeIcon'

const Tab = createBottomTabNavigator<RootTabParamList>()

const BottomTabBar = () => (
  <Tab.Navigator
    initialRouteName="TabHome"
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false
    }}
  >
    <Tab.Screen
      name="TabHome"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ focused }) =>
          focused ? (
            <ActiveIcon>
              <HomeIcon size={20} />
            </ActiveIcon>
          ) : (
            <HomeIcon size={20} />
          )
      }}
    />
    <Tab.Screen
      name="TabMap"
      component={Map}
      options={{
        tabBarIcon: ({ focused }) =>
          focused ? (
            <ActiveIcon>
              <LocationIcon size={20} />
            </ActiveIcon>
          ) : (
            <LocationIcon size={20} />
          )
      }}
    />
    <Tab.Screen
      name="TabProfile"
      component={Profile}
      options={{
        tabBarIcon: ({ focused }) =>
          focused ? (
            <ActiveIcon>
              <UserIcon size={20} />
            </ActiveIcon>
          ) : (
            <UserIcon size={20} />
          )
      }}
    />
  </Tab.Navigator>
)

export default BottomTabBar
