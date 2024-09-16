import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { theme } from 'theme'

type Colors = keyof typeof theme.colors

type FontWeight = keyof typeof theme.typography.fontWeight

type FontSize = keyof typeof theme.typography.fontSize

type Space = keyof typeof theme.space

type FlexCenter = 'center' | 'flex-start' | 'flex-end' | 'space-between'

type BorderRadius = keyof typeof theme.borders.radius

export { Colors, FontSize, FontWeight, Space, FlexCenter, BorderRadius }

type RootTabParamList = {
  TabHome: undefined
  TabMap: undefined
  TabProfile: undefined
}

export { RootTabParamList }
