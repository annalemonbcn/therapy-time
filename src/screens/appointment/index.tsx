import { View, StyleSheet } from 'react-native'
import CustomCalendar from 'src/components/custom/calendar'
import Text from 'src/components/custom/customText'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'

const Appointment = () => {
  return (
    <PageWrapper>
      <View style={styles.pageContainer}>
        <Text size="s4" fontWeight="semi-bold">
          Select Date
        </Text>
        <CustomCalendar saturdaysDisabled={false} />
      </View>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingTop: theme.space.md
  }
})

export default Appointment
