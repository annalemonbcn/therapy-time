import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import { theme } from 'theme'
import Text from 'src/components/custom/customText'
import { FeatureProps, IconProps, SubtitleProps, TitleProps } from './types'
import { getChildrenDisplayName, validateChildren } from '../utils'

const Icon = ({ children }: IconProps) => <View style={styles.icon}>{children}</View>
Icon.displayName = 'FeatureIcon'

const Title = ({ title }: TitleProps) => (
  <Text size="s2" fontWeight="semi-bold">
    {title}
  </Text>
)
Title.displayName = 'FeatureTitle'

const Subtitle = ({ subTitle }: SubtitleProps) => <Text size="s2" textAlign='center'>{subTitle}</Text>
Subtitle.displayName = 'FeatureSubtitle'

const Feature = ({ children }: FeatureProps) => {
  validateChildren(Object.keys(Feature), children, Feature.name)
  const icon = getChildrenDisplayName(children, Icon.name)
  const title = getChildrenDisplayName(children, Title.name)
  const subtitle = getChildrenDisplayName(children, Subtitle.name)

  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <View style={styles.textContainer}>
        {title}
        {subtitle}
      </View>
    </View>
  )
}
Feature.Icon = Icon
Feature.Title = Title
Feature.Subtitle = Subtitle

export default Feature

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },
  icon: {
    backgroundColor: theme.colors.b100,
    width: 55,
    height: 55,
    borderRadius: theme.borders.radius.circle,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    paddingVertical: theme.space.sm2,
    alignItems: 'center',
    gap: theme.space.sm2
  }
})
