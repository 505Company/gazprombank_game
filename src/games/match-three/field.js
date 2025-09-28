export class Field {
  constructor(rows, cols, colors) {
    this.rowCount = rows
    this.colCount = cols
    this.elemCount = colors

    this.init()
  }

  init() {
    this.score = 0
    this.matrix = new Array(this.rowCount)
      .fill()
      .map(() => new Array().fill(null))

    for (let row = 0; row < this.rowCount; row++) {
      for (let col = 0; col < this.colCount; col++) {
        let value
        do {
          value = this.getRandomValue()
        } while (this.isStreak(col, row, value))
        this.matrix[row][col] = value
      }
    }
  }

  getRandomValue() {
    return Math.floor(Math.random() * this.elemCount) + 1
  }

  isStreak(x, y, value) {
    if (x >= 2) {
      if (this.matrix[y][x - 1] === value && this.matrix[y][x - 2] === value) {
        return true
      }
    }
    if (y >= 2) {
      if (this.matrix[y - 1][x] === value && this.matrix[y - 2][x] === value) {
        return true
      }
    }
    return false
  }
}
