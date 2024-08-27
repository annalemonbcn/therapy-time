import { mockTherapists } from 'src/data/mock.data'
import { TagsEnum } from 'src/data/types'

const getFilteredTherapistsByCategory = (category: TagsEnum) => {
  if (category === TagsEnum.All) return mockTherapists
  return mockTherapists.filter((therapist) => therapist.sessionInfo.tags.includes(category))
}

const getFilteredTherapistsByName = (query: string) =>
  mockTherapists.filter((therapist) => therapist.basicInfo.name.toLowerCase().includes(query.toLowerCase()))

export { getFilteredTherapistsByCategory, getFilteredTherapistsByName }
