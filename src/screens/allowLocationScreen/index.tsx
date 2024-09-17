import { Image, StyleSheet, View } from 'react-native'
import Button from 'src/components/custom/customButton'
import Text from 'src/components/custom/customText'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'
import LocationForm from './components/locationForm'
import { useDispatch } from 'react-redux'
import { setUserLocation } from 'src/features/user/userSlice'

const AllowLocationScreen = () => {
  const dispatch = useDispatch()

  // TODO: mock behavior
  const handleSetLocation = () => dispatch(setUserLocation('Barcelona'))

  return (
    <PageWrapper justifyContent="center">
      <View style={styles.pageContainer}>
        <Image source={require('assets/location.png')} />
        <View style={styles.titleContainer}>
          <Text size="s5" fontWeight="semi-bold">
            Allow your location
          </Text>
          <Text size="s3" textAlign="center">
            We will need your location to have a better experience.
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button primary onPress={handleSetLocation}>
            Sure, I'd like that
          </Button>
          <View style={styles.manualLocationContainer}>
            <Text size="s2">or enter it manually</Text>
            <LocationForm />
          </View>
        </View>
      </View>
    </PageWrapper>
  )
}

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
  buttonsContainer: {
    width: '100%',
    marginTop: theme.space.md,
    gap: theme.space.md
  },
  manualLocationContainer: {
    width: '100%',
    marginTop: theme.space.lg,
    alignItems: 'center',
    gap: theme.space.md
  }
})

export default AllowLocationScreen
