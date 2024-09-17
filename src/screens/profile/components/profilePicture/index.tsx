import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import EditIcon from 'src/components/icons/editIcon'
import { theme } from 'theme'
import { useSetProfilePicture } from '../../hooks'

const ProfilePicture = () => {
  const { profilePicture, openGallery } = useSetProfilePicture()

  return (
    <View style={styles.imageContainer}>
      <Image
        defaultSource={require('./img/default.jpg')}
        source={{
          uri: profilePicture || undefined
        }}
        style={styles.image}
      />
      <TouchableWithoutFeedback onPress={() => openGallery()}>
        <View style={styles.iconContainer}>
          <EditIcon size={18} color="b0" />
        </View>
      </TouchableWithoutFeedback>
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
  },
  iconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.borders.radius.xs,
    backgroundColor: theme.colors.main,
    bottom: theme.space.sm,
    right: theme.space.sm,
    padding: theme.space.xs
  }
})
