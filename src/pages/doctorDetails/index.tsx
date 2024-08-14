import { ScrollView, StyleSheet } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { getStatusBarHeight } from 'src/utils'
import TopNavigation from './components/topNavigation'
import TherapistCard from '../home/components/therapistCard'
import { mockTherapists } from 'src/data/mock.data'

const DoctorDetails = () => {
  // FLOW
  // 1. Get therapistId from params
  // 2. Fetch therapist info
  // 3. Send therapist info to TherapistCard

  const therapist = mockTherapists[2]

  return (
    <PageWrapper>
      <ScrollView style={styles.pageContainer}>
        <TopNavigation />
        <TherapistCard therapist={therapist} imgSize={70} />
      </ScrollView>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: getStatusBarHeight()
  }
})

export default DoctorDetails
