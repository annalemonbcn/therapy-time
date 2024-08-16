import Location from './components/location'
import TherapistsList from './components/therapistsList'
import { StyleSheet, View } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { getStatusBarHeight } from 'src/utils'
import HomeSearch from './components/search'
import { theme } from 'theme'

const Home = () => (
  <PageWrapper>
    <View style={styles.pageContainer}>
      <Location />
      <HomeSearch />
      {/* <TherapistsList /> */}
    </View>
  </PageWrapper>
)

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: getStatusBarHeight(),
    gap: theme.space.md
  }
})

export default Home
