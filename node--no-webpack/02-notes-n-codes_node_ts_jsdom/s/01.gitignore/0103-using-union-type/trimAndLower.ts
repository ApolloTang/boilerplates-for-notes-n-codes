function trimAndLower(text: string | null | undefined ) {
  return text.trim().toLowerCase()
}

console.log(trimAndLower(" LearnTypeScript.io ")) // ok
console.log(trimAndLower(null)) // Cannot read property 'trim' of null

let text : string | null | undefined
text = 'some string'
text = null
text = undefined

let num :number | null | undefined
num = 1
num = null
num = undefined

let bool: boolean | null | undefined
bool = true
bool = false
bool = null
bool = undefined


