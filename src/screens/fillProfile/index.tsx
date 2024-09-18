import { View, StyleSheet } from 'react-native'
import Text from 'src/components/custom/customText'
import PageWrapper from 'src/components/custom/pageWrapper'
import { getStatusBarHeight } from 'src/utils'
import { theme } from 'theme'
import FillProfilePictureForm from './components/fillProfileForm'
import { ModalProvider } from 'src/context/ModalProvider'

const FillProfileScreen = () => (
  <PageWrapper justifyContent="flex-start">
    <View style={styles.pageContainer}>
      <Text size="s4" fontWeight="semi-bold" color="b700">
        Fill Your Profile
      </Text>
      <ModalProvider>
        <FillProfilePictureForm />
      </ModalProvider>
    </View>
  </PageWrapper>
)

export default FillProfileScreen

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: getStatusBarHeight() + theme.space.md,
    width: '100%',
    alignItems: 'center',
    gap: theme.space.xl,
    textAlign: 'center'
  }
})
