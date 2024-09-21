import { Image, View, StyleSheet } from 'react-native'
import PictureContextMenu from 'src/screens/profile/components/pictureContextMenu'
import { useSetProfilePicture } from './hooks'
import { useEffect } from 'react'

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
