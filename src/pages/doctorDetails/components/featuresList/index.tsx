import { View, Text } from 'react-native'
import React from 'react'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import Feature from 'src/components/customModal/components/feature'
import StarIcon from 'src/components/icons/starIcon'

const FeaturesList = () => {
  return (
    <HorizontalContainer horizontalCenter="space-between">
      <Feature>
        <Feature.Icon>
          <StarIcon color="main" size={20} />
        </Feature.Icon>
        <Feature.Title title="Test" />
        <Feature.Subtitle subTitle="Subtitle" />
      </Feature>
      <Feature>
        <Feature.Icon>
          <StarIcon color="main" size={20} />
        </Feature.Icon>
        <Feature.Title title="Test" />
        <Feature.Subtitle subTitle="Subtitle" />
      </Feature>
      <Feature>
        <Feature.Icon>
          <StarIcon color="main" size={20} />
        </Feature.Icon>
        <Feature.Title title="Test" />
        <Feature.Subtitle subTitle="Subtitle" />
      </Feature>
      <Feature>
        <Feature.Icon>
          <StarIcon color="main" size={20} />
        </Feature.Icon>
        <Feature.Title title="Test" />
        <Feature.Subtitle subTitle="Subtitle" />
      </Feature>
    </HorizontalContainer>
  )
}

export default FeaturesList
