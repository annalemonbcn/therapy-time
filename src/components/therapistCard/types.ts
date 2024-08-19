import { Therapist } from 'src/data/types'

interface ITherapistCardProps {
  therapist: Therapist
  onPress?: () => void // -> TODO: ?
  showReviews?: boolean
  imgSize?: number
}

interface ISmallCardProps {
  therapist: Therapist
}

export { ITherapistCardProps, ISmallCardProps }
