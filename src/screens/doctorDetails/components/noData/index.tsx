import { useNavigation } from '@react-navigation/native'
import { Image, View, StyleSheet } from 'react-native'
import Button from 'src/components/custom/customButton'
import Text from 'src/components/custom/customText'
import PageWrapper from 'src/components/custom/pageWrapper'
import { HomeScreenNavigationProp } from 'src/screens/home/types'
import { getStatusBarHeight } from 'src/utils'
import { theme } from 'theme'

const NoData = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>()

  return (
    <PageWrapper>
      <View style={styles.pageContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('assets/NoData.jpg')} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text fontWeight="semi-bold">Oops... No therapists to show</Text>
          <Text textAlign="center" style={{ paddingHorizontal: 25}}>The therapist you're looking for does not seem to exist.</Text>
        </View>
        <Button onPress={() => navigation.goBack()} primary>
          Back
        </Button>
      </View>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: 100,
    gap: theme.space.xl
  },
  textContainer: {
    alignItems: 'center',
    gap: theme.space.md
  },
  imageContainer: {
    width: '100%'
  },
  image: {
    width: 'auto',
    height: 200,
    borderRadius: theme.borders.radius.lg
  }
})

export default NoData
