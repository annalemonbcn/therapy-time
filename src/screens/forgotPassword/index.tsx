import { Image, View, StyleSheet } from 'react-native'
import Text from 'src/components/custom/customText'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'
import ForgotPasswordForm from './components/forgotPasswordForm'

const ForgotPasswordScreen = () => (
  <PageWrapper>
    <View style={styles.pageContainer}>
      <Image source={require('assets/logo.png')} style={{ width: 150, height: 150 }} />
      <View style={styles.titleContainer}>
        <Text size="s4" fontWeight="semi-bold">
          Forget Password?
        </Text>
        <Text size="s2" textAlign="center" color="b500">
          Enter your Email, we will send you an email to reset your password.
        </Text>
      </View>
      <ForgotPasswordForm />
    </View>
  </PageWrapper>
)

export default ForgotPasswordScreen

const styles = StyleSheet.create({
  pageContainer: {
    width: '100%',
    alignItems: 'center',
    gap: theme.space.xl,
    textAlign: 'center'
  },
  titleContainer: {
    alignItems: 'center',
    gap: theme.space.sm
  }
})
