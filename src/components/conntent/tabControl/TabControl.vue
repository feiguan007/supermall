<template>
    <div class="tab-control">
      <div v-for="(item,index) in titles" :key="index" class="tab-control-item" @click="itemClick(index)" :class="{active:index === currentIndex}">
         <span>
             {{item}}
         </span>
      </div>
    </div>
</template>
<script>
export default {
    name:"TabControl",
    props:{
        titles:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    data(){
       return{
            currentIndex:0
       }
    },
    methods:{
        itemClick(index){
           this.currentIndex = index;
           this.$emit('tabclick',index)
        }
    }
}
</script>
<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    background: #eeeeee;
    z-index:15;
}
.tab-control-item{
    flex: 1;
}
.tab-control-item span{
    padding: 5px;
}
.active span{
    color: var(--color-hight-text);
    border-bottom: 3px solid var(--color-tint);
}
</style>


