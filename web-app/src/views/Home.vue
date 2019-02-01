<template lang="html">
  <div class="container">
    <!--  展示引入的header组件 -->
    <home-header></home-header>
    <div class="content">
      <ul class="cont-ul">
        <!-- list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的 -->
        <list v-for="item in items" :price="item.price" :title="item.title" :img="item.img"></list>
      </ul>
    </div>
    <!--&lt;!&ndash;  展示引入的footer组件 &ndash;&gt;-->
    <common-footer></common-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

/* import HomeHeader组件 */
import HomeHeader from '@/components/homeHeader.vue';
import CommonFooter from '@/components/commonFooter.vue';
import List from '@/components/list';

@Component({
  components: {
    //HelloWorld,
    HomeHeader,
    CommonFooter,
    List
  },
})
export default class Home extends Vue {

  data () {
    return {
      /* 定义一个空数组数据items */
      items: []
    }
  }
  /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
  created () {
    //console.log(this.$http);
    /* 调用vue的ajax来请求数据，promise语法，并用es6的箭头函数 */
    this.$http.get('/goods/list').then((data) => {
      var itemData = JSON.parse(data.bodyText);//将json字符串转换成json对象
      console.log(itemData.data);
      this.items = itemData.data.goods;
    })
  }
}
</script>
<style lang="css" scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .content {
    margin-bottom: 1.8rem;
  }
  .cont-ul {
    padding-top: 0.5rem;
    background-color: #ccc;
  }
  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
