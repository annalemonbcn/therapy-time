import { PropsWithChildren } from 'react'

interface IPageWrapperProps extends PropsWithChildren {
  justifyContent?: 'center' | 'flex-start' | 'space-between'
}

export { IPageWrapperProps }
