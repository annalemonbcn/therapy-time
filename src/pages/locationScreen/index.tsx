import { Image, StyleSheet, TextInput, View } from 'react-native'
import Button from 'src/components/custom/customButton'
import CustomInput from 'src/components/custom/customInput'
import Text from 'src/components/custom/customText'
import { useUserContext } from 'src/context/UserProvider'
import { theme } from 'theme'

const LocationScreen = () => {
  const { setUserLocation } = useUserContext()

  return (
    <View style={styles.pageWrapper}>
      <View style={styles.container}>
        <Image source={require('assets/location.png')} />
        <View style={styles.titleContainer}>
          <Text size="s5" fontWeight="semi-bold">
            Allow your location
          </Text>
          <Text size="s3" textAlign="center">
            We will need your location to give you better experience.
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button primary fullWidth onPress={() => setUserLocation('Barcelona')}>
            Sure, I'd like that
          </Button>
          <View style={styles.manualLocationContainer}>
            <Text size="s2">or enter it manually</Text>
            <CustomInput value="" placeholder="Enter your location" triggerAction={setUserLocation} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pageWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: theme.colors.b0
  },
  container: {
    alignItems: 'center',
    gap: theme.space.xl,
    paddingHorizontal: 20,
    textAlign: 'center'
  },
  titleContainer: {
    alignItems: 'center',
    gap: theme.space.md
  },
  buttonsContainer: {
    width: '100%',
    marginTop: theme.space.md,
    alignItems: 'center',
    gap: theme.space.md
  },
  manualLocationContainer: {
    width: '100%',
    marginTop: theme.space.lg,
    alignItems: 'center',
    gap: theme.space.md
  }
})

export default LocationScreen
