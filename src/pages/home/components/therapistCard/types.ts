import { Therapist } from 'src/data/types'

interface ITherapistProps {
  therapist: Therapist
  onPress?: () => void // -> TODO: ?
  isLargeCard?: boolean
}

interface ISmallCardProps {
  therapist: Therapist
}

export { ITherapistProps, ISmallCardProps }
