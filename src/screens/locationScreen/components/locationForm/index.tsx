import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { LocationFormModel } from './types'
import { useUserContext } from 'src/context/UserProvider'
import CustomTextInput from 'src/components/custom/customTextInput'

const LocationForm = () => {
  const methods = useForm<LocationFormModel>()
  const { handleSubmit } = methods

  const { setUserLocation } = useUserContext()

  const onSubmit: SubmitHandler<LocationFormModel> = (data) => setUserLocation(data.location)

  return (
    <FormProvider {...methods}>
      <CustomTextInput
        fieldName="location"
        placeholderText="Location"
        sendButton={{ isInside: false, triggerAction: handleSubmit(onSubmit) }}
      />
    </FormProvider>
  )
}

export default LocationForm
