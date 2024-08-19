import { View } from 'react-native'
import Text from 'src/components/custom/customText'
import { useGetNearDoctor } from './hooks'
import TherapistCard from 'src/components/therapistCard'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '../../../../navigators/homeNavigator/types'

const NearDoctor = () => {
  const nearDoctor = useGetNearDoctor()

  const navigation = useNavigation<NavigationProp>()

  return (
    <View>
      <Text fontWeight="bold">Nearest Doctor</Text>
      <TherapistCard
        therapist={nearDoctor}
        showReviews={false}
        onPress={() =>
          navigation.navigate('Doctor Details', {
            id: 'therapist5'
          })
        }
      />
    </View>
  )
}

export default NearDoctor
