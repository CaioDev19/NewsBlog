export function randomize<T>(arr: T[]): T[] {
  //Fisher-Yates Shuffle Modern Algorithm
  let copyArr = [...arr]
  let nextIndex = null,
    temp = null
  for (let i = copyArr.length - 1; i > 0; i--) {
    nextIndex = Math.floor(Math.random() * (i + 1))
    temp = copyArr[i]
    copyArr[i] = copyArr[nextIndex]
    copyArr[nextIndex] = temp
  }
  return copyArr
}
