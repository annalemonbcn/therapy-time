import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { useSelector } from 'react-redux'
import EditIcon from 'src/components/icons/editIcon'
import { RootState } from 'src/store'
import { theme } from 'theme'

const ProfilePicture = () => {
  const { profilePicture } = useSelector((state: RootState) => state.user.user.basicInfo)

  const imageSource = profilePicture ? { uri: `${profilePicture}` } : require('./img/default.jpg')

  return (
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.image} />
      <TouchableWithoutFeedback onPress={() => console.log('edit icon pressed')}>
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
