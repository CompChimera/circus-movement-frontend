import { reactive, ref } from "vue";

export const moveListGlobal =  ref([
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
]);

export function getMoveList() {
  return moveListGlobal;
}

export function useMove(id, movesList) {

  const foundMove = movesList.find((move) => move.id === id);
  if(foundMove && foundMove.name)
    return foundMove.name
  else
    return '(Error finding move data)'
}

export function useMovesFromApparatus(apparatusId) {
  const foundMove = moveListGlobal.value.filter((move) => move.apparatus == apparatusId);
  return foundMove
}