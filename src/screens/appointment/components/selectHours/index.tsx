import { theme } from 'theme'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Text from 'src/components/custom/customText'
import AvailableHoursList from '../availableHoursList'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import { useFormContext } from 'react-hook-form'
import { BookingFormShape, RouteProp } from '../../types'

const SelectHours = () => {
  const { reset } = useFormContext<BookingFormShape>()

  return (
    <View style={styles.container}>
      <HorizontalContainer horizontalCenter="space-between" verticalCenter="center">
        <Text size="s4" fontWeight="semi-bold">
          Select Hour
        </Text>
        <TouchableOpacity onPress={() => reset({ hour: '' })}>
          <Text size="s2" color="b500">
            Cancel
          </Text>
        </TouchableOpacity>
      </HorizontalContainer>
      <AvailableHoursList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: theme.space.xl
  }
})

export default SelectHours
