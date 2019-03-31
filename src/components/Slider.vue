<template>
    <div class="banner">
      <ul class="clearfix">
        <li
        v-for="item of banner"
        :key=item.id
        ><img :src="item.bimg" alt=""/>
          <div class="text-box">
            <h2>{{item.title}}</h2>
            <p>{{item.author}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>
<style>
.content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;}
.banner{margin-top:0.6rem;position: relative; z-index: 1;height:3rem;}
/* .banner ul{height: 3rem;position: relative;} */
.banner ul li{width:6.4rem;float:left;position: relative;height: 3rem;}
.banner ul li img{width:100%; display:block;height: 100%;}
.banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
.text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.text-box p{ line-height:100%;}

.banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
.banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
.banner ol li.active{ background:#fff;}
</style>

<script>
import Swipe from '../assets/js/swipe';
export default {
  // data(){return {baseUrl}},
  props:['banner'],
    updated(){
      // console.log($('.banner')[0])
        var mySwipe=new Swipe($('.banner')[0],{
        auto:2000,
        continuous:true,
        stopPropation:true,
        callback:function (index,element){
          $('.banner ol li').removeClass('active');
          $('.banner ol li').eq(index).addClass('active');
        }
      })
    },
}
</script>
