import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { LocationFormModel } from './types'
import { useUserContext } from 'src/context/UserProvider'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import { useNavigate } from 'src/hooks'
import { Notifier, NotifierComponents } from 'react-native-notifier'

const ChangeLocationForm = () => {
  const methods = useForm<LocationFormModel>()
  const { handleSubmit } = methods

  const { setUserLocation } = useUserContext()

  const navigation = useNavigate()

  const onSubmit: SubmitHandler<LocationFormModel> = ({ location }) => {
    try {
      setUserLocation(location)
      navigation.navigate('Home')
    } catch (error) {
      console.error('Error', error)
      Notifier.showNotification({
        title: 'Error',
        description: 'An error has ocurred. Please try again later.',
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'error'
        }
      })
    }
  }

  return (
    <FormProvider {...methods}>
      <ControlledTextInput
        fieldName="location"
        placeholderText="Location"
        sendButton={{ isInside: false, triggerAction: handleSubmit(onSubmit) }}
        type="primary"
      />
    </FormProvider>
  )
}

export default ChangeLocationForm
