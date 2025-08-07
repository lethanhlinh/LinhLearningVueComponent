<template>
  <h1> Hello World </h1>
  <FirstComponent></FirstComponent>
  <SecondComponent/>
  <ProductList />
  <LocalComponent />
  <global-component />
</template>

<script>
import FirstComponent from './components/FirstComponent.vue';
import SecondComponent from './components/SecondComponent.vue';
import ProductList from './components/ProductList.vue';
import LocalComponent from './components/LocalComponent.vue';
import GlobalComponent from './components/GlobalComponent.vue';
export default {
  name: 'App',
  components: {
    FirstComponent,
    SecondComponent,
    ProductList,
    LocalComponent,
    GlobalComponent,
  },
  provide() {
    return {
      user : "Lê Nguyễn Thành Linh"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
