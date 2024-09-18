import * as ImagePicker from 'expo-image-picker'
import { useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Notifier, NotifierComponents } from 'react-native-notifier'
import { useSelector } from 'react-redux'
import { useGetProfilePictureQuery, useSetProfilePictureMutation } from 'src/services/user'
import { RootState } from 'src/store'
import { ProfileDataFormModel } from '../../fillProfileForm/types'

const useSetProfilePicture = () => {
  const [profilePicture, setProfilePicture] = useState('')
  const { setValue } = useFormContext<ProfileDataFormModel>()

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
      setProfilePicture(base64Data)
      setValue('profilePicture', base64Data)
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
      setProfilePicture(base64Data)
      setValue('profilePicture', base64Data)
    }
  }

  return {
    profilePicture,
    takePicture,
    openGallery
  }
}

export { useSetProfilePicture }
