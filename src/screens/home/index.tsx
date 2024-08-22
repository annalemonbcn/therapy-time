import Location from './components/location'
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { getStatusBarHeight } from 'src/utils'
import HomeSearch from './components/search'
import { theme } from 'theme'
import StarredPost from './components/starredPost'
import CategoriesList from './components/categoriesList'
import NearDoctor from './components/nearDoctor'

const Home = () => (
  <PageWrapper>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.pageContainer}>
        <Location />
        <HomeSearch />
        <StarredPost />
        <CategoriesList />
        <NearDoctor />
      </View>
    </TouchableWithoutFeedback>
  </PageWrapper>
)

const styles = StyleSheet.create({
  pageContainer: {
    paddingTop: getStatusBarHeight(),
    gap: theme.space.lg
  }
})

export default Home
