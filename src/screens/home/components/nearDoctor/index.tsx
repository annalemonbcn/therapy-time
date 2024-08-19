import { View } from 'react-native'
import Text from 'src/components/custom/customText'
import { useGetNearDoctor } from './hooks'
import TherapistCard from 'src/components/therapistCard'

const NearDoctor = () => {
  const nearDoctor = useGetNearDoctor()

  return (
    <View>
      <Text fontWeight="bold">Nearest Doctor</Text>
      <TherapistCard therapist={nearDoctor} showReviews={false} />
    </View>
  )
}

export default NearDoctor
