import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'
import Button from 'src/components/custom/customButton'
import Text from 'src/components/custom/customText'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'
import LocationForm from './components/locationForm'
import { useState } from 'react'
import AllowLocationButton from './components/allowLocationButton'
import { getStatusBarHeight } from 'src/utils'

const AllowLocationScreen = () => {
  const [loading, setLoading] = useState(false)

  return (
    <PageWrapper justifyContent="flex-start">
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
        {loading && <ActivityIndicator />}
        {!loading && (
          <View style={styles.buttonsContainer}>
            <AllowLocationButton loading={loading} setLoading={setLoading} />
            <View style={styles.manualLocationContainer}>
              <Text size="s2">or enter it manually</Text>
              <LocationForm />
            </View>
          </View>
        )}
      </View>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: getStatusBarHeight() + theme.space.xl4,
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
