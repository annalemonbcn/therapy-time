import { Image, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

const ProfilePicture = () => {
  const { profilePicture } = useSelector((state: RootState) => state.user.user.basicInfo)

  const imageSource = profilePicture ? { uri: `${profilePicture}` } : require('./img/default.jpg')

  return <Image source={imageSource} style={{ width: 170, height: 170, borderRadius: 100 }} />
}

export default ProfilePicture

const styles = StyleSheet.create({})
