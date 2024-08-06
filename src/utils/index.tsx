import Constants from 'expo-constants'
import { mockTherapists } from 'src/data/mock.data'
import { SessionType } from 'src/data/types'

const getStatusBarHeight = () => Constants.statusBarHeight

const getFilteredTherapists = (sessionType: SessionType) =>
  mockTherapists.filter((therapist) => therapist.sessionInfo.type.includes(sessionType))

export { getStatusBarHeight, getFilteredTherapists }
