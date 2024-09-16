import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { LocationFormModel } from './types'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import { useDispatch } from 'react-redux'
import { setUserLocation } from 'src/features/user/userSlice'

const LocationForm = () => {
  const methods = useForm<LocationFormModel>()
  const { handleSubmit } = methods

  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<LocationFormModel> = (data) => dispatch(setUserLocation(data.location))

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

export default LocationForm
