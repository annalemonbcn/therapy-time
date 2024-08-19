import Location from './components/location'
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { getStatusBarHeight } from 'src/utils'
import HomeSearch from './components/search'
import { theme } from 'theme'
import StarredPost from './components/starredPost'
import Categories from './components/categories'
import NearDoctor from './components/nearDoctor'

const Home = () => (
  <PageWrapper>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.pageContainer}>
        <Location />
        <HomeSearch />
        <StarredPost />
        <Categories />
        <NearDoctor />
      </View>
    </TouchableWithoutFeedback>
  </PageWrapper>
)

const styles = StyleSheet.create({
  pageContainer: {
    // marginTop: getStatusBarHeight(),
    gap: theme.space.lg
  }
})

export default Home
