import { Image, StyleSheet, View } from 'react-native'
import { ITherapistProps } from './types'
import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import { theme } from 'theme'
import { StyledTherapist } from './styles'

const Therapist = ({ therapist }: ITherapistProps) => (
  <View style={styles.container}>
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
  container: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: theme.borders.radius.lg,
    // paddingVertical: theme.space.md,
    marginVertical: theme.space.sm2,
    gap: theme.space.sm2,
    backgroundColor: 'red'
  },
  image: {
    width: theme.space.xl2,
    height: theme.space.xl2,
    borderRadius: theme.borders.radius.circle
  }
})

export default Therapist
