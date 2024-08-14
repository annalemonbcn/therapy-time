import Constants from 'expo-constants'
import { mockTherapists } from 'src/data/mock.data'
import { SessionType } from 'src/data/types'

const getStatusBarHeight = () => Constants.statusBarHeight

const getFilteredTherapists = (sessionType: SessionType) =>
  mockTherapists.filter((therapist) => therapist.sessionInfo.type.includes(sessionType))

const toTitleCase = (str: string) => {
  return str
    .split('_')
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ')
}

export { getStatusBarHeight, getFilteredTherapists, toTitleCase }
