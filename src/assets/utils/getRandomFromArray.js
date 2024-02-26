

const getRandomFromArray = arr => {
  const indexRadom = Math.floor(Math.random() * arr.length)
  return arr[indexRadom]
}

export default getRandomFromArray