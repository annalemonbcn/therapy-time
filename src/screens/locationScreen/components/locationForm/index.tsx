import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { LocationFormModel } from './types'
import { useUserContext } from 'src/context/UserProvider'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import SearchIcon from 'src/components/icons/searchIcon'

const LocationForm = () => {
  const methods = useForm<LocationFormModel>()
  const { handleSubmit } = methods

  const { setUserLocation } = useUserContext()

  const onSubmit: SubmitHandler<LocationFormModel> = (data) => setUserLocation(data.location)

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
