import { View, StyleSheet } from 'react-native'
import Button from 'src/components/custom/customButton'
import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import { IChooseSessionTypeProps, IHeadingProps } from './types'

const AppTitle = () => (
  <View style={styles.headingContainer}>
    <Text size="s6" fontWeight="bold">
      Here for you
    </Text>
  </View>
)

const ChooseSessionType = ({ setSessionType }: IChooseSessionTypeProps) => (
  <View style={{ gap: 16 }}>
    <Text size="s3" fontWeight="bold" color="b600">
      Choose your type of therapy:
    </Text>
    <HorizontalContainer horizontalCenter gap="lg">
      <Button primary onPress={() => setSessionType('online')}>
        Online
      </Button>
      <Button secondary onPress={() => setSessionType('presential')}>
        Face-to-face
      </Button>
    </HorizontalContainer>
  </View>
)

const Heading = ({ setSessionType }: IHeadingProps) => (
  <>
    <AppTitle />
    <ChooseSessionType setSessionType={setSessionType} />
  </>
)

const styles = StyleSheet.create({
  headingContainer: {
    paddingVertical: 40
  }
})

export default Heading
