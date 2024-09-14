import { View, StyleSheet } from 'react-native'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { ForgotPasswordFormModel } from './types'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import { theme } from 'theme'
import Button from 'src/components/custom/customButton'

const ForgotPasswordForm = () => {
  const methods = useForm<ForgotPasswordFormModel>()
  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<ForgotPasswordFormModel> = (data) => console.log('data', data)

  return (
    <FormProvider {...methods}>
      <View style={styles.formContainer}>
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
            Send Code
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
