import { PropsWithChildren } from 'react'

interface ICustomButtonProps extends PropsWithChildren {
  onPress: () => void
  primary?: boolean
  secondary?: boolean
  isTag?: boolean
}

type ButtonProps = Omit<ICustomButtonProps, 'onPress'>

export { ICustomButtonProps, ButtonProps }
