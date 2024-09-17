import { View, StyleSheet, Image } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'
import ProfilePicture from './components/profilePicture'
import NameAndLocation from './components/nameAndLocation'
import LogoutButton from './components/logoutButton'

const ProfileScreen = () => (
  <PageWrapper justifyContent="space-between">
    <View style={styles.pageContainer}>
      <ProfilePicture />
      <NameAndLocation />
    </View>
    <LogoutButton />
  </PageWrapper>
)

export default ProfileScreen

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: theme.space.xl,
    width: '100%',
    alignItems: 'center',
    gap: theme.space.lg,
    textAlign: 'center'
  }
})
