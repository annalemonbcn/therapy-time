import { BookingFormShape } from './types'

const checkData = (data: BookingFormShape) => {
  const { day, hour } = data

  if (day === '' || hour === '') return false

  return true
}

export { checkData }
