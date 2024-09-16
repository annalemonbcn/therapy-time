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

  const pickImage = async () => {
    const isCameraGranted = await verifyCameraPermissions()
    if (!isCameraGranted) return

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 9],
      base64: true,
      quality: 0.3
    })

    if (result.canceled) return

    setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
  }

  const confirmImage = () => {}

  const contextMenuOptions: Option[] = [
    {
      id: 'takePicture',
      title: 'Take a picture',
      trigger: () => pickImage(),
      icon: <CameraIcon size={20} />
    },
    {
      id: 'selectGallery',
      title: 'Select from gallery',
      trigger: () => console.log('select from gallery'),
      icon: <ImageIcon size={20} />
    }
  ]

  return {
    contextMenuOptions
  }
}

export { useContextMenuActions }
