export const timeFormatter = (time: number) => {
  const minutes = time % 60
  const hours = Number((time / 60).toFixed())
  return `${hours} годин${hours === 0 ? 'a' : ''} ${minutes} хвилин`
}
