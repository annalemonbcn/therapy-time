import { Image, StyleSheet, View } from 'react-native'
import { ITherapistProps } from './types'
import Text from 'src/components/custom/customText'
import { theme } from 'theme'
import React from 'react'
import BasicCard from 'src/components/basicCard'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import Ionicons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign'
import Separator from 'src/components/separator'

const Therapist = ({ therapist }: ITherapistProps) => (
  <BasicCard hasShadow>
    <Image
      source={{
        uri: therapist.basicInfo.profilePicture
      }}
      style={styles.image}
    />
    <View style={styles.infoContainer}>
      <Text fontWeight="bold">{therapist.basicInfo.name}</Text>
      <Separator />
      <View style={{ gap: theme.space.sm2 }}>
        <HorizontalContainer verticalCenter>
          <Ionicons name="location-outline" size={16} color={theme.colors.b600} />
          <Text size="s2" fontWeight="semi-bold" color="b600">
            {therapist.location.city}, {therapist.location.province}
          </Text>
        </HorizontalContainer>
        <HorizontalContainer verticalCenter gap="xs">
          <AntDesign name="star" size={24} color="#FFE0BA" />
          <Text size="s2" color="b500">
            {therapist.reviews.average} |
          </Text>
          <Text size="s2" color="b500">
            {therapist.reviews.totalRatings} {therapist.reviews.totalRatings > 1 ? 'Reviews' : 'Review'}
          </Text>
        </HorizontalContainer>
      </View>
    </View>
  </BasicCard>
)

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    borderRadius: theme.borders.radius.md
  },
  infoContainer: {
    width: '100%',
    gap: theme.space.sm
  }
})

export default Therapist
