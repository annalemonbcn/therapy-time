import { StyleSheet, View } from 'react-native'
import HourTag from './components/hourTag'
import { theme } from 'theme'
import { useFormContext } from 'react-hook-form'
import { BookingFormShape } from '../../types'
import { useEffect } from 'react'

const AvailableHoursList = () => {
  const { watch } = useFormContext<BookingFormShape>()

  const hoursArr = ['09.00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '13:00 PM', '16:00 PM', '17:00 PM']

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
