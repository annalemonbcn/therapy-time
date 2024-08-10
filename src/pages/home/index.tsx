import Location from './components/location'
import Heading from './components/heading'
import TherapistsList from './components/therapistsList'
import { StyleSheet, View } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { getStatusBarHeight } from 'src/utils'

const Home = () => {
  return (
    <PageWrapper>
      <View style={styles.pageContainer}>
        <Location />
        <Heading />
        <TherapistsList />
      </View>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: getStatusBarHeight()
  }
})

export default Home
