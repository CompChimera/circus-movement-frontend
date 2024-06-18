import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMoveStore = defineStore('MoveStore', {
  // Data
  state: () => ({
    moveList:  ref([
        {
          id: 1,
          name: "Straddle Mount",
          apparatus: 1
        },
        {
          id: 2,
          name: "Horse",
          apparatus: 1
        },
        {
          id: 3,
          name: "Roll (transition)",
          apparatus: 1
        },
        {
          id: 4,
          name: "Ankle Hang",
          apparatus: 1
        },
        {
          id: 5,
          name: "Person in the Moon",
          apparatus: 1
        }
      ]),
  }),
  //computed 
  getters: {
    getMoveById: (state) => {
        return (moveId) => state.moveList.find((move) => move.id === moveId);
    },
    getMoveByApparatus: (state) => {
        // const foundMove = this.moveList.filter((move) => move.apparatus == apparatusId);
        return (apparatusId) => state.moveList.filter((move) => move.apparatus == apparatusId);
    }
  },
  // Methods
  actions: {
    increment() {
      this.count++
    },

  }

})
