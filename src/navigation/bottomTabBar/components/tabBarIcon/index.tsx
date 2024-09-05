import ActiveIcon from 'src/components/activeIcon'

const TabBarIcon = ({ focused, icon }: { focused: boolean; icon: JSX.Element }) =>
  focused ? <ActiveIcon>{icon}</ActiveIcon> : icon

export default TabBarIcon
