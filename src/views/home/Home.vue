<template>
    <div id="home">
        <NavBar class="home-nav"><div slot="center">购物车</div></NavBar>

        <div class="wrapper">
           <div class="content">
                       <home-swiper :banners="banners"></home-swiper>
        <recommend-views :recommends="recommends"></recommend-views>
        <FeatureView></FeatureView>
        <tab-control class="tab-control" @tabclick="tabclick" :titles="['流行','新款','精选']"></tab-control>
                <good-list :goods="showgoods"></good-list>
           </div>
        </div>

    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/conntent/tabControl/TabControl'
import GoodList from 'components/conntent/goods/GoodList'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendViews from './childComps/RecommendViews'
import FeatureView from './childComps/FeatureView'
import {getHomeData,getHomeGoods} from 'network/home'


import BScroll from 'better-scroll'


export default {
    name:"Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendViews,
      FeatureView,
      TabControl,
      GoodList
    },
    data(){
       return{
           banners:[],
           recommends:[],
           goods:{
               'pop':{page:0,list:[]},
               'new':{page:0,list:[]},
               'sell':{page:0,list:[]}
           },
           currentType:'pop'
       }
    },
    computed:{
       showgoods(){
           return this.goods[this.currentType].list
       }
    },
    mounted(){
        let wrapper = document.querySelector('.wrapper')
        let scroll = new BScroll(wrapper)
    },
    created(){
        this.getHomeData();
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
    },
    methods:{
        getHomeData(){
          getHomeData().then( res => {
           this.banners=res.data.banner.list;
           this.recommends=res.data.recommend.list;
          })
        },
        getHomeGoods(type){
          const page = this.goods[type].page + 1;
          getHomeGoods(type,page).then(res => {
            this.goods[type].list.push(...res.data.list);
            this.goods[type].page = this.goods[type].page + 1
          })
        },
        tabclick(index){
            switch(index){
                case 0:
                  this.currentType = 'pop';
                  break;
                case 1:
                  this.currentType = 'new';
                  break;
                case 2:
                  this.currentType = 'sell';
                  break;
            }
        }
    }
}
</script>

<style scoped>
    #home{
        padding-top: 44px;
    }
    .home-nav{
      background-color: var(--color-tint);
      color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9;
    }
    .tab-control{
        position: sticky;
        top: 44px;
    }
    .wrapper{
       height:400px;
       background: red;
    }
</style>

