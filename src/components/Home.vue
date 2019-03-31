<template>
    <div>
        <slider :banner="banner"></slider>
        <list :list="list" :dataName="dataName"></list>
    </div>
</template>
<style>

</style>
<script>
import Slider from './Slider';
import List from './List';
import { basename } from 'path';
export default {
    data(){
        return {
            list:'',
            dataName:'home',
            banner:''
        }
    },
    components:{Slider,List},
    mounted(){
        // console.log('baseUrl',baseUrl)
        // console.log(axios)
        //本地
        this.$root.$data.bloading = true
        axios({
            url:baseUrl + '/data/index.data',
            params:{dataName:this.dataName}
        }).then(
             res => this.list = res.data
        )
        axios({
            url:baseUrl + '/data/banner.data',
            params:{dataName:'banner'}
        }).then(
            res => this.banner = res.data
        )
        this.$root.$data.headerdisplay = true
        this.$root.$data.footerdisplay = true
        this.$root.$data.bloading = false
        setTimeout(() => {
            this.$root.$data.bloading = false
        }, 3000);
        
        //远端服务器
        // axios({
        //     url:'/api/prooduct',
        //     params:{dataName:this.dataName}
        // }).then(
        //     res => console.log(res.data)
        // )

        //访问豆瓣的数据，前端跨域，服务器代理(未成功)
        // axios({
        //     url:'/douban/v2/movie/top250',
        //     params:{start:1,count:3}
        // }).then(
        //     res => console.log(res.data)
        // )
    }
}
</script>
