import Constants from 'expo-constants'
import { theme } from 'theme'

const getStatusBarHeight = () => Constants.statusBarHeight

const STATUS_BAR_HEIGHT = getStatusBarHeight() + theme.space.sm2

const toTitleCase = (str: string) => {
  return str
    .split('_')
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ')
}

export { getStatusBarHeight, STATUS_BAR_HEIGHT, toTitleCase }
