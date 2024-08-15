import { Image } from 'react-native'
import styled from 'styled-components'
import { theme } from 'theme'

const defaultSize = '110px'

const StyledImage = styled(Image)<{ size?: number; isCircle?: boolean }>`
  width: ${({ size }) => (size ? `${size}px` : defaultSize)};
  height: ${({ size }) => (size ? `${size}px` : defaultSize)};
  border-radius: ${({ isCircle }) => (isCircle ? `${theme.borders.radius.circle}px` : `${theme.borders.radius.md}px`)};
`

export { StyledImage }
