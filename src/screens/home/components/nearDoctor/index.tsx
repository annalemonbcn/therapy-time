import { View } from 'react-native'
import Text from 'src/components/custom/customText'
import { useGetNearDoctor } from './hooks'
import TherapistCard from 'src/components/therapistCard'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import { useNavigate } from 'src/hooks'

const NearDoctor = () => {
  const nearDoctor = useGetNearDoctor()

  const navigation = useNavigate()

  return (
    <View>
      <HorizontalContainer verticalCenter="center" horizontalCenter="space-between">
        <Text fontWeight="bold">Nearest Doctor</Text>
        <Text size="s2" color="b500">
          See all
        </Text>
      </HorizontalContainer>

      <TherapistCard
        therapist={nearDoctor}
        showReviews={false}
        onPress={() =>
          navigation.navigate('Doctor Details', {
            id: nearDoctor.basicInfo.id
          })
        }
      />
    </View>
  )
}

export default NearDoctor
