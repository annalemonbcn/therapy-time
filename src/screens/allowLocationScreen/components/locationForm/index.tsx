import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { LocationFormModel } from './types'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import { useDispatch } from 'react-redux'
import { setUserLocation } from 'src/features/user/userSlice'
import { GOOGLE_API_KEY } from 'src/db/googleApi'
import { showErrorNotification } from 'src/utils/notifications'
import { ActivityIndicator } from 'react-native'

const LocationForm = ({
  loading,
  setLoading
}: {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const methods = useForm<LocationFormModel>()
  const { handleSubmit } = methods

  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<LocationFormModel> = async (formData) => {
    setLoading(true)
    try {
      const urlGeocoding = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        formData.address
      )}&key=${GOOGLE_API_KEY}`

      const response = await fetch(urlGeocoding)
      const data = await response.json()
      const result = data.results.at(0)

      if (!result) showErrorNotification('No results found for the given address')

      const { latitude, longitude } = result.geometry.location
      dispatch(setUserLocation({ address: formData.address, latitude, longitude }))
    } catch (error) {
      console.error('Error geocoding address:', error)
      showErrorNotification('Failed to geocode address')
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormProvider {...methods}>
      <ControlledTextInput
        fieldName="address"
        placeholderText="Location"
        sendButton={{ isInside: false, triggerAction: handleSubmit(onSubmit) }}
        type="primary"
      />
    </FormProvider>
  )
}

export default LocationForm
