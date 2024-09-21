import { theme } from 'theme'
import { View, StyleSheet, ImageBackground } from 'react-native'
import Text from 'src/components/custom/customText'

const StarredPost = () => (
  <View>
    <ImageBackground
      source={require('assets/blog.png')}
      resizeMode="cover"
      borderRadius={theme.borders.radius.sm}
      style={styles.image}
    >
      <View style={styles.textContainer}>
        <Text color="b0" size="s33" fontWeight="bold">
          What is insomnia?
        </Text>
        <Text size="s1" color="b0">
          Read the latest article written by Ana García, this week's featured stress specialist.
        </Text>
      </View>
    </ImageBackground>
  </View>
)

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    paddingVertical: theme.space.xl,
    paddingHorizontal: theme.space.sm
  },
  textContainer: {
    gap: 20,
    maxWidth: '50%'
  }
})

export default StarredPost
