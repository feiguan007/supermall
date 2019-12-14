<template>
      <div class="recommend">
          <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
               <a :href="item.link">
                   <img :src="item.image" alt="">
               </a>
               <div>{{item.title}}</div>
          </div>
      </div>
</template>

<script>
export default {
    name:"RecommendViews",
    props:{
        recommends:{
            type:Array,
            default(){

            }
        }
    }
}
</script>

<style scoped>
.recommend{
    display: flex;
    text-align: center;
    font-size: 14px;
    border-bottom: 8px solid #eeeeee;
}
.recommend-item{
    flex: 1;
    padding: 15px 0px 30px 0px;
}
.recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}

</style>


