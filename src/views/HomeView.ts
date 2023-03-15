import { reactive,ref } from "vue";

export const submittedDataarray = reactive([]);

export const buyer = ref([]);
export const flats = ref();
export const floors = ref();
export const editDetail = (user:any) =>{
  buyer.value = user;
  flats.value = user.flatNo;
  floors.value = user.floorNo;
};
