import { ScrollView, StyleSheet } from 'react-native'
import { DoctorsListProps } from './types'
import TopNavigation from 'src/components/topNavigation'
import PageWrapper from 'src/components/custom/pageWrapper'
import { getStatusBarHeight } from 'src/utils'

const DoctorsList = ({ route }: DoctorsListProps) => {
  const { category } = route.params

  return (
    <PageWrapper>
      <ScrollView contentContainerStyle={styles.pageContainer}>
        <TopNavigation title={`${category} Doctors`} />
      </ScrollView>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingTop: getStatusBarHeight()
  }
})

export default DoctorsList
