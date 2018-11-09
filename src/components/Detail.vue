<template>
  <div class="detail">
    <MHeader :back="true">详情页</MHeader>
    <div class="content">
      <ul>
        <li>
          <label for="bookName">书的名称</label>
          <input type="text" v-model="book.bookName" id="bookName">
        </li>
        <li>
          <label for="bookInfo">书的信息</label>
          <input type="text" v-model="book.bookInfo" id="bookInfo">
        </li>
        <li>
          <label for="bookPrice">书的价格</label>
          <input type="text" v-model.number="book.bookPrice" id="bookPrice">
        </li>
        <li>
          <label for="bookCover">书的封面</label>
          <input type="text" v-model="book.bookCover" id="bookCover">
        </li>
        <button @click="update">确认修改</button>
      </ul>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader'
  import {findOneBook,updateBook} from "../api";

  export default {
    watch:{
      $route(){
        this.getData();
      }
    },
    data() {
      return {
        book:{}
      }
    },
    computed: {
      bid() {
        return this.$route.params.bid;
      }
    },
    created() {
      this.getData();
    },
    methods: {
      async getData() {
        this.book = await findOneBook(this.bid);
        Object.keys(this.book).length>0?void 0:this.$router.push('/list');
      },
      async update(){
        await updateBook(this.bid,this.book);
        this.$router.push('/list');
      }
    },
    components: {
      MHeader
    }
  }
</script>

<style scoped lang="less">
  ul{
    margin: 10px;
    li{
      label{
        display: block;
      }
      input{
        width: 100%;
        height: 30px;
        margin: 5px auto;
      }
    }
    button{
      display: block;
      width: 120px;
      height: 30px;
      background: royalblue;
      color: #fff;
      border: none;
      border-radius: 5px;
    }
  }
  .detail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: 100;
  }
</style>
