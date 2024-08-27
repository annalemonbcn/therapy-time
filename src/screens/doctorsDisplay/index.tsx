import { ScrollView, StyleSheet, View } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'
import { DoctorsDisplayProps } from './types'
import { useMemo, useState } from 'react'
import { getFilteredTherapistsByCategory } from './utils'
import TherapistsList from './components/therapistsList'
import { TagsEnum } from 'src/data/types'
import CategoriesList from 'src/components/categoriesList'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import Text from 'src/components/custom/customText'

const DoctorsDisplay = ({ route }: DoctorsDisplayProps) => {
  const { params } = route

  const [category, setCategory] = useState<TagsEnum>(params.category)

  const filteredList = useMemo(() => getFilteredTherapistsByCategory(category), [category])

  return (
    <PageWrapper>
      <ScrollView contentContainerStyle={styles.pageContainer}>
        <CategoriesList
          category={category}
          onTagPress={(newCategory) => setCategory(newCategory as TagsEnum)}
          allPrimary={false}
        />
        <View style={styles.results}>
          <HorizontalContainer horizontalCenter="space-between">
            <Text fontWeight="bold">{filteredList.length} founds</Text>
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
    paddingTop: theme.space.sm
  },
  results: {
    marginTop: theme.space.xl
  }
})

export default DoctorsDisplay
