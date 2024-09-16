import { View, StyleSheet, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import Text from 'src/components/custom/customText'
import PageWrapper from 'src/components/custom/pageWrapper'
import { RootState } from 'src/store'
import { theme } from 'theme'
import ProfilePicture from './components/profilePicture'
import { resetTokenId } from 'src/features/user/userSlice'

const ProfileScreen = () => {
  const { name, location, profilePicture, tokenId } = useSelector((state: RootState) => state.user.user.basicInfo)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(resetTokenId())
  }

  if (name) {
    console.warn('Open modal to set name')
  }

  return (
    <PageWrapper justifyContent="space-between">
      <View style={styles.pageContainer}>
        <ProfilePicture />
        <View style={styles.nameContainer}>
          <Text fontWeight="bold">{name ? name : 'No name yet'}</Text>
          <Text size="s2">{location}</Text>
        </View>
      </View>
      <View>
        <Text>Change password</Text>
        <Text>View bookings</Text>
      </View>
      <View style={styles.logoutContainer}>
        <TouchableWithoutFeedback onPress={() => handleLogout()}>
          <Text size="s2" color="blue">
            Log Out
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </PageWrapper>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: theme.space.xl,
    width: '100%',
    alignItems: 'center',
    gap: theme.space.lg,
    textAlign: 'center'
  },
  nameContainer: {
    alignItems: 'center',
    gap: theme.space.xs
  },
  logoutContainer: {
    alignItems: 'center',
    marginBottom: theme.space.lg
  }
})
