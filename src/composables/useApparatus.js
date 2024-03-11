import { reactive, ref } from "vue";

export const apparatusListGlobal = ref([
    {
      id: 1,
      name: "lyra",
      description: "steel hoop"
    }
  ]);
export function useApparatusList() {

    return apparatusListGlobal
}

export function getApparatus(apparatusId){

    const list = apparatusListGlobal;
    const foundApparatus = list.value.find((apparatus) => apparatus.id == apparatusId);

    return foundApparatus;
}

