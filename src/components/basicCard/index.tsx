import { PropsWithChildren } from 'react'
import { StyleSheet, View } from 'react-native'
import { theme } from 'theme'
import { IBasicCardProps } from './types'

const BasicCard = ({ hasShadow, children }: IBasicCardProps) => {
  const baseStyles = [styles.card, styles.borders]
  const finalStyles = hasShadow ? [...baseStyles, theme.borders.shadow.basicShadow] : baseStyles

  return <View style={finalStyles}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: theme.space.sm,
    backgroundColor: theme.colors.b0,
    padding: theme.space.md,
    marginVertical: theme.space.sm2
  },
  borders: {
    borderRadius: theme.borders.radius.md,
    borderWidth: 0.5,
    borderColor: theme.colors.b100,
    borderStyle: 'solid'
  }
})

export default BasicCard
