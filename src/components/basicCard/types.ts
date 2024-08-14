import { PropsWithChildren } from 'react'

interface IBasicCardProps extends PropsWithChildren {
  onPress?: any // --> TODO: ?

  hasShadow?: boolean
}

export { IBasicCardProps }
