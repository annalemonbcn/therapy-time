import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { ForgotPasswordFormModel } from './types'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import { theme } from 'theme'
import Button from 'src/components/custom/customButton'
import { usePasswordRecoveryMutation } from 'src/services/auth'
import { useEffect } from 'react'
import { Notifier, NotifierComponents } from 'react-native-notifier'

const ForgotPasswordForm = () => {
  const methods = useForm<ForgotPasswordFormModel>()
  const { handleSubmit } = methods

  const [triggerRecovery, { data, isLoading, isSuccess }] = usePasswordRecoveryMutation()

  const onSubmit: SubmitHandler<ForgotPasswordFormModel> = (formData) => {
    triggerRecovery({ email: formData.email, requestType: 'PASSWORD_RESET' })
  }

  // TODO: check for errors
  useEffect(() => {
    if (isSuccess) {
      try {
        Notifier.showNotification({
          title: 'Email sent',
          description: 'A password reset email has been sent',
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'success'
          }
        })
        // TODO: redirect to login screen
      } catch (error) {
        console.error('Error', error)
      }
    }
  }, [isSuccess, data])

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
