import { Field } from './field'

export default class MatchThree {
  constructor(rows, cols, colors) {
    this.field = new Field(rows, cols, colors)
    this.score = 0
  }

  swap(x1, y1, x2, y2) {
    const temp = this.field.matrix[y1][x1]
    this.field.matrix[y1][x1] = this.field.matrix[y2][x2]
    this.field.matrix[y2][x2] = temp
  }

  async swapWithCheck(x1, y1, x2, y2) {
    this.swap(x1, y1, x2, y2)

    const matches = this.findMatches()
  
    if (matches.length === 0) {
      await new Promise(resolve => setTimeout(resolve, 500))
      this.swap(x1, y1, x2, y2)
      return false
    } else {
      await this.resolveMatches()
      return true
    }
  }

  async resolveMatches() {
    let matches
    do {
      matches = this.findMatches()
      this.score += matches.length

      if (matches.length > 0) {
        this.removeMatches(matches)
        await new Promise(resolve => setTimeout(resolve, 500))
        this.collapse()
      }
    } while (matches.length > 0)
  }

  findMatches() {
    const matches = []

    for (let y = 0; y < this.field.rowCount; y++) {
      let streak = 1
      for (let x = 1; x < this.field.colCount; x++) {
        if (this.field.matrix[y][x] === this.field.matrix[y][x - 1]) {
          streak++
        } else {
          if (streak >= 3) {
            for (let k = 0; k < streak; k++) {
              matches.push({ x: x - 1 - k, y })
            }
          }
          streak = 1
        }
      }
      if (streak >= 3) {
        for (let k = 0; k < streak; k++) {
          matches.push({ x: this.field.colCount - 1 - k, y })
        }
      }
    }

    for (let x = 0; x < this.field.colCount; x++) {
      let streak = 1
      for (let y = 1; y < this.field.rowCount; y++) {
        if (this.field.matrix[y][x] === this.field.matrix[y - 1][x]) {
          streak++
        } else {
          if (streak >= 3) {
            for (let k = 0; k < streak; k++) {
              matches.push({ x, y: y - 1 - k })
            }
          }
          streak = 1
        }
      }
      if (streak >= 3) {
        for (let k = 0; k < streak; k++) {
          matches.push({ x, y: this.field.rowCount - 1 - k })
        }
      }
    }

    return matches
  }

  removeMatches(matches) {
    for (const { x, y } of matches) {
      this.field.matrix[y][x] = null
    }
  }

  collapse() {
    for (let x = 0; x < this.field.colCount; x++) {
      const column = []

      for (let y = 0; y < this.field.rowCount; y++) {
        if (this.field.matrix[y][x] !== null) {
          column.push(this.field.matrix[y][x])
        }
      }
  
      const missing = this.field.rowCount - column.length
  
      for (let i = 0; i < missing; i++) {
        column.unshift(this.field.getRandomValue())
      }
  
      for (let y = 0; y < this.field.rowCount; y++) {
        this.field.matrix[y][x] = column[y]
      }
    }
  }
}
