import { theme } from 'theme'
import { StyledHeader } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'

const ModalHeader = () => (
  <StyledHeader>
    <Ionicons name="close-circle-outline" size={24} color={theme.colors.main} />
  </StyledHeader>
)

export default ModalHeader
