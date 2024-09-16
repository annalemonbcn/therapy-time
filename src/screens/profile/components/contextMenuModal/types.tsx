import CameraIcon from 'src/components/icons/cameraIcon'
import ImageIcon from 'src/components/icons/imageIcon'

type Option = {
  id: string
  title: string
  trigger: () => void
  icon: React.JSX.Element
}

export { Option }
