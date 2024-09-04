import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { LocationFormModel } from './types'
import { useUserContext } from 'src/context/UserProvider'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from 'src/navigation/homeNavigator/types'
import Toast from 'react-native-root-toast'
import { theme } from 'theme'

const ChangeLocationForm = () => {
  const methods = useForm<LocationFormModel>()
  const { handleSubmit } = methods

  const { setUserLocation } = useUserContext()

  const navigation = useNavigation<NavigationProp>()

  const onSubmit: SubmitHandler<LocationFormModel> = ({ location }) => {
    try {
      setUserLocation(location)
      navigation.navigate('Home')
    } catch (error) {
      console.error('Error', error)
      Toast.show('An error has ocurred. Try again later', {
        position: -200,
        backgroundColor: theme.colors.toastRed,
        textColor: theme.colors.b0,
        textStyle: { fontWeight: '500' },
        opacity: 1
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
