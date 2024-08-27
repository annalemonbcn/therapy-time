import { useNavigation } from '@react-navigation/native'
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native'
import CategoriesList from 'src/components/categoriesList'
import Button from 'src/components/custom/customButton'
import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import { tagsArray, TagsEnum } from 'src/data/types'
import { NavigationProp } from 'src/navigation/homeNavigator/types'
import { theme } from 'theme'

const CategoriesSection = () => {
  const navigation = useNavigation<NavigationProp>()

  const handleTagPress = (item: TagsEnum) => {
    navigation.navigate('Doctors Display', { category: item })
  }

  const handleSeeAllPress = () => navigation.navigate('Doctors Display', { category: TagsEnum.All })

  return (
    <>
      <HorizontalContainer verticalCenter="center" horizontalCenter="space-between">
        <Text fontWeight="bold">Categories</Text>
        <TouchableOpacity onPress={() => handleSeeAllPress()}>
          <Text size="s2" color="b500">
            See all
          </Text>
        </TouchableOpacity>
      </HorizontalContainer>
      <CategoriesList onTagPress={handleTagPress} />
    </>
  )
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: theme.space.xs
  }
})

export default CategoriesSection
