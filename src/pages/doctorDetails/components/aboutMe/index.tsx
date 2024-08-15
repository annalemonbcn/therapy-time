import { StyleSheet, View } from 'react-native'
import Text from 'src/components/custom/customText'
import { IAboutMeProps } from './types'
import { theme } from 'theme'

const AboutMe = ({ description }: IAboutMeProps) => (
  <View style={styles.container}>
    <Text size="s4" fontWeight="semi-bold" color="b800">
      About me
    </Text>
    <Text size="s2" color="b500">
      {description}
      {/* TODO: View more for larger descriptions */}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    gap: theme.space.sm2
  }
})

export default AboutMe
