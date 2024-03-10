import { ref } from "vue";

const movesList = ref([
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
    }
  ]);

  export function useMove(id, movesList) {
    // const foundMove = 
    return movesList.find((move) => move.id === id);
  }