import { ref,reactive } from "vue";
import { string } from "yup";

export const show = ref(false);
export const flatNum = ref();
// export const ownerinfoarr = reactive([]);
interface owner {
    flatNo:string;
    ownerName:string;
    ownerEmail:string;
    ownerMob:string;
    btnclose:boolean;
}
export const ownerinfoarr: owner[] = [];

export const createObjects = (numObjects: number) => {
    for (let i = 0; i < numObjects; i++) {
      const newObj: owner = {
        flatNo:flatNum.value,
        ownerName:"",
        ownerEmail:"",
        ownerMob:"",
        btnclose:false
      };
      ownerinfoarr.push(newObj);
      console.log(ownerinfoarr);
    }
};

export const fetchFlatno = (flat:any,floor:any) => {
    show.value = true;
    flatNum.value = (floor + "0" + flat);
    const flatNumobj : owner = {
        flatNo:flatNum.value,
        ownerName:"",
        ownerEmail:"",
        ownerMob:"",
        btnclose:false

    };
    // ownerinfoarr.push(flatNumobj);
    console.log(flatNumobj);
    // console.log(ownerinfoarr);
    // console.log(flatNum.value);
  }