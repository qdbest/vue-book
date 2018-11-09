<template>
    <div>
      <m-header :back="true">添加</m-header>
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
          <button @click="addBook">确认添加</button>
        </ul>
      </div>
    </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue'
  import {addBook} from '../api'
  export default {
    data(){
      return {
        book:{}
      }
    },
    computed: {},
    created() {
    },
    methods: {
      async addBook(){
        await addBook(this.book);
        this.$router.push('/list');
      }
    },
    components:{
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
</style>
