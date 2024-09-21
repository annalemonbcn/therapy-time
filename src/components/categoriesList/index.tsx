import { View, FlatList, StyleSheet } from 'react-native'
import { tagsArray, TagsEnum } from 'src/data/types'
import Button from 'src/components/custom/customButton'
import { theme } from 'theme'
import { ICategoriesListProps } from './types'

const CategoriesList = ({ category, onTagPress, allPrimary = true }: ICategoriesListProps) => (
  <FlatList
    data={tagsArray}
    renderItem={({ item }) => (
      <View style={styles.item}>
        <Button
          onPress={() => onTagPress(item)}
          isTag
          primary={allPrimary || category === item}
          secondary={!allPrimary && category !== item}
        >
          {item}
        </Button>
      </View>
    )}
    keyExtractor={(item) => item}
    horizontal
    showsHorizontalScrollIndicator={false}
  />
)

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: theme.space.xs
  }
})

export default CategoriesList
