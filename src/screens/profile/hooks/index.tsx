import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { useSetProfilePictureMutation } from 'src/services/user'
import { RootState } from 'src/store'
import { Notifier, NotifierComponents } from 'react-native-notifier'
import { setUserProfilePicture } from 'src/features/user/userSlice'
import { useGetUuid } from 'src/hooks'

const useSetProfilePicture = () => {
  const [updateProfilePicture] = useSetProfilePictureMutation()
  const uuid = useGetUuid()

  const showNotification = () =>
    Notifier.showNotification({
      title: 'Success',
      description: 'Your profile picture has been updated',
      Component: NotifierComponents.Alert,
      componentProps: {
        alertType: 'success'
      }
    })

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    return granted ? true : false
  }

  const verifyGalleryPermissions = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    return granted ? true : false
  }

  const takePicture = async () => {
    const isCameraGranted = await verifyCameraPermissions()
    if (!isCameraGranted) return

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 9],
      base64: true,
      quality: 0.2
    })

    if (!result.canceled) {
      const base64Data = `data:image/jpeg;base64,${result.assets[0].base64}`
      try {
        await updateProfilePicture({ uuid, profilePicture: base64Data as string })
        showNotification()
      } catch (error) {
        console.error('Error', error)
      }
    }
  }

  const openGallery = async () => {
    const isGalleryGranted = await verifyGalleryPermissions()
    if (!isGalleryGranted) return

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 9],
      base64: true,
      quality: 0.2
    })

    if (!result.canceled) {
      const base64Data = `data:image/jpeg;base64,${result.assets[0].base64}`
      try {
        await updateProfilePicture({ uuid, profilePicture: base64Data as string })
        showNotification()
      } catch (error) {
        console.error('Error', error)
      }
    }
  }

  return {
    takePicture,
    openGallery
  }
}

export { useSetProfilePicture }
