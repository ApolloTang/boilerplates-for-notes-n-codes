import {findSix, itemsType} from './00-recursion-into-array'

describe('v02 4:00, recusion into array', () => {
  it( 'not array, not 6', () => {
      const items = 0
      expect(findSix(items)).toBe(false)
    }
  )

  it( 'not array, is 6', () => {
      const items = 6
      expect(findSix(items)).toBe(true)
    }
  )

  it( 'level 2 nested', () => {
      const items = [ [1,2,3], [ 4,5,6] ]
      expect(findSix(items)).toBe(true)
    }
  )

  it( 'level 2 nested, 6 does not exist', () => {
      const items = [ [1,2,3], [ 4,5,7] ]
      expect(findSix(items)).toBe(false)
    }
  )

  it( 'level 3 nested, 6 does exist', () => {
      const items = [ [1,2,3], [ 4,5, [6]] ] as itemsType
      expect(findSix(items)).toBe(true)
    }
  )

  it( 'level 3 nested, 6 does NOT exist', () => {
      const items = [ [1,2,3], [ 4,5, [7]] ] as itemsType
      expect(findSix(items)).toBe(false)
    }
  )
})


