<template>
  <div class="home">
    <div class="ndi_main">
      <ul v-for="item in newsAll">
        <li>
          <div>
            <img :src="item.image" :alt="item.title"/>
            <p>{{ item.title }}</p>
          </div>
        </li>
      </ul>
    </div>
    <login v-if="newsAll.length === 0"/>
  </div>
</template>

<script>
  import { getHomeNews } from '@/api/home'
  import login from "../login/login";

  export default {
    name: "home",
    data(){
      return {
        newsAll:[],
      }
    },
    methods:{
      /**
       *  Api 数据 - 接口
       */
      getHomeNews(){
        getHomeNews().then(res =>{
          if (res.data.code === 200){
            this.newsAll = res.data.result
          }
        }).catch(err => {
          console.log(err,'请求失败');
        })
      }
    },
    created() {
      this.getHomeNews();
    },
    mounted() {
      console.log($('.home'))
    },
    components: {
      login,
    },
  }
</script>

<style scoped lang="less">
  .home {
    font-size: 12px;
  }
  label input {
    border: 1px solid black;
  }
</style>
