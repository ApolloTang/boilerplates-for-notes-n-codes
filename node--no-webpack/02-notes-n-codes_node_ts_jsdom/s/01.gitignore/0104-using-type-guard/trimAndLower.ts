function trimAndLower(
  text: string | null | undefined  // <-- this is the only ts syntax
) {
  if (typeof text === 'string') { // <-- typeGuard
    return text.trim().toLowerCase()
  }
  return text
}

console.log('string', trimAndLower(" LearnTypeScript.io ")) // 'LearnTypeScript'
console.log('null  ', trimAndLower(null))           // null
console.log('undefiend ', trimAndLower(undefined))  // undefined



