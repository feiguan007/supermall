<template>
    <div>
        <NavBar class="home-nav"><div slot="center">购物车</div></NavBar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend-views :recommends="recommends"></recommend-views>
       
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendViews from './childComps/RecommendViews'
import {getHomeData} from 'network/home'

export default {
    name:"Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendViews
    },
    data(){
       return{
           banners:[],
           recommends:[]
       }
    },
    created(){
        getHomeData().then( res => {
           this.banners=res.data.banner.list;
           this.recommends=res.data.recommend.list;
           console.log(this.recommends)
           
        } )

    }
}
</script>

<style scoped>
    .home-nav{
      background-color: var(--color-tint);
      color: #fff;
    }
</style>

