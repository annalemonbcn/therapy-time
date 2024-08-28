import { View, StyleSheet } from 'react-native'
import Text from 'src/components/custom/customText'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'

const Appointment = () => {
  return (
    <PageWrapper>
      <View style={styles.pageContainer}>
        <Text>Appointment</Text>
      </View>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingTop: theme.space.sm2
  }
})

export default Appointment
