import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { LocationFormModel } from './types'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import { useNavigate } from 'src/hooks'
import { useDispatch } from 'react-redux'
import { setUserLocation } from 'src/features/user/userSlice'
import { showErrorNotification } from 'src/utils/notifications'

const ChangeLocationForm = () => {
  const methods = useForm<LocationFormModel>()
  const { handleSubmit } = methods

  const dispatch = useDispatch()

  const navigation = useNavigate()

  const onSubmit: SubmitHandler<LocationFormModel> = ({ location }) => {
    try {
      dispatch(setUserLocation(location))
      navigation.navigate('Home')
    } catch (error) {
      console.error('Error', error)
      showErrorNotification('An error has ocurred. Please try again later.')
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
