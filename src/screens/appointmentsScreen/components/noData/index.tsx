import { Image, View, StyleSheet } from 'react-native'
import Button from 'src/components/custom/customButton'
import Text from 'src/components/custom/customText'
import PageWrapper from 'src/components/custom/pageWrapper'
import { useNavigate } from 'src/hooks'
import { theme } from 'theme'

const NoData = () => {
  const navigation = useNavigate()

  return (
    <PageWrapper>
      <View style={styles.pageContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('assets/NoData.jpg')} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text fontWeight="semi-bold">Oops... No appointments to show</Text>
          <Text textAlign="center" style={{ paddingHorizontal: 25 }}>
            It looks like you haven't made any appointments yet.
          </Text>
        </View>
        <Button onPress={() => navigation.goBack()} primary>
          Go Home
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
