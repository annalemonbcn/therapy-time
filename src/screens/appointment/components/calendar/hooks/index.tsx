import { useMemo, useState } from 'react'
import { theme } from 'theme'

export const TODAY = new Date().toISOString().split('T')[0]
const END_DAY = '2030-12-31'

const useGetMarkedDays = ({ saturdaysDisabled }: { saturdaysDisabled: boolean }) => {
  const [date, setDate] = useState(TODAY)

  const isWeekend = (date: Date) => {
    const day = date.getDay()
    return day === 0 || (saturdaysDisabled && day === 6)
  }

  const getDisabledDays = (minDate: string, maxDate: string) => {
    const start = new Date(minDate)
    const end = new Date(maxDate)
    const disabledDays: {
      [key: string]: { disabled: boolean; disableTouchEvent: boolean }
    } = {}

    const currentDate = start
    while (currentDate <= end) {
      if (isWeekend(currentDate)) {
        const dateString = currentDate.toISOString().split('T')[0]
        disabledDays[dateString] = { disabled: true, disableTouchEvent: true }
      }
      currentDate.setDate(currentDate.getDate() + 1)
    }
    return disabledDays
  }

  const markedDates = useMemo(() => {
    const disabledDays = getDisabledDays(TODAY, END_DAY)

    return {
      [date]: {
        selected: true,
        selectedColor: theme.colors.main,
        selectedTextColor: theme.colors.b0,
        disableTouchEvent: true
      },
      ...disabledDays
    }
  }, [date])

  return {
    date,
    setDate,
    markedDates
  }
}

export { useGetMarkedDays }
