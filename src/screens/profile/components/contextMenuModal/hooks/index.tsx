import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useSetProfilePictureMutation } from 'src/services/user'
import { RootState } from 'src/store'
import { Option } from '../types'
import ImageIcon from 'src/components/icons/imageIcon'
import CameraIcon from 'src/components/icons/cameraIcon'

const useContextMenuActions = () => {
  const [image, setImage] = useState('')

  // const [updateProfilePicture, { isSuccess }] = useSetProfilePictureMutation()
  // const uuid = useSelector((state: RootState) => state.user.user.basicInfo.uuid)
  // updateProfilePicture({ uuid, image })

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

    if (result.canceled) return

    setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
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

    if (result.canceled) return

    setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
  }

  const confirmImage = () => {}

  const contextMenuOptions: Option[] = [
    {
      id: 'takePicture',
      title: 'Take a picture',
      trigger: () => takePicture(),
      icon: <CameraIcon size={20} />
    },
    {
      id: 'selectGallery',
      title: 'Select from gallery',
      trigger: () => openGallery(),
      icon: <ImageIcon size={20} />
    }
  ]

  return {
    contextMenuOptions
  }
}

export { useContextMenuActions }
