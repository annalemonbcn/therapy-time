import { Image, StyleSheet, View } from 'react-native'
import { ISmallCardProps, ITherapistProps } from './types'
import Text from 'src/components/custom/customText'
import { theme } from 'theme'
import React, { FC } from 'react'
import BasicCard from 'src/components/basicCard'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import Ionicons from '@expo/vector-icons/Ionicons'
import Separator from 'src/components/separator'
import TagList from 'src/components/tagList'
import CardImage from './components/image'
import CardName from './components/name'
import CardLocation from './components/location'
import CardReviews from './components/reviews'
import { Therapist } from 'src/data/types'

const LargeCard = ({ therapist }: { therapist: Therapist }) => (
  <View>
    <TagList items={therapist.sessionInfo.tags} />
  </View>
)

const TherapistCard = ({ therapist, onPress, isLargeCard = false }: ITherapistProps) => {
  const renderLargeCard = isLargeCard && <LargeCard therapist={therapist} />

  return (
    <BasicCard hasShadow onPress={onPress}>
      <CardImage url={therapist.basicInfo.profilePicture} />
      <View style={styles.infoContainer}>
        <CardName name={therapist.basicInfo.name} />
        <Separator />
        <View style={{ gap: theme.space.sm2 }}>
          <CardLocation location={`${therapist.location.city}, ${therapist.location.province}`} />
          <CardReviews average={therapist.reviews.average} totalRatings={therapist.reviews.totalRatings} />
        </View>
        {renderLargeCard}
      </View>
    </BasicCard>
  )
}

const styles = StyleSheet.create({
  infoContainer: {
    width: '100%',
    gap: theme.space.sm
  }
})

export default TherapistCard
