import { StyleSheet, View } from 'react-native'
import React from 'react'
import CustomInput from 'src/components/custom/customInput'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { LoginFormModel } from './types'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import { theme } from 'theme'
import Button from 'src/components/custom/customButton'

const LoginForm = () => {
  const methods = useForm<LoginFormModel>()
  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<LoginFormModel> = (data) => console.log('data', data)

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
