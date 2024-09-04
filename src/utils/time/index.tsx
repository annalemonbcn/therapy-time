import { Days } from 'src/data/types'

export const TODAY_DATE = new Date().toISOString().split('T')[0]
export const generateHours = ({
  startHour,
  finishHour,
  selectedDay,
  excludedHours = []
}: {
  startHour: string
  finishHour: string
  selectedDay: string
  excludedHours?: string[]
}) => {
  const currentDate = new Date()
  const selectedDate = new Date(selectedDay)

  let timeRange: string[] = []

  if (currentDate.toDateString() === selectedDate.toDateString()) {
    const end = new Date(currentDate)
    end.setHours(parseInt(finishHour.split(':')[0]), parseInt(finishHour.split(':')[1]), 59, 999)

    let current = new Date(currentDate.getTime())
    current.setMinutes(Math.ceil(current.getMinutes() / 30) * 30)

    while (current <= end) {
      const formattedTime = `${current.getHours().toString().padStart(2, '0')}:${current
        .getMinutes()
        .toString()
        .padStart(2, '0')}`

      if (!excludedHours.includes(formattedTime)) {
        timeRange.push(formattedTime)
      }

      current.setMinutes(current.getMinutes() + 60)
    }
  } else {
    const start = new Date(currentDate)
    start.setHours(parseInt(startHour.split(':')[0]), parseInt(startHour.split(':')[1]), 0, 0)

    const end = new Date(currentDate)
    end.setHours(parseInt(finishHour.split(':')[0]), parseInt(finishHour.split(':')[1]), 59, 999)

    const diffMs = Math.abs(end.getTime() - start.getTime())
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))

    const excludedSet = new Set(excludedHours?.map((h) => `${h}`))

    let current = new Date(start.getTime())

    for (let i = 0; i <= diffHours; i++) {
      const formattedTime = `${current.getHours().toString().padStart(2, '0')}:${current
        .getMinutes()
        .toString()
        .padStart(2, '0')}`

      if (!excludedSet.has(formattedTime)) {
        timeRange.push(formattedTime)
      }

      current.setMinutes(current.getMinutes() + 60)
    }
  }

  return timeRange
}

const getTargetDate = (dayOfWeek: string | undefined): string => {
  if (!dayOfWeek) return ''

  const dayMap: { [key: string]: number } = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
  }

  const currentDate = new Date()

  const currentDay = currentDate.getDay()

  const targetOffset = dayMap[dayOfWeek] - currentDay
  const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + targetOffset)

  const year = targetDate.getFullYear()
  const month = String(targetDate.getMonth() + 1).padStart(2, '0')
  const day = String(targetDate.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export const setDefaultDay = (workingDays: Days[]) => {
  const today = new Date()
  const todayName = today.toLocaleDateString('en-US', { weekday: 'long' }) as Days

  if (workingDays.includes(todayName)) {
    return TODAY_DATE
  }

  return getTargetDate(workingDays.at(0))
}
