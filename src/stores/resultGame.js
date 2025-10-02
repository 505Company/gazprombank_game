import { defineStore } from 'pinia'

export const useResultStore = defineStore('result', {
  state: () => ({
    result: null,
  }),
  actions: {
    setResultData(newResult) {
      this.result = newResult
    }
  }
})
