import { View, StyleSheet } from 'react-native'
import Button from 'src/components/custom/customButton'
import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import { theme } from 'theme'
import { useUserContext } from 'src/context/UserProvider'

const AppTitle = () => (
  <View style={styles.headingContainer}>
    <Text size="s6" fontWeight="bold">
      Here for you
    </Text>
  </View>
)

const ChooseSessionType = () => {
  const { setSessionType } = useUserContext()

  return (
    <View style={styles.sessionContainer}>
      <Text size="s3" fontWeight="bold" color="b600">
        Choose your type of therapy:
      </Text>
      <HorizontalContainer fullWidth horizontalCenter={'center'} gap="md">
        <View style={{ flex: 1 }}>
          <Button primary onPress={() => setSessionType('online')}>
            Online
          </Button>
        </View>
        <View style={{ flex: 1 }}>
          <Button secondary onPress={() => setSessionType('presential')}>
            Face-to-face
          </Button>
        </View>
      </HorizontalContainer>
    </View>
  )
}

const Heading = () => (
  <>
    <AppTitle />
    <ChooseSessionType />
  </>
)

const styles = StyleSheet.create({
  headingContainer: {
    paddingVertical: theme.space.xl2
  },
  sessionContainer: {
    alignItems: 'center',
    gap: theme.space.lg
  }
})

export default Heading
