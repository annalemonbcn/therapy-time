import styled from 'styled-components'
import { IChevronIconProps } from './types'
import { View } from 'react-native'

const StyledView = styled(View)<IChevronIconProps>`
  ${({ direction }) =>
    direction === 'left' &&
    `
      transform: rotate(90deg)
    `}
`

export { StyledView }
