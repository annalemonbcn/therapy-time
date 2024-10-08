import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { theme } from 'theme'
import Text from 'src/components/custom/customText'
import PageWrapper from 'src/components/custom/pageWrapper'
import { getStatusBarHeight } from 'src/utils'
import LoginForm from './components/loginForm'
import { LoginProps } from 'src/navigation/authNavigator/types'

const LoginScreen = ({ navigation }: LoginProps) => (
  <PageWrapper>
    <View style={styles.pageContainer}>
      <Image source={require('assets/logo.png')} style={{ width: 150, height: 150 }} />
      <View style={styles.titleContainer}>
        <Text size="s4" fontWeight="semi-bold">
          Hi, welcome back!
        </Text>
        <Text size="s2" textAlign="center" color="b500">
          Hope you are doing fine :)
        </Text>
      </View>
      <LoginForm />
      <View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('forgotPassword')}>
          <Text size="s2" color="blue">
            Forgot password?
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.signUpContainer}>
        <Text size="s2" color="b500">
          Don't have an account yet?
        </Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('signUp')}>
          <Text size="s2" color="blue">
            Sign up
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  </PageWrapper>
)

export default LoginScreen

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: getStatusBarHeight() + theme.space.xl2,
    width: '100%',
    alignItems: 'center',
    gap: theme.space.xl,
    textAlign: 'center'
  },
  titleContainer: {
    alignItems: 'center',
    gap: theme.space.sm
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.space.xs2
  }
})
