// TODO: provisional
const getTherapistDbKey = (id: string) => {
  const map: Record<string, string> = {
    therapist1: '0',
    therapist2: '1',
    therapist3: '2',
    therapist4: '3',
    therapist5: '4',
    therapist6: '5',
    therapist7: '6',
    therapist8: '7'
  }

  return map[id]
}

export { getTherapistDbKey }
