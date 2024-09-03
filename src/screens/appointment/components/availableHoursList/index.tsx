import { StyleSheet, View } from 'react-native'
import HourTag from './components/hourTag'
import { theme } from 'theme'
import { useFormContext } from 'react-hook-form'
import { BookingFormShape, RouteProp } from '../../types'
import { useAvailableHoursList } from './hooks'
import Text from 'src/components/custom/customText'

const AvailableHoursList = () => {
  const { watch } = useFormContext<BookingFormShape>()

  const hoursArr = useAvailableHoursList()

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
        <HourTag key={idx} hour={hour} isSelected={hour === watch('hour')} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: theme.space.md,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.space.md,
    justifyContent: 'flex-start'
  },
  textContainer: {
    marginTop: theme.space.md
  }
})

export default AvailableHoursList
