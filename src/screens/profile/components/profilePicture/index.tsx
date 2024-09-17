import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { useSetProfilePicture } from '../../hooks'
import PictureContextMenu from '../pictureContextMenu'

const ProfilePicture = () => {
  const { profilePicture, takePicture, openGallery } = useSetProfilePicture()

  return (
    <View style={styles.imageContainer}>
      <Image
        defaultSource={require('./img/default.jpg')}
        source={{
          uri: profilePicture || undefined
        }}
        style={styles.image}
      />
      <PictureContextMenu takePicture={takePicture} openGallery={openGallery} />
    </View>
  )
}

export default ProfilePicture

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative'
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 100
  }
})
