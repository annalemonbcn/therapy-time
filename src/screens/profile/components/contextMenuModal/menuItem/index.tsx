import { StyleSheet, View } from 'react-native'
import { Option } from '../types'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import Text from 'src/components/custom/customText'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const MenuItem = ({ title, icon, trigger }: Option) => {
  return (
    <TouchableWithoutFeedback onPress={() => trigger()}>
      <HorizontalContainer horizontalCenter="space-between" fullWidth>
        <Text>{title}</Text>
        <View>{icon}</View>
      </HorizontalContainer>
    </TouchableWithoutFeedback>
  )
}

export default MenuItem
