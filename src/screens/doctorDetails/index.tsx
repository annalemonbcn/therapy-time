import { ScrollView, StyleSheet, View } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import TherapistCard from '../../components/therapistCard'
import AboutMe from './components/aboutMe'
import { theme } from 'theme'
import WorkingTime from './components/workingTime'
import Reviews from './components/reviews'
import Button from 'src/components/custom/customButton'
import FeaturesList from './components/featuresList'
import { DoctorDetailsProps } from './types'
import NoData from './components/noData'
import { getDoctorDetails } from 'src/utils/doctors'
import { useNavigate } from 'src/hooks'

const DoctorDetails = ({ route }: DoctorDetailsProps) => {
  const { id } = route.params

  const therapist = getDoctorDetails(id)

  if (!therapist) return <NoData />

  const navigation = useNavigate()

  return (
    <PageWrapper>
      <ScrollView contentContainerStyle={styles.pageContainer}>
        <TherapistCard therapist={therapist} imgSize={70} />
        <View style={styles.specs}>
          <FeaturesList />
          <AboutMe description={therapist.basicInfo.description} />
          <WorkingTime workingTime={therapist.sessionInfo.workingSchedule} />
          <Reviews reviews={therapist.reviews.reviews} />
        </View>
        <View style={styles.buttonContainer}>
          <Button primary onPress={() => navigation.navigate('Appointment', { therapistId: therapist.basicInfo.id })}>
            Book appointment
          </Button>
        </View>
      </ScrollView>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingTop: theme.space.sm2
  },
  specs: {
    gap: theme.space.md,
    paddingVertical: theme.space.md
  },
  buttonContainer: {
    marginVertical: theme.space.lg
  }
})

export default DoctorDetails
