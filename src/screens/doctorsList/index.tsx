import { ScrollView, StyleSheet, View } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'
import { DoctorsListProps } from './types'
import { useMemo, useState } from 'react'
import { getFilteredTherapistsByCategory } from './utils'
import TherapistsList from './components/therapistsList'
import { TagsEnum } from 'src/data/types'
import CategoriesList from 'src/components/categoriesList'

const DoctorsList = ({ route }: DoctorsListProps) => {
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
        <TherapistsList therapists={filteredList} />
      </ScrollView>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingTop: theme.space.sm
  }
})

export default DoctorsList
