import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { LoginFormModel } from './types'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import { theme } from 'theme'
import Button from 'src/components/custom/customButton'
import { useLoginMutation } from 'src/services/auth'
import { useDispatch } from 'react-redux'
import { setTokenId } from 'src/features/user/userSlice'
import { Notifier, NotifierComponents } from 'react-native-notifier'

const LoginForm = () => {
  const methods = useForm<LoginFormModel>({
    defaultValues: {
      email: 'test3@test.com',
      password: '12345678a'
    }
  })
  const { handleSubmit } = methods

  const [triggerLogin, { data, isLoading, isSuccess, error }] = useLoginMutation()
  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<LoginFormModel> = (formData) => {
    triggerLogin(formData)
  }

  // TODO: check for errors
  useEffect(() => {
    if (isSuccess && data) {
      try {
        dispatch(setTokenId(data.idToken))
        Notifier.showNotification({
          title: 'Success',
          description: 'Welcome back!',
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'success'
          }
        })
      } catch (error) {
        console.error('Error', error)
      }
    }
  }, [isSuccess, data, dispatch])

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
