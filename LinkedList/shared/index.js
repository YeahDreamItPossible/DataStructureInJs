let start = 0

export const generateUID = () => {
  start += 1
  return `node_${start}`
}