import { StyleSheet, View } from 'react-native'
import Text from 'src/components/custom/customText'
import { IWorkingTimeProps } from './types'
import { theme } from 'theme'

function generateDaysString(items: string[]) {
  let result = ''

  for (let i = 0; i < items.length; i++) {
    result += items[i]

    if (i < items.length - 1) {
      result += ', '
    }
  }

  return result
}

const WorkingTime = ({ workingTime }: IWorkingTimeProps) => {
  const days = generateDaysString(workingTime.workingDays)

  const formattedHours = `${days}, ${workingTime.startHour}h-${workingTime.finishHour}h`

  return (
    <View style={styles.container}>
      <Text size="s4" fontWeight="semi-bold" color="b800">
        Working time
      </Text>
      <Text size="s2" color="b500">
        {formattedHours}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: theme.space.sm2
  }
})

export default WorkingTime
