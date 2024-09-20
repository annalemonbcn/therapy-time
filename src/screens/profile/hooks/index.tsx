import * as ImagePicker from 'expo-image-picker'
import { useSetProfilePictureMutation } from 'src/services/user'
import { showSuccessNotification } from 'src/utils/notifications'
import { useGetUuid } from 'src/utils/utils'

const useSetProfilePicture = () => {
  const [updateProfilePicture] = useSetProfilePictureMutation()
  const uuid = useGetUuid()

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
        showSuccessNotification('Your profile picture has been updated')
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
        showSuccessNotification('Your profile picture has been updated')
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
