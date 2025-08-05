<template>
  <section class="container">
        <div class="row">
            <div 
                v-for="(productItem, index) in proList"
                :key="index"
                class="col-sm-3">
                <ProductItem :proItem="productItem"
                            @custom-handle-select = "HandleSelect" 
                />
            </div>
        </div>
  </section>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
    methods: {
        HandleSelect(proItem){
            console.log("work", proItem)
        }
    },
    data() {
        return {
            proList : [
                {
                    UrlImage:"https://salt.tikicdn.com/cache/750x750/ts/product/28/4e/95/7590df20fbe5b6ae5593273c98d247eb.png.webp",
                    NameItem:"Macbook Air M12"
                },
                {
                    UrlImage:"https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/1a/7f/72/5f3c9a7499bc976b932ef8cbd58c0282.jpg.webp",
                    NameItem:"Macbook Air M2"
                },
                {
                    UrlImage:"https://salt.tikicdn.com/cache/750x750/ts/product/fc/d4/df/1c547a75a7def0dfe38961252f546030.jpg.webp",
                    NameItem:"Laptop HP 14"
                },
                {
                    UrlImage:"https://salt.tikicdn.com/cache/750x750/ts/product/02/b7/8b/7bd87c7e4ce32d719b9a55391d746ad7.jpg.webp",
                    NameItem:"Asus Vivo Book"
                },
            ]
        }
    },
    components: {
        ProductItem
    }
}
</script>

<style>

</style>