import { Therapist } from 'src/data/types'

interface ITherapistCardProps {
  therapist: Therapist
  onPress?: () => void
  imgSize?: number
}

interface ISmallCardProps {
  therapist: Therapist
}

export { ITherapistCardProps, ISmallCardProps }
