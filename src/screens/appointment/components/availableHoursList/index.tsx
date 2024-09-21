import { StyleSheet, View } from 'react-native'
import HourTag from './components/hourTag'
import { theme } from 'theme'
import { useWatch } from 'react-hook-form'
import { useAvailableHoursList } from './hooks'
import Text from 'src/components/custom/customText'

const AvailableHoursList = () => {
  const hoursArr = useAvailableHoursList()

  if (!hoursArr) return <Text>Something went wrong. Please try again.</Text>

  if (hoursArr.length === 0)
    return (
      <View style={styles.textContainer}>
        <Text>There are no appointments available for today.</Text>
        <Text>Please, select another date.</Text>
      </View>
    )

  return (
    <View style={styles.container}>
      {hoursArr.map((hour, idx) => (
        <View key={idx} style={{ width: '25%' }}>
          <HourTag hour={hour} isSelected={hour === useWatch({ name: 'hour' })} />
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: theme.space.md,
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: theme.space.md,
    columnGap: theme.space.sm,
    justifyContent: 'flex-start'
  },
  textContainer: {
    marginTop: theme.space.md
  }
})

export default AvailableHoursList
