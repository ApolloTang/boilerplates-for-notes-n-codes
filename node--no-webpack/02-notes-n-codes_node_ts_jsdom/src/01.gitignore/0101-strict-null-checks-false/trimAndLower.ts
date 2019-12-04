function trimAndLower(text: string) {
  return text.trim().toLowerCase()
}

console.log(trimAndLower(" LearnTypeScript.io ")) // ok
console.log(trimAndLower(null)) // Cannot read property 'trim' of null

let text : string
text = 'some string'
text = null
text = undefined

let num :number
num = 1
num = null
num = undefined

let bool: boolean
bool = true
bool = false
bool = null
bool = undefined


