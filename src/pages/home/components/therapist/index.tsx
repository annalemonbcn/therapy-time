import { View, Image } from 'react-native'
import { ITherapistProps } from './types'
import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'

// TODO: fix --> images not rendering
const Therapist = ({ therapist }: ITherapistProps) => {
  console.log(therapist.basicInfo.profilePicture)
  return (
    <HorizontalContainer>
      <Image
        source={{
          uri: therapist.basicInfo.profilePicture
        }}
        style={{ width: 40, height: 40 }}
      />
      <Text>{therapist.basicInfo.name}</Text>
      <Text>{therapist.location.city}</Text>
    </HorizontalContainer>
  )
}

export default Therapist
