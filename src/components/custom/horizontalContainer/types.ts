import { PropsWithChildren } from 'react'
import { Colors, Space, FlexCenter } from 'types'

interface IHorizontalContainerProps extends PropsWithChildren {
  paddingVertical?: Space
  paddingHorizontal?: Space
  gap?: Space
  fullWidth?: boolean
  horizontalCenter?: FlexCenter
  verticalCenter?: FlexCenter
  backgroundColor?: Colors | 'transparent'
}

export { IHorizontalContainerProps }
