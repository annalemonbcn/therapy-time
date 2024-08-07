import { PropsWithChildren } from 'react'
import { Colors, Space } from 'types'

interface IHorizontalContainerProps extends PropsWithChildren {
  paddingVertical?: Space
  paddingHorizontal?: Space
  gap?: Space
  fullWidth?: boolean
  horizontalCenter?: boolean
  verticalCenter?: boolean
  backgroundColor?: Colors | 'transparent'
}

export { IHorizontalContainerProps }
