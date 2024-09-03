const generateHours = ({
  startHour,
  finishHour,
  excludedHours = []
}: {
  startHour: string
  finishHour: string
  excludedHours?: string[]
}) => {
  const start = new Date()
  start.setHours(parseInt(startHour.split(':')[0]), parseInt(startHour.split(':')[1]))

  const end = new Date()
  end.setHours(parseInt(finishHour.split(':')[0]), parseInt(finishHour.split(':')[1]))

  const diffMs = Math.abs(end.getTime() - start.getTime())
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))

  const excludedSet = new Set(excludedHours?.map((h) => `${h}`))

  const timeRange = []

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

  return timeRange
}

export { generateHours }
