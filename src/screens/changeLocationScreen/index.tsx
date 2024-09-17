import { Image, View, StyleSheet } from 'react-native'
import Text from 'src/components/custom/customText'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'
import ChangeLocationForm from './components/changeLocationForm'
import Button from 'src/components/custom/customButton'
import { useNavigate } from 'src/hooks'

const ChangeLocationScreen = () => {
  const navigation = useNavigate()

  return (
    <PageWrapper justifyContent="center">
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
      <View style={styles.cancelContainer}>
        <Button onPress={() => navigation.goBack()} textFontSize="s2">
          Cancel
        </Button>
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
  manualLocationContainer: {
    width: '100%',
    marginTop: theme.space.sm2,
    alignItems: 'center',
    gap: theme.space.md,
    position: 'relative'
  },
  cancelContainer: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 10,
    right: 0,
    left: 0
  }
})

export default ChangeLocationScreen
