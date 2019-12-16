<template>
    <div class="goods">
        <good-list-items v-for="(item,index) in goods" :key="index" :goodsItem="item"></good-list-items>
    </div>
</template>

<script>
import GoodListItems from "./GoodListItems"
export default {
    name:"GoodList",
    props:{
        goods:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    components:{
       GoodListItems
    }
}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>


