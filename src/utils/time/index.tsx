import { TODAY } from 'src/components/custom/calendar/hooks'

const generateHours = ({
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
    console.log('Selected day matches today')

    const actualTime =
      currentDate.getHours().toString().padStart(2, '0') + ':' + currentDate.getMinutes().toString().padStart(2, '0')
    const end = new Date(currentDate)
    end.setHours(parseInt(finishHour.split(':')[0]), parseInt(finishHour.split(':')[1]), 59, 999)

    let current = new Date(currentDate.getTime())
    current.setMinutes(Math.ceil(current.getMinutes() / 60) * 60) // Round up to nearest hour

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

export { generateHours }
