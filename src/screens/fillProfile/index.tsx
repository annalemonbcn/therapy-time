import { View, StyleSheet } from 'react-native'
import Text from 'src/components/custom/customText'
import PageWrapper from 'src/components/custom/pageWrapper'
import { getStatusBarHeight } from 'src/utils'
import { theme } from 'theme'
import ProfilePicture from '../profile/components/profilePicture'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import Button from 'src/components/custom/customButton'

type ProfileDataFormModel = {
  name: string
  email: string
}

const FillProfileScreen = () => {
  const methods = useForm<ProfileDataFormModel>()
  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<ProfileDataFormModel> = (data) => console.log('data', data)

  return (
    <PageWrapper justifyContent="flex-start">
      <FormProvider {...methods}>
        <View style={styles.pageContainer}>
          <Text size="s4" fontWeight="semi-bold" color="b700">
            Fill Your Profile
          </Text>
          <ProfilePicture />
          <View style={styles.formContainer}>
            <ControlledTextInput fieldName="name" placeholderText="Your Name" type="secondary" icon="user" isRequired />
            <ControlledTextInput
              fieldName="email"
              placeholderText="Your Email"
              type="secondary"
              icon="email"
              isRequired
            />
            <View style={styles.buttonsContainer}>
              <Button primary onPress={handleSubmit(onSubmit)}>
                Save
              </Button>
            </View>
          </View>
        </View>
      </FormProvider>
    </PageWrapper>
  )
}

export default FillProfileScreen

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: getStatusBarHeight() + theme.space.md,
    width: '100%',
    alignItems: 'center',
    gap: theme.space.xl,
    textAlign: 'center'
  },
  formContainer: {
    gap: theme.space.md,
    width: '100%'
  },
  buttonsContainer: {
    width: '100%',
    marginTop: theme.space.lg
  }
})
