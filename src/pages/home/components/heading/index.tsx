import { View, StyleSheet } from 'react-native'
import Button from 'src/components/custom/customButton'
import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'

const Title = () => (
  <View style={styles.headingContainer}>
    <Text size="s6" fontWeight="bold">
      Here for you
    </Text>
  </View>
)

const Choose = () => (
  <View style={{ gap: 16 }}>
    <Text size="s3" fontWeight="bold" color="b600">
      Choose your type of therapy:
    </Text>
    <HorizontalContainer horizontalCenter gap="lg">
      <Button primary onPress={() => console.log('online button')}>
        Online
      </Button>
      <Button secondary onPress={() => console.log('in person button')}>
        Face-to-face
      </Button>
    </HorizontalContainer>
  </View>
)

const Heading = () => (
  <>
    <Title />
    <Choose />
  </>
)

const styles = StyleSheet.create({
  headingContainer: {
    paddingVertical: 40
  }
})

export default Heading
