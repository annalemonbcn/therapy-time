import Location from './components/location'
import Heading from './components/heading'
import TherapistsList from './components/therapistsList'
import { ScrollView, StyleSheet, View } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { getStatusBarHeight } from 'src/utils'
import { ModalProvider } from 'src/context/useModalController'

const Home = () => (
  <PageWrapper>
    <ScrollView style={styles.pageContainer}>
      <Location />
      <Heading />
      <ModalProvider>
        <TherapistsList />
      </ModalProvider>
    </ScrollView>
  </PageWrapper>
)

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: getStatusBarHeight()
  }
})

export default Home
