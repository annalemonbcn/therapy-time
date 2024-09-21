import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { ForgotPasswordFormModel } from './types'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import { theme } from 'theme'
import Button from 'src/components/custom/customButton'
import { usePasswordRecoveryMutation } from 'src/services/auth'
import { showSuccessNotification } from 'src/utils/notifications'

const ForgotPasswordForm = () => {
  const methods = useForm<ForgotPasswordFormModel>()
  const { handleSubmit } = methods

  const [triggerRecovery, { isLoading }] = usePasswordRecoveryMutation()

  // TODO: check for errors

  const onSubmit: SubmitHandler<ForgotPasswordFormModel> = (formData) => {
    try {
      triggerRecovery({ email: formData.email, requestType: 'PASSWORD_RESET' })
      showSuccessNotification('A password reset email has been sent')
    } catch (error) {
      console.error('Error', error)
    }
  }

  if (isLoading) return <ActivityIndicator />

  return (
    <FormProvider {...methods}>
      <View style={styles.formContainer}>
        <ControlledTextInput fieldName="email" placeholderText="Email" type="secondary" icon="email" isRequired />
        <View style={styles.buttonsContainer}>
          <Button primary onPress={handleSubmit(onSubmit)}>
            Send Email
          </Button>
        </View>
      </View>
    </FormProvider>
  )
}

export default ForgotPasswordForm

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
