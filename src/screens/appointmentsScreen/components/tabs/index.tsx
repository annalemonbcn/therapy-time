import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Text from 'src/components/custom/customText'
import { theme } from 'theme'
import { Tabs } from '../../types'

const Title = ({ title, isActive = false }: { title: string; isActive?: boolean }) => (
  <Text fontWeight="semi-bold" color={isActive ? 'main' : 'b400'} style={styles.text}>
    {title}
  </Text>
)

const TabsNavigator = ({
  selectedTab,
  setSelectedTab
}: {
  selectedTab: Tabs
  setSelectedTab: React.Dispatch<React.SetStateAction<Tabs>>
}) => {
  const titles = ['Upcoming', 'Completed', 'Canceled']

  return (
    <View style={styles.container}>
      {titles.map((title, idx) => (
        <TouchableOpacity onPress={() => setSelectedTab(title.toLowerCase() as Tabs)} key={idx}>
          <Title title={title} isActive={selectedTab === title.toLowerCase()} />
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginTop: theme.space.lg,
    marginBottom: theme.space.md,
    marginHorizontal: 'auto'
  },
  text: {
    borderBottomWidth: 3,
    borderBottomColor: theme.colors.main,
    borderStyle: 'solid',
    paddingBottom: 12
  }
})
