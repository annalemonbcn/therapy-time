import { theme } from 'theme'
import { useState } from 'react'
import { TagsEnum } from 'src/data/types'
import { ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { DoctorsDisplayProps } from './types'
import TherapistsList from './components/therapistsList'
import CategoriesList from 'src/components/categoriesList'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import Text from 'src/components/custom/customText'
import DoctorsDisplaySearch from './components/doctorsDisplaySearch'
import { useDoctorsDisplay, useFilterTherapists } from './hooks'
import NoData from './components/noData'

const DoctorsDisplay = ({ route }: DoctorsDisplayProps) => {
  const { data: therapists, isLoading } = useDoctorsDisplay()
  const [category, setCategory] = useState<TagsEnum>(route.params.category)
  const [query, setQuery] = useState(route.params.name)

  const filteredTherapists = useFilterTherapists(therapists, category, query)

  const handleTagPress = (newCategory: TagsEnum) => {
    setQuery('')
    setCategory(newCategory)
  }

  const handleSearch = (name: string) => {
    setCategory(TagsEnum.All)
    setQuery(name)
  }

  if (isLoading) return <ActivityIndicator />
  if (!filteredTherapists || filteredTherapists.length === 0) return <NoData />

  return (
    <PageWrapper>
      <ScrollView contentContainerStyle={styles.pageContainer}>
        <DoctorsDisplaySearch handleSearch={handleSearch} />
        <CategoriesList category={category} onTagPress={handleTagPress} allPrimary={false} />
        <View style={styles.results}>
          <HorizontalContainer horizontalCenter="space-between">
            <Text fontWeight="bold">{filteredTherapists.length} founds</Text>
            {query && (
              <TouchableOpacity onPress={() => setQuery('')}>
                <Text size="s2" color="b500">
                  Reset
                </Text>
              </TouchableOpacity>
            )}
          </HorizontalContainer>
          <View>
            <TherapistsList therapists={filteredTherapists} />
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
