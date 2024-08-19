import { StyleSheet, View } from 'react-native'
import { ITherapistCardProps } from './types'
import Text from 'src/components/custom/customText'
import { theme } from 'theme'
import React, { FC } from 'react'
import BasicCard from 'src/components/basicCard'
import Separator from 'src/components/separator'
import CardImage from 'src/components/custom/image'
import CardName from './components/name'
import CardLocation from './components/location'
import CardReviews from './components/reviews'
import { toTitleCase } from 'src/utils'

const TherapistCard = ({ therapist, onPress, showReviews = false, imgSize }: ITherapistCardProps) => (
  <BasicCard hasShadow onPress={onPress}>
    <CardImage url={therapist.basicInfo.profilePicture} size={imgSize} />
    <View style={styles.infoContainer}>
      <CardName name={therapist.basicInfo.name} />
      <Separator />
      <View style={{ gap: theme.space.sm2 }}>
        <Text fontWeight="semi-bold" size="s2" color="b600">
          {toTitleCase(therapist.basicInfo.specialty)}
        </Text>
        <CardLocation location={`${therapist.location.city}, ${therapist.location.province}`} />
        <CardReviews average={therapist.reviews.average} totalRatings={therapist.reviews.totalRatings} />
      </View>
    </View>
  </BasicCard>
)

const styles = StyleSheet.create({
  infoContainer: {
    width: '100%',
    gap: theme.space.sm
  }
})

export default TherapistCard
