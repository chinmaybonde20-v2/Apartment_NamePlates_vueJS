<template>
  <!-- <h1>hello edit</h1> -->
  <MyNavbar></MyNavbar>
  <div class="row">
    <div class="left-navbar">
      <LeftNavbar />
    </div>
    <!-- :rows="submittedDataarray" -->
    <!-- Table -->
    <div class="main-body">
      <h1>Welcome to {{ buyer.apartName }}</h1>
      <h1>Total floors :{{ floors }}</h1>
      <h1>Flat on each floor : {{ flats }}</h1>
      <hr />

      
      <ul v-for="owner in ownerinfoarr" :key="owner">
        <li>{{ owner.flatNo }}{{ owner.ownerName }}</li>
      </ul><hr>
      <!-- <p>{{ ownerinfoarr }}</p> -->
      
      <!-- Nameplate -->
      <div class="owner-master-div">

        
          <div v-for="tFlat in  totalFlat " :key="tFlat">
            <div v-for="tFloor in totalFloor" :key="tFloor">
            <div class="owner-card">
              <!-- <button @click="show = true">Flat no:{{ tFloor }}0{{ tFlat }}</button><br /> -->
            
              
              <button @click="fetchFlatno(tFlat,tFloor)">Flat no:{{ tFloor }}0{{ tFlat }}</button><br />
              <!-- {{ ownerinfoarr.map((value) => {
                if (value.flatNo === flatNum)
                return value.ownerName
              }) }} -->

            </div>
            </div>
          </div>
        
      </div>
      <!-- Nameplate -->

      <div class="editform">
        <EditForm :open="show" :flatprops="flatNum" @close="Close" @ownerinfo="ownerinfoFunc"></EditForm>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyNavbar from "@/components/MyComponents/MyNavbar.vue";
import LeftNavbar from "@/components/MyComponents/LeftNavbar.vue";
import { buyer,flats,floors } from "./HomeView";
import EditForm from "./EditForm.vue";
import { ref, reactive,computed,onMounted } from "vue";
import { fetchFlatno,show, flatNum,ownerinfoarr,createObjects } from "./EditPage";

import { object, string } from "yup";

// const ownerFlat = 

onMounted(() => {
   createObjects()
});


const Close = (open: boolean) => {
  show.value = open;
};

// const ownerinfoVar = ref();
// const ownerinfoFunc = (ownerinfoobj: object) => {
//   const index = ownerinfoarr.findIndex(x => x.flatNo === ownerinfoobj.current.value);
  
//   if(index)
//   {
//     ownerinfoarr[index].ownerName = ownerinfoobj.name;
//   }
//   return 0;
//   // ownerinfoVar.value = ownerinfoobj;
// };

const ownerinfoVar = ref();
// const btn1close = ownerinfoarr.map(b => b.btnclose);
// console.log(btn1close);

const ownerinfoFunc = (ownerinfoobj: { current: string; name: string }) => {

  const index = ownerinfoarr.findIndex(x => x.flatNo === ownerinfoobj.current.value);

  // console.log(index);

  if (index) {
    ownerinfoarr[index].ownerName = ownerinfoobj.name;
    // ownerinfoarr[index].btnclose = false;
    // btnclose.value = true;
    // ownerinfoVar.value = ownerinfoarr[index].ownerName ;
  }
  return 0;

  
  
};



const totalFlat = computed(() => 
{
  if(flats.value !== null && flats.value !== undefined)
  {
    return parseInt(flats.value);
  }
  return 0;
  
});

const totalFloor = computed(() => 
{
  if(floors.value !== null && floors.value !== undefined)
  {
    return parseInt(floors.value);
  }
  return 0;
  
});




</script>

<style>
.row {
  display: flex;
  flex-direction: row;
}

.left-navbar {
  background-color: rgb(214, 210, 210);
  width: 20%;
  height: 100vh;
}

.main-body {
  background-color: rgb(142, 156, 231);
  width: 80%;
  height: 100vh;
}

.editform {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

/* Owner card */
.owner-master-div {
  display: flex;
  flex-direction: row;
}

.owner-card {
  background-color: rgb(56, 47, 138);
  padding: 10px;
  margin: 10px;
  width: 120px;
  border-radius: 20px;
  color: rgb(12, 12, 12);
}

h1 {
  margin: 10px;
}
</style>