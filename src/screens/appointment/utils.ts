import Toast from 'react-native-root-toast'
import { BookingFormShape } from './types'
import { theme } from 'theme'

const checkData = (data: BookingFormShape) => {
  const { day, hour } = data

  if (day === '' || hour === '') {
    Toast.show('It is required to select a date and time', {
      position: -200,
      backgroundColor: theme.colors.toastRed,
      textColor: theme.colors.b0,
      textStyle: { fontWeight: '500' },
      opacity: 1
    })
    return false
  }

  return true
}

export { checkData }
