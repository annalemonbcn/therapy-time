import { Image } from 'react-native'
import styled from 'styled-components'
import { ICardImageProps } from './types'
import { theme } from 'theme'

const defaultSize = '110px'

const StyledImage = styled(Image)<{ size?: number }>`
  width: ${({ size }) => (size ? size : defaultSize)};
  height: ${({ size }) => (size ? size : defaultSize)};
  border-radius: ${theme.borders.radius.md}px;
`

export { StyledImage }
