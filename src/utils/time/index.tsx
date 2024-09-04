import { Days } from 'src/data/types'

export const TODAY_DATE = new Date().toISOString().split('T')[0]
export const TODAY_NAME = new Date().toLocaleDateString('en-US', { weekday: 'long' })

const setUp = ({
  startHour,
  finishHour,
  currentDate = new Date()
}: {
  startHour: string
  finishHour: string
  currentDate?: Date
}) => {
  const [hours, minutes] = startHour.split(':').map(Number)

  const isHalfHourInterval = minutes % 30 === 0 && minutes !== 0

  const currentHours = currentDate.getHours()
  const currentMinutes = currentDate.getMinutes()

  const intervalBase = isHalfHourInterval ? 30 : 60

  let startHourValue = hours

  if (currentHours > hours || (currentHours === hours && currentMinutes >= minutes)) {
    const totalMinutesSinceMidnight = currentHours * 60 + currentMinutes
    const roundedUpMinutes = Math.ceil(totalMinutesSinceMidnight / intervalBase) * intervalBase

    const newStartHours = Math.floor(roundedUpMinutes / 60)
    const newStartMinutes = roundedUpMinutes % 60

    if (newStartHours <= parseInt(finishHour.split(':')[0])) {
      startHourValue = newStartHours

      if (isHalfHourInterval && newStartMinutes !== 30) {
        startHourValue++
      }
    }
  }

  const startMinuteValue = isHalfHourInterval ? 30 : 0

  const start = new Date(currentDate ?? new Date())
  start.setHours(startHourValue, startMinuteValue, 0, 0)

  const end = new Date(currentDate ?? new Date())
  end.setHours(parseInt(finishHour.split(':')[0]), parseInt(finishHour.split(':')[1]), 59, 999)

  return { start, end }
}

const calculateDuration = ({ start, end }: { start: Date; end: Date }) => {
  const diffMs = Math.abs(end.getTime() - start.getTime())
  return Math.floor(diffMs / (1000 * 60 * 60))
}

const generateTimeSlots = ({
  current,
  diffHours,
  excludedSet
}: {
  current: Date
  diffHours: number
  excludedSet: Set<string>
}) => {
  let timeRange: string[] = []

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

  return timeRange
}

const generateTimeRange = ({
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

  const { start, end } = setUp({
    startHour,
    finishHour,
    currentDate: selectedDate
  })

  const diffHours = calculateDuration({ start, end })

  const excludedSet = new Set(excludedHours?.map((h) => `${h}`))

  let current = new Date(start.getTime())

  return generateTimeSlots({ current, diffHours, excludedSet })
}

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

  if (currentDate.toDateString() === selectedDate.toDateString()) {
    const { start, end } = setUp({
      startHour,
      finishHour,
      currentDate
    })

    const diffHours = calculateDuration({ start, end })
    const excludedSet = new Set(excludedHours?.map((h) => `${h}`))
    let current = new Date(start.getTime())

    return generateTimeSlots({ current, diffHours, excludedSet })
  }

  return generateTimeRange({ startHour, finishHour, selectedDay, excludedHours })
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
