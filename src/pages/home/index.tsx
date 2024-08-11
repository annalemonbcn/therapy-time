import Location from './components/location'
import Heading from './components/heading'
import TherapistsList from './components/therapistsList'
import { StyleSheet, View } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { getStatusBarHeight } from 'src/utils'
import { ModalProvider } from 'src/context/useModalController'

const Home = () => (
  <PageWrapper>
    <View style={styles.pageContainer}>
      <Location />
      <Heading />
      <ModalProvider>
        <TherapistsList />
      </ModalProvider>
    </View>
  </PageWrapper>
)

const styles = StyleSheet.create({
  pageContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: getStatusBarHeight()
  }
})

export default Home
