export const useHideEmail = (email) => {
  let skipFirstChars = 4
  let firstThreeChar

  let domainIndexStart = email.lastIndexOf('@')

  if (domainIndexStart > 4) {
    firstThreeChar = email.slice(0, skipFirstChars)
  } else {
    firstThreeChar = '****'
  }

  let maskedEmail = email.slice(skipFirstChars, domainIndexStart)

  if (maskedEmail) {
    maskedEmail = '****'
  }

  let domain = email.slice(domainIndexStart, email.length)

  return firstThreeChar.concat(maskedEmail).concat(domain)
}
