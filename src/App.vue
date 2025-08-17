<template>
  <h1> Hello World </h1>
  <FirstComponent></FirstComponent>
  <SecondComponent/>
  <ProductList />
  <LocalComponent />
  <global-component />
  <hr>
  <DemoSlots>
      <template #header>
          <h1>This is header</h1>
      </template>
      <template #footer>
        <h2>This is Footer</h2>
      </template>
      <template #default>
        <p>Default Template</p>
      </template>
  </DemoSlots>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue';
import SecondComponent from './components/SecondComponent.vue';
import ProductList from './components/ProductList.vue';
import LocalComponent from './components/LocalComponent.vue';
import GlobalComponent from './components/GlobalComponent.vue';
import DemoSlots from './components/DemoSlots.vue';
export default {
  name: 'App',
  components: {
    FirstComponent,
    SecondComponent,
    ProductList,
    LocalComponent,
    GlobalComponent,
    DemoSlots,
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
