import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { ProfileDataFormModel } from './types'
import { theme } from 'theme'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import Button from 'src/components/custom/customButton'
import ProfilePicture from '../profilePicture'
import { useSetEmailMutation, useSetNameMutation, useSetProfilePictureMutation } from 'src/services/user'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { Notifier, NotifierComponents } from 'react-native-notifier'
import { useGetUuid } from 'src/hooks'

const showNotification = () =>
  Notifier.showNotification({
    title: 'Success',
    description: 'Yout data has been updated',
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: 'success'
    }
  })

const FillProfilePictureForm = () => {
  const email = useSelector((state: RootState) => state.user.user.basicInfo.email)

  const methods = useForm<ProfileDataFormModel>({
    defaultValues: {
      email
    }
  })
  const { handleSubmit } = methods

  const [setProfilePicture] = useSetProfilePictureMutation()
  const [setName] = useSetNameMutation()
  const [setEmail] = useSetEmailMutation()

  const uuid = useGetUuid()

  const onSubmit: SubmitHandler<ProfileDataFormModel> = ({ profilePicture, name, email }) => {
    try {
      setProfilePicture({ uuid, profilePicture })
      setName({ uuid, name })
      setEmail({ uuid, email })
      showNotification()
    } catch (error) {
      console.error('Error', error)
    }
  }
  return (
    <FormProvider {...methods}>
      <ProfilePicture />
      <View style={styles.formContainer}>
        <ControlledTextInput fieldName="name" placeholderText="Your Name" type="secondary" icon="user" isRequired />
        <ControlledTextInput fieldName="email" placeholderText="Your Email" type="secondary" icon="email" isRequired />
        <View style={styles.buttonsContainer}>
          <Button primary onPress={handleSubmit(onSubmit)}>
            Save
          </Button>
        </View>
      </View>
    </FormProvider>
  )
}

export default FillProfilePictureForm

const styles = StyleSheet.create({
  formContainer: {
    gap: theme.space.md,
    width: '100%'
  },
  buttonsContainer: {
    width: '100%',
    marginTop: theme.space.lg
  }
})
