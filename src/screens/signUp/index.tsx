import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { theme } from 'theme'
import Text from 'src/components/custom/customText'
import PageWrapper from 'src/components/custom/pageWrapper'
import SignUpForm from './components/signUpForm'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigationProp } from 'src/navigation/authNavigator/types'

const SignUpScreen = () => {
  const navigation = useNavigation<AuthNavigationProp>()

  return (
    <PageWrapper>
      <View style={styles.pageContainer}>
        <Image source={require('assets/logo.png')} style={{ width: 150, height: 150 }} />
        <View style={styles.titleContainer}>
          <Text size="s4" fontWeight="semi-bold">
            Create Account
          </Text>
          <Text size="s2" textAlign="center" color="b500">
            We are here to help you!
          </Text>
        </View>
        <SignUpForm />
        <View style={styles.signUpContainer}>
          <Text size="s2" color="b500">
            Do you have an account?
          </Text>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('login')}>
            <Text size="s2" color="blue">
              Sign in
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </PageWrapper>
  )
}

export default SignUpScreen

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
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.space.xs2
  }
})
