import { ScrollView, StyleSheet } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'
import Text from 'src/components/custom/customText'

const DoctorsList = () => (
  <PageWrapper>
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <Text>Filtered Doctors list here</Text>
    </ScrollView>
  </PageWrapper>
)

const styles = StyleSheet.create({
  pageContainer: {
    paddingTop: theme.space.sm2
  }
})

export default DoctorsList
