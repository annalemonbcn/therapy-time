import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { theme } from 'theme'
import { IBasicCardProps } from './types'

const BasicCard = ({ onPress, hasShadow, children }: IBasicCardProps) => {
  const baseStyles = [styles.card, styles.borders]
  const finalStyles = hasShadow ? [...baseStyles, theme.borders.shadow.basicShadow] : baseStyles

  if (onPress)
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={finalStyles}>{children}</View>
      </TouchableOpacity>
    )

  return <View style={finalStyles}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.space.sm,
    // backgroundColor: theme.colors.b0,
    backgroundColor: 'green',
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
