import { StyleSheet, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import Text from 'src/components/custom/customText'
import { resetTokenId } from 'src/features/user/userSlice'
import { showSuccessNotification } from 'src/utils/notifications'
import { theme } from 'theme'

const LogoutButton = () => {
  const dispatch = useDispatch()

  // TODO: handle error
  const handleLogout = () => {
    try {
      dispatch(resetTokenId())
      showSuccessNotification('Log Out successful. See you soon!')
    } catch (error) {
      console.error('Error', error)
    }
  }
  return (
    <View style={styles.logoutContainer}>
      <TouchableWithoutFeedback onPress={() => handleLogout()}>
        <Text size="s2" color="blue">
          Log Out
        </Text>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default LogoutButton

const styles = StyleSheet.create({
  logoutContainer: {
    alignItems: 'center',
    marginBottom: theme.space.lg
  }
})
