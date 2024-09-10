import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'
import { DoctorsDisplayProps } from './types'
import { useEffect, useState } from 'react'
import { getFilteredTherapistsByCategory, getFilteredTherapistsByName } from './utils'
import TherapistsList from './components/therapistsList'
import { TagsEnum } from 'src/data/types'
import CategoriesList from 'src/components/categoriesList'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import Text from 'src/components/custom/customText'
import DoctorsDisplaySearch from './components/doctorsDisplaySearch'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { filterByCategory, filterByName } from 'src/features/therapists/therapistsSlice'

const DoctorsDisplay = ({ route }: DoctorsDisplayProps) => {
  const dispatch = useDispatch()
  const therapists = useSelector((state: RootState) => state.therapists.filteredTherapists)

  const [category, setCategory] = useState<TagsEnum>(route.params.category)

  useEffect(() => {
    const { params } = route
    if (category) {
      dispatch(filterByCategory(category))
    }
    if (params.name) {
      dispatch(filterByName(params.name))
    }
  }, [route.params, category, dispatch])

  const handleTagPress = (newCategory: TagsEnum) => {
    dispatch(filterByName(''))
    setCategory(newCategory)
  }

  const handleSearch = (name: string) => {
    setCategory(TagsEnum.All)
    dispatch(filterByName(name))
  }

  return (
    <PageWrapper>
      <ScrollView contentContainerStyle={styles.pageContainer}>
        <DoctorsDisplaySearch handleSearch={handleSearch} />
        <CategoriesList category={category} onTagPress={handleTagPress} allPrimary={false} />
        <View style={styles.results}>
          <HorizontalContainer horizontalCenter="space-between">
            <Text fontWeight="bold">{therapists.length} founds</Text>
            {route.params.name && (
              <TouchableOpacity onPress={() => dispatch(filterByName(''))}>
                <Text size="s2" color="b500">
                  Reset
                </Text>
              </TouchableOpacity>
            )}
          </HorizontalContainer>
          <View>
            <TherapistsList therapists={therapists} />
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
