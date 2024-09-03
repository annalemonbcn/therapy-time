const generateHours = ({ startHour, finishHour }: { startHour: string; finishHour: string }) => {
  const start = new Date()
  start.setHours(parseInt(startHour.split(':')[0]), parseInt(startHour.split(':')[1]))

  const end = new Date()
  end.setHours(parseInt(finishHour.split(':')[0]), parseInt(finishHour.split(':')[1]))

  const diffMs = Math.abs(end.getTime() - start.getTime())
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))

  const timeRange = []

  timeRange.push(startHour)

  for (let i = 1; i <= diffHours; i++) {
    const current = new Date(start.getTime() + i * 36e5)
    timeRange.push(
      `${current.getHours().toString().padStart(2, '0')}:${current.getMinutes().toString().padStart(2, '0')}`
    )
  }

  return timeRange
}

export { generateHours }
