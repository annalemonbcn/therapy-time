import { Image, View, StyleSheet } from 'react-native'
import Text from 'src/components/custom/customText'
import PageWrapper from 'src/components/custom/pageWrapper'
import { useUserContext } from 'src/context/UserProvider'
import { theme } from 'theme'
import ChangeLocationForm from './components/changeLocationForm'

const ChangeLocationScreen = () => (
  <PageWrapper centerVertically>
    <View style={styles.pageContainer}>
      <Image source={require('assets/location.png')} />
      <View style={styles.titleContainer}>
        <Text size="s5" fontWeight="semi-bold">
          Change your location
        </Text>
        <Text size="s3" textAlign="center">
          Set a new location to have a better experience.
        </Text>
      </View>
      <View style={styles.manualLocationContainer}>
        <ChangeLocationForm />
      </View>
    </View>
  </PageWrapper>
)

const styles = StyleSheet.create({
  pageContainer: {
    width: '100%',
    alignItems: 'center',
    gap: theme.space.xl,
    textAlign: 'center'
  },
  titleContainer: {
    alignItems: 'center',
    gap: theme.space.md
  },
  manualLocationContainer: {
    width: '100%',
    marginTop: theme.space.sm2,
    alignItems: 'center',
    gap: theme.space.md
  }
})

export default ChangeLocationScreen
