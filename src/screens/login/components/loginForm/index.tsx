import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { LoginFormModel } from './types'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import { theme } from 'theme'
import Button from 'src/components/custom/customButton'
import { useLoginMutation } from 'src/services/auth'
import { useDispatch } from 'react-redux'
import { setUserBasicInfo } from 'src/features/user/userSlice'
import { showSuccessNotification } from 'src/utils/notifications'

// TODO: delete defaultValues
const LoginForm = () => {
  const methods = useForm<LoginFormModel>({
    defaultValues: {
      email: 'test3@test.com',
      password: '12345678a'
    }
  })
  const { handleSubmit } = methods

  const [triggerLogin, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()

  // TODO: check for errors
  const onSubmit: SubmitHandler<LoginFormModel> = async (formData) => {
    try {
      const { data, error } = await triggerLogin(formData)
      dispatch(
        setUserBasicInfo({
          uuid: data?.localId as string,
          email: data?.email as string,
          tokenId: data?.idToken as string
        })
      )
      showSuccessNotification('Welcome back!')
    } catch (error) {
      console.error('Error', error)
    }
  }

  if (isLoading) return <ActivityIndicator />

  return (
    <FormProvider {...methods}>
      <View style={styles.formContainer}>
        <ControlledTextInput fieldName="email" placeholderText="Your Email" type="secondary" icon="email" isRequired />
        <ControlledTextInput
          fieldName="password"
          placeholderText="Password"
          type="secondary"
          icon="password"
          isRequired
          isSecured
        />
        <View style={styles.buttonsContainer}>
          <Button primary onPress={handleSubmit(onSubmit)}>
            Sign In
          </Button>
        </View>
      </View>
    </FormProvider>
  )
}

export default LoginForm

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    gap: theme.space.md
  },
  buttonsContainer: {
    width: '100%',
    marginTop: theme.space.sm2
  }
})
