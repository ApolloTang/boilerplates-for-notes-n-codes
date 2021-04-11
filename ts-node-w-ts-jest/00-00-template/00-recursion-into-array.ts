type itemsType =  number | number[] | number[][]

let items:itemsType = [
  [1,2,3],
  [
    4,5,
     6
     // [6]
  ]
]


// items = 0
items = 6
// console.log('hasSix: ', findSix(items))


type findSixArgsType = itemsType
function findSix(i:findSixArgsType) {
  let hasSix = false

  if (i===6) {

    hasSix = true

  } else if (Array.isArray(i)) {

      // Recussion
      i.forEach((a:itemsType)=>{

        // base case to exist recussion
        if (a===6) { hasSix = true }

        // recussion case
        if (Array.isArray(a)) { hasSix = findSix(a) }

      })
    }

  return hasSix
}

export {
  findSix,
  itemsType
}

