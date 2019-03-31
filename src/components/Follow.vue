<template>
   <div class="newList">
      <list :list="list" :dataName="dataName"></list>
   </div>
</template>
<style>
 .newsList{clear: both;margin-bottom:1rem;margin-top:.7rem;}
</style>
<script>
import List from './List';
// import { constants } from 'fs';

export default {
    data(){
        return {
            list:'',
            dataName:'follow'
        }
    },
    components:{List},
    mounted(){
        this.$root.$data.bloading = true
       axios({
            url:baseUrl + '/data/follow.data',
            params:{dataName:this.dataName}
        }).then(
         //   res => console.log(res.data)
            res => this.list = res.data
        )
        this.$root.$data.headerdisplay = true;
        this.$root.$data.footerdisplay = true;
        this.$root.$data.bloading = false
    }
}

</script>


