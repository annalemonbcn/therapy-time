import { StyleSheet, View } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { getStatusBarHeight } from 'src/utils'
import TopNavigation from './components/topNavigation'
import TherapistCard from '../../components/therapistCard'
import { useDoctorDetails } from './hooks'
import AboutMe from './components/aboutMe'
import { theme } from 'theme'
import WorkingTime from './components/workingTime'
import Reviews from './components/reviews'
import Button from 'src/components/custom/customButton'
import FeaturesList from './components/featuresList'
import { IDoctorDetailsProps } from './types'
import NoData from './components/noData'

const DoctorDetails = ({ id }: IDoctorDetailsProps) => {
  const therapist = useDoctorDetails(id)

  if (!therapist) return <NoData />

  return (
    <PageWrapper>
      <View style={styles.pageContainer}>
        {/* <TopNavigation /> */}
        <TherapistCard therapist={therapist} imgSize={70} />
        <View style={styles.specs}>
          <FeaturesList />
          <AboutMe description={therapist.basicInfo.description} />
          <WorkingTime workingTime={therapist.sessionInfo.workingSchedule} />
          <Reviews reviews={therapist.reviews.reviews} />
        </View>
        <View style={styles.buttonContainer}>
          <Button primary onPress={() => console.error('book appointment button pressed')}>
            Book appointment
          </Button>
        </View>
      </View>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: getStatusBarHeight(),
    position: 'relative'
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
