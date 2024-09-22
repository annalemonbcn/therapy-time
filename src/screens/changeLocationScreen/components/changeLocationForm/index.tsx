import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { LocationFormModel } from './types'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import { useNavigate } from 'src/hooks'
import { useDispatch } from 'react-redux'
import { setUserLocation } from 'src/features/user/userSlice'
import { showErrorNotification } from 'src/utils/notifications'
import { useState } from 'react'
import { ActivityIndicator } from 'react-native'

const ChangeLocationForm = () => {
  const [loading, setLoading] = useState(false)

  const methods = useForm<LocationFormModel>()
  const { handleSubmit } = methods

  const dispatch = useDispatch()

  const navigation = useNavigate()

  const onSubmit: SubmitHandler<LocationFormModel> = async (formData) => {
    setLoading(true)
    try {
      const urlGeocoding = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        formData.address
      )}&key=${process.env.EXPO_PUBLIC_GOOGLE_API_KEY}`

      const response = await fetch(urlGeocoding)
      const data = await response.json()
      const result = data.results.at(0)

      if (!result) showErrorNotification('No results found for the given address')

      const { latitude, longitude } = result.geometry.location
      dispatch(setUserLocation({ address: formData.address, latitude, longitude }))
      navigation.navigate('Home')
    } catch (error) {
      console.error('Error geocoding address:', error)
      showErrorNotification('Failed to geocode address')
    } finally {
      setLoading(false)
    }
  }

  if (loading) <ActivityIndicator />

  return (
    <FormProvider {...methods}>
      <ControlledTextInput
        fieldName="address"
        placeholderText="Location"
        sendButton={{ isInside: false, triggerAction: handleSubmit(onSubmit), isDisabled: loading }}
        type="primary"
      />
    </FormProvider>
  )
}

export default ChangeLocationForm
