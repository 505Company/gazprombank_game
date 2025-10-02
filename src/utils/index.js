export function pluralize(number, words) {
  const n = Math.abs(number) % 100
  const n1 = n % 10
  if (n > 10 && n < 20) return words[2]
  if (n1 > 1 && n1 < 5) return words[1]
  if (n1 === 1) return words[0]
  return words[2]
}

export function copyOnClipBoard(txt) {
  navigator.clipboard.writeText(txt)
}
