import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { Days } from 'src/data/types'
import { BookingFormShape } from 'src/screens/appointment/types'
import { theme } from 'theme'

export const TODAY = new Date().toISOString().split('T')[0]

// const useGetMarkedDays = ({ saturdaysDisabled }: { saturdaysDisabled: boolean }) => {
//   const { watch } = useFormContext<BookingFormShape>()
//   const defaultDate = watch('day')

//   const isWeekend = (date: Date) => {
//     const day = date.getDay()
//     return day === 0 || (saturdaysDisabled && day === 6)
//   }

//   const getDisabledDays = (minDate: string, maxDate: string) => {
//     const start = new Date(minDate)
//     const end = new Date(maxDate)
//     const disabledDays: {
//       [key: string]: { disabled: boolean; disableTouchEvent: boolean }
//     } = {}

//     const currentDate = start
//     while (currentDate <= end) {
//       if (isWeekend(currentDate)) {
//         const dateString = currentDate.toISOString().split('T')[0]
//         disabledDays[dateString] = { disabled: false, disableTouchEvent: false }
//       }
//       currentDate.setDate(currentDate.getDate() + 1)
//     }
//     return disabledDays
//   }

//   const markedDates = useMemo(() => {
//     const disabledDays = getDisabledDays(TODAY, END_DAY)

//     return {
//       [defaultDate]: {
//         selected: true,
//         selectedColor: theme.colors.main,
//         selectedTextColor: theme.colors.b0,
//         disabled: false,
//         disableTouchEvent: true
//       },
//       ...disabledDays
//     }
//   }, [defaultDate])

//   return markedDates
// }

const useAvailableDays = ({ workingDays }: { workingDays: Days[] }) => {
  const { watch } = useFormContext<BookingFormShape>()
  const defaultDate = watch('day')

  const availableDays = useMemo(() => {
    const today = new Date()
    const nextTwoMonths = getNextTwoMonths(today)

    const markedDates: { [key: string]: any } = {}

    nextTwoMonths.forEach((date) => {
      if (isWorkingDay(date, workingDays)) {
        const dateString = date.toISOString().split('T')[0]
        markedDates[dateString] = {
          disabled: false,
          selected: false
        }
      }
    })

    return {
      ...markedDates,
      [defaultDate]: {
        selected: true,
        selectedColor: theme.colors.main,
        selectedTextColor: theme.colors.b0
      }
    }
  }, [workingDays, defaultDate])

  return availableDays
}

const isWorkingDay = (date: Date, workingDays: string[]) => {
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' })
  return workingDays.includes(dayName)
}

const getNextTwoMonths = (startDate: Date): Date[] => {
  const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 2, 0)
  const result: Date[] = []
  let currentDate = new Date(startDate)

  while (currentDate <= endDate) {
    result.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return result
}

export { useAvailableDays }
