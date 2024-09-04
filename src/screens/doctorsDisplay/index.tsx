import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'
import { DoctorsDisplayProps } from './types'
import { useMemo, useState } from 'react'
import { getFilteredTherapistsByCategory, getFilteredTherapistsByName } from './utils'
import TherapistsList from './components/therapistsList'
import { TagsEnum } from 'src/data/types'
import CategoriesList from 'src/components/categoriesList'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import Text from 'src/components/custom/customText'
import DoctorsDisplaySearch from './components/doctorsDisplaySearch'

const DoctorsDisplay = ({ route }: DoctorsDisplayProps) => {
  const { params } = route

  const [category, setCategory] = useState<TagsEnum>(params.category)
  const [name, setName] = useState(params.name)

  const filteredList = useMemo(() => {
    if (name) return getFilteredTherapistsByName(name)
    return getFilteredTherapistsByCategory(category)
  }, [category, name])

  const handleTagPress = (newCategory: TagsEnum) => {
    setName(undefined)
    setCategory(newCategory as TagsEnum)
  }

  const handleSearch = (name: string) => {
    setName(name)
    setCategory(TagsEnum.All)
  }

  return (
    <PageWrapper>
      <ScrollView contentContainerStyle={styles.pageContainer}>
        <DoctorsDisplaySearch handleSearch={handleSearch} />
        <CategoriesList category={category} onTagPress={handleTagPress} allPrimary={false} />
        <View style={styles.results}>
          <HorizontalContainer horizontalCenter="space-between">
            <Text fontWeight="bold">{filteredList.length} founds</Text>
            {name && (
              <TouchableOpacity onPress={() => setName(undefined)}>
                <Text size="s2" color="b500">
                  Reset
                </Text>
              </TouchableOpacity>
            )}
          </HorizontalContainer>
          <View>
            <TherapistsList therapists={filteredList} />
          </View>
        </View>
      </ScrollView>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingTop: theme.space.sm,
    gap: theme.space.md
  },
  results: {
    marginTop: theme.space.sm
  }
})

export default DoctorsDisplay
