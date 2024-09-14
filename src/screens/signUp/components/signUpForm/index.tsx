import { StyleSheet, View } from 'react-native'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { SignUpFormModel } from './types'
import { theme } from 'theme'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import Button from 'src/components/custom/customButton'

const SignUpForm = () => {
  const methods = useForm<SignUpFormModel>()
  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<SignUpFormModel> = (data) => console.log('data', data)

  return (
    <FormProvider {...methods}>
      <View style={styles.formContainer}>
        <ControlledTextInput fieldName="name" placeholderText="Your Name" type="secondary" icon="user" isRequired />
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
