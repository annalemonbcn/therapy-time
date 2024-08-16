import { PropsWithChildren, ReactElement } from 'react'

type IconProps = PropsWithChildren
type TitleProps = {
  title: string
}
type SubtitleProps = {
  subTitle: string
}

type FeatureProps = {
  children: ReactElement<AllowChildren> | ReactElement<AllowChildren>[]
}

type AllowChildren = IconProps

export { IconProps, TitleProps, SubtitleProps, FeatureProps }
