import { View, Text } from 'react-native'
import React from 'react'
import HorizontalContainer from '../custom/horizontalContainer'
import { ITagListProps } from './types'
import Tag from '../tag'

const TagList = ({ items, maxItems = 3 }: ITagListProps) => (
  <HorizontalContainer gap="xs">
    {items.map((item, idx) => {
      if (idx === maxItems) return
      return <Tag key={item}>{item}</Tag>
    })}
  </HorizontalContainer>
)

export default TagList
