<template>
    <div v-if="proItem" class="card text-left">
        <img class="card-img-top" 
        :src="proItem.UrlImage" alt="">
        <div class="card-body">
        <h4 class="card-title">{{ proItem.NameItem }}</h4>
        <button class="btn btn-info"
                @click="handleSelect(proItem)">
            Select
        </button>
        <p>{{ user }}</p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleSelect(proItem){
            this.$emit("custom-handle-select", proItem);
        }
    },
    props: {
        proItem: {
            type: Object
        }
    },
    inject : ["user"]

}
</script>

<style>

</style>