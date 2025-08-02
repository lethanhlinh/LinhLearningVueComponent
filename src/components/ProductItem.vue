<template>
    <div class="card text-left">
        <img class="card-img-top" 
        :src="proItem.UrlImage" alt="">
        <div class="card-body">
        <h4 class="card-title">{{ proItem.NameItem }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        proItem: {
            type: Object
        }
    }

}
</script>

<style>

</style>