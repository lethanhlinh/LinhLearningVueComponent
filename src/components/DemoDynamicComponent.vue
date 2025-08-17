<template>
  <div class="container">
    <div>
        <button class="btn btn-info" @click="handleSelectComponent('DangChieu')">
            Đang chiếu
        </button>
        <button class="btn btn-danger" @click="handleSelectComponent('SapChieu')">
            Sắp chiếu
        </button>
    </div>
    <keep-alive>
        <component :is="selectedComponent"></component>
    </keep-alive>
 
  </div>
</template>

<script>
import DangChieu from './DangChieu.vue';
import SapChieu from './SapChieu.vue';
export default {
    data() {
        return {
            selectedComponent: "DangChieu"
        };
    },
    methods: {
        handleSelectComponent(comp){
          
            this.selectedComponent = comp;
             console.log(this.selectedComponent)
        }
    },
    components:{
        DangChieu,
        SapChieu
    }
    
}
</script>

<style>

</style>