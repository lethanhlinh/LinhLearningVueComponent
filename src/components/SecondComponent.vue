<template>
  <h2> This is my second component</h2>
  <p> {{ message }}</p>
</template>

<script>
export default {
    data(){
        return {
            message : 'Hello from SecondComponent!'
        }
    }
}
</script>

<style scoped>
p {
    color:chartreuse;
}
</style>