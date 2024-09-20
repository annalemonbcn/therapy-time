import { useMemo } from 'react'
import { useWatch } from 'react-hook-form'
import { MarkingProps } from 'react-native-calendars/src/calendar/day/marking'
import { Days } from 'src/data/types'
import { TODAY_NAME } from 'src/utils/time'
import { theme } from 'theme'

const useAvailableDays = ({ workingDays }: { workingDays: Days[] }) => {
  const defaultDate = useWatch({ name: 'day' })

  const availableDays = useMemo(() => {
    const today = new Date()
    const nextTwoMonths = getNextTwoMonths(today)

    const markedDates: { [key: string]: MarkingProps } = {}

    nextTwoMonths.forEach((date) => {
      if (!workingDays.includes(TODAY_NAME as Days)) {
        const dateString = date.toISOString().split('T')[0]
        markedDates[dateString] = {
          disabled: true
        }
      }
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
