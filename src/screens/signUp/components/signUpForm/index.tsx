import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { SignUpFormModel } from './types'
import { theme } from 'theme'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import Button from 'src/components/custom/customButton'
import { useRegisterMutation } from 'src/services/auth'
import { useDispatch } from 'react-redux'
import { setUserBasicInfo } from 'src/features/user/userSlice'
import { showSuccessNotification } from 'src/utils/notifications'

const SignUpForm = () => {
  const methods = useForm<SignUpFormModel>()
  const { handleSubmit } = methods

  const [triggerRegister, { isLoading }] = useRegisterMutation()
  const dispatch = useDispatch()

  // TODO: check for errors
  const onSubmit: SubmitHandler<SignUpFormModel> = async (formData) => {
    try {
      const { data, error } = await triggerRegister(formData)
      dispatch(
        setUserBasicInfo({
          uuid: data?.localId as string,
          email: data?.email as string,
          tokenId: data?.idToken as string
        })
      )
      showSuccessNotification('User registered succesfully')
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
          <Button primary onPress={handleSubmit(onSubmit)} disabled={isLoading}>
            Create Account
          </Button>
        </View>
      </View>
    </FormProvider>
  )
}

export default SignUpForm

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
