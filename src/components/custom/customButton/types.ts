import { PropsWithChildren } from 'react'

interface ICustomButtonProps extends PropsWithChildren {
  onPress: () => void
  primary?: boolean
  secondary?: boolean
}

type ButtonProps = Omit<ICustomButtonProps, 'onPress'>

export { ICustomButtonProps, ButtonProps }
