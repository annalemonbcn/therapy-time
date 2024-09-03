import { StyleSheet, View } from 'react-native'
import HourTag from './components/hourTag'
import { theme } from 'theme'
import { useFormContext } from 'react-hook-form'
import { BookingFormShape, RouteProp } from '../../types'
import { useAvailableHoursList } from './hooks'

const AvailableHoursList = () => {
  const { watch } = useFormContext<BookingFormShape>()

  const hoursArr = useAvailableHoursList()

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
    rowGap: theme.space.md,
    justifyContent: 'space-between'
  }
})

export default AvailableHoursList
