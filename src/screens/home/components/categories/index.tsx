import { useState } from 'react'
import { FlatList, ScrollView, View, StyleSheet } from 'react-native'
import Button from 'src/components/custom/customButton'
import Text from 'src/components/custom/customText'
import TagList from 'src/components/tagList'
import { TagsEnum } from 'src/data/types'
import { theme } from 'theme'

// TODO: seguir
const Categories = () => {
  const tagsValues: TagsEnum[] = Object.values(TagsEnum)
  const tagsArray = ['All', ...tagsValues]

  const [selectedCategory, setSelectedCategory] = useState('All')

  return (
    <>
      <Text fontWeight="bold">Categories</Text>
      {/* <TagList items={tagsArray} /> */}
      {/* <FlatList
        data={tagsArray}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Button
              onPress={() => setSelectedCategory(item)}
              primary={selectedCategory === item}
              secondary={selectedCategory !== item}
            >
              {item}
            </Button>
          </View>
        )}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      /> */}
    </>
  )
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: theme.space.xs
  }
})

export default Categories
