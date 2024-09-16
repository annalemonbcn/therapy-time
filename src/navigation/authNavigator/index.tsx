import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthStackParamList } from './types'
import { TouchableOpacity } from 'react-native'
import ArrowIcon from 'src/components/icons/arrowIcon'
import { theme } from 'theme'
import LoginScreen from 'src/screens/login'
import SignUpScreen from 'src/screens/signUp'
import ForgotPasswordScreen from 'src/screens/forgotPassword'

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="login"
    screenOptions={({ navigation }) => ({
      headerLeft: ({ canGoBack }) => {
        if (!canGoBack) return null
        return (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowIcon />
          </TouchableOpacity>
        )
      },
      headerShadowVisible: false,
      headerStyle: { backgroundColor: theme.colors.b50 }
    })}
  >
    <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="signUp" component={SignUpScreen} options={{ headerTitle: '' }} />
    <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} options={{ headerTitle: '' }} />
  </Stack.Navigator>
)

export default AuthNavigator
