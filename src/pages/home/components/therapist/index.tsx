import { Image, StyleSheet, View } from 'react-native'
import { ITherapistProps } from './types'
import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import { theme } from 'theme'

const Therapist = ({ therapist }: ITherapistProps) => (
  <View style={styles.item}>
    <Image
      source={{
        uri: therapist.basicInfo.profilePicture
      }}
      style={styles.image}
    />
    <View>
      <Text fontWeight="semi-bold">{therapist.basicInfo.name}</Text>
      <Text size="s2">{therapist.location.city}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  image: {
    width: theme.space.xl2,
    height: theme.space.xl2,
    borderRadius: theme.borders.radius.circle
  },
  item: {
    flexDirection: 'row',
    gap: theme.space.sm2,
    paddingVertical: theme.space.md
  }
})

export default Therapist
