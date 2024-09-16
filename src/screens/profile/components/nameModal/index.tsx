import { useEffect } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Image, View, StyleSheet, ActivityIndicator } from 'react-native'
import { Notifier, NotifierComponents } from 'react-native-notifier'
import { useSelector } from 'react-redux'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import Button from 'src/components/custom/customButton'
import Text from 'src/components/custom/customText'
import BasicModal from 'src/components/modal'
import { useModalContext } from 'src/context/ModalProvider'
import { useGetUserDataMutation, useUpdateNameMutation } from 'src/services/auth'
import { RootState } from 'src/store'
import { theme } from 'theme'

type NameFormModel = {
  displayName: string
}

// TODO: delete
const NameModal = () => {
  const { isOpen, closeModal } = useModalContext()

  const methods = useForm<NameFormModel>()
  const { handleSubmit } = methods

  const user = useSelector((state: RootState) => state.user.user.basicInfo.tokenId)

  const [updateName, { data, isLoading }] = useUpdateNameMutation()

  const onSubmit: SubmitHandler<NameFormModel> = (formData) => {
    try {
      updateName({
        idToken: user,
        displayName: formData.displayName,
        returnSecureToken: false
      })
      Notifier.showNotification({
        title: 'Success',
        description: 'Your name has been updated',
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'success'
        }
      })
      closeModal()
    } catch (error) {}
  }

  if (isLoading) return <ActivityIndicator />

  return (
    <BasicModal isModalOpen={isOpen} closeModal={closeModal} showCloseButton={true}>
      <FormProvider {...methods}>
        <View style={styles.formContainer}>
          <Image source={require('./img/question.png')} style={{ width: 180, height: 180 }} />
          <View style={styles.titleContainer}>
            <Text size="s4" fontWeight="semi-bold" textAlign="center">
              Oops..! Looks like we don't know who you are
            </Text>
            <Text size="s2" textAlign="center" color="b500">
              Can you please let us know your name?
            </Text>
          </View>
          <ControlledTextInput
            fieldName="displayName"
            placeholderText="Enter Your Name"
            type="secondary"
            icon="user"
            isRequired
          />
          <View style={styles.buttonsContainer}>
            <Button primary onPress={handleSubmit(onSubmit)}>
              Send
            </Button>
          </View>
        </View>
      </FormProvider>
    </BasicModal>
  )
}

export default NameModal

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    gap: theme.space.lg,
    alignItems: 'center'
  },
  titleContainer: {
    alignItems: 'center',
    gap: theme.space.sm
  },
  buttonsContainer: {
    width: '100%',
    marginTop: theme.space.sm2
  }
})
