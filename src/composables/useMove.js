import { reactive } from "vue";

export function getMoveList() {
  return [
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
  ];
}

  export function useMove(id, movesList) {
    const foundMove = movesList.find((move) => move.id === id);
    if(foundMove && foundMove.name)
      return foundMove.name
    else
      return '(Error finding move data)'
  }