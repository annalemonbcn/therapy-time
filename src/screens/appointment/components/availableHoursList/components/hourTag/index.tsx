import { StyleSheet, TouchableOpacity } from 'react-native'
import { theme } from 'theme'
import Text from 'src/components/custom/customText'
import { IHourTagProps } from './types'
import { useFormContext } from 'react-hook-form'
import { BookingFormShape } from 'src/screens/appointment/types'

const HourTag = ({ hour, isSelected = false }: IHourTagProps) => {
  const { setValue } = useFormContext<BookingFormShape>()

  return (
    <TouchableOpacity
      style={[styles.tag, isSelected ? styles.isSelected : styles.isNotSelected]}
      onPress={() => setValue('hour', hour)}
    >
      <Text color={isSelected ? 'b0' : 'b500'} fontWeight="semi-bold" size="s2">
        {hour}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tag: {
    borderRadius: theme.borders.radius.sm,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    maxWidth: 120
  },
  isSelected: {
    backgroundColor: theme.colors.main
  },
  isNotSelected: {
    backgroundColor: theme.colors.b100
  }
})

export default HourTag
