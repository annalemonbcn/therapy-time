import { useNavigation } from '@react-navigation/native'
import { FlatList, View, StyleSheet } from 'react-native'
import Button from 'src/components/custom/customButton'
import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import { tagsArray, TagsEnum } from 'src/data/types'
import { NavigationProp } from 'src/navigation/homeNavigator/types'
import { theme } from 'theme'

const CategoriesList = () => {
  const navigation = useNavigation<NavigationProp>()

  const handleOnPress = (item: TagsEnum) => {
    navigation.navigate('Doctors List', { category: item })
  }

  return (
    <>
      <HorizontalContainer verticalCenter="center" horizontalCenter="space-between">
        <Text fontWeight="bold">Categories</Text>
        <Text size="s2" color="b500">
          See all
        </Text>
      </HorizontalContainer>
      <FlatList
        data={tagsArray}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Button onPress={() => handleOnPress(item)} primary>
              {item}
            </Button>
          </View>
        )}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  )
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: theme.space.xs
  }
})

export default CategoriesList
