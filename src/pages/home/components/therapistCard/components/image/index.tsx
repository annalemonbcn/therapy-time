import React from 'react'
import { ICardImageProps } from './types'
import { StyledImage } from './styles'

const CardImage = ({ url, ...props }: ICardImageProps) => (
  <StyledImage
    source={{
      uri: url
    }}
    {...props}
  />
)

export default CardImage
