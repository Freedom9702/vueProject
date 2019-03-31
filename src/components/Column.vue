<template>
  <div class="newsList">
    <ul>
      <li
      v-for='item of list'
      :key='item.id'
      >
       <img :src="item.author_face" >
        <a href="javascript:;">
          <h2>{{item.title}}</h2>
          <div v-html="item.content"></div>
        </a>
      </li>
     
    </ul>
</div>
</template>
<style scoped>
.content .newsList{width:6.4rem; margin:0 auto;}
.newsList ul{ padding:0 0.4rem;}
.newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
.newsList ul li img{display:block;width: 100%;margin:0 auto;}
.newsList ul li h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
.newsList ul li p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
.newsList{clear: both;margin-bottom:1rem;}
</style>

<script>
import List from './List';

export default {
    data(){
        return {
            list:'',
            dataName:'column'
        }
    },
    components:{List},
    mounted(){
       axios({
            url:baseUrl + '/data/article.data',
            params:{dataName:this.dataName}
        }).then(
         //   res => console.log(res.data)
            res => this.list = res.data
        )
        this.$root.$data.headerdisplay = true;
        this.$root.$data.headerdisplay = true
    }
}

</script>