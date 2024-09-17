import * as ImagePicker from 'expo-image-picker'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSetProfilePictureMutation } from 'src/services/user'
import { RootState } from 'src/store'
import { useModalContext } from 'src/context/ModalProvider'
import { Notifier, NotifierComponents } from 'react-native-notifier'

const useSetProfilePicture = () => {
  const [profilePicture, setProfilePicture] = useState<string | null>(null)
  const { closeModal } = useModalContext()

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
      quality: 0.5
    })

    if (!result.canceled) {
      const base64Data = `data:image/jpeg;base64,${result.assets[0].base64}`
      setProfilePicture(base64Data)
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
      quality: 0.5
    })

    if (!result.canceled) {
      const base64Data = `data:image/jpeg;base64,${result.assets[0].base64}`
      setProfilePicture(base64Data)
    }
  }

  const saveProfilePicture = () => {
    try {
      updateProfilePicture({ uuid, profilePicture: profilePicture as string })
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

  useEffect(() => {
    if (profilePicture) saveProfilePicture()
  }, [profilePicture])

  return {
    profilePicture,
    takePicture,
    openGallery
  }
}

export { useSetProfilePicture }
