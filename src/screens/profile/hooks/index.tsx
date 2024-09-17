import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { useSetProfilePictureMutation } from 'src/services/user'
import { RootState } from 'src/store'
import { useModalContext } from 'src/context/ModalProvider'
import { Notifier, NotifierComponents } from 'react-native-notifier'
import { setUserProfilePicture } from 'src/features/user/userSlice'

const useSetProfilePicture = () => {
  const { closeModal } = useModalContext()

  const dispatch = useDispatch()

  // TODO: also save it to a local redux state instead of local state ?
  const [updateProfilePicture] = useSetProfilePictureMutation()
  const uuid = useSelector((state: RootState) => state.user.user.basicInfo.uuid)

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
        updateProfilePicture({ uuid, profilePicture: base64Data as string })
        dispatch(setUserProfilePicture(base64Data))
        Notifier.showNotification({
          title: 'Success',
          description: 'Your profile picture has been updated',
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'success'
          }
        })
        closeModal()
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
        updateProfilePicture({ uuid, profilePicture: base64Data as string })
        dispatch(setUserProfilePicture(base64Data))
        Notifier.showNotification({
          title: 'Success',
          description: 'Your profile picture has been updated',
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'success'
          }
        })
        closeModal()
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
