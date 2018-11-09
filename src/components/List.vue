<template>
  <div>
    <m-header :back="true">列表</m-header>
    <div class="content" ref="content" @scroll="scroll">
      <ul>
        <router-link v-for="(book,index) in books" :to="{name:'detail',params:{bid:book.bookId}}" :key="index" tag="li">
          <img v-lazy="book.bookCover" alt="">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice}}</b>
            <button @click.stop="remove(book.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
      <button @click="getBooks">获取更多</button>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue'
  import {pagination, removeBook} from '../api'

  export default {
    data() {
      return {
        books: [],
        offset: 0,
        hasMore: true,
        isLoaded: true
      }
    },
    computed: {},
    created() {
      this.getBooks();
    },
    mounted() {
      let content = this.$refs.content;
      let top = content.offsetTop;
      content.addEventListener('touchstart', (e) => {
        let start = e.touches[0].pageY;
        content.addEventListener('touchmove', (e) => {
          let current = e.touches[0].pageY;
          let distance = current - start;
          if (distance > 0) {
            content.style.top = (distance <= 50 ? distance : 50) + top + 'px';
            content.addEventListener('touchend', (e) => {
              this.books=[];
              content.style.top = top+'px';
            });
          } else {
            content.removeEventListener('touchstart', true);
            content.removeEventListener('touchmove', true);
            content.removeEventListener('touchend', true);
          }
        });
      });

    },
    methods: {
      scroll() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          let {scrollTop, clientHeight, scrollHeight} = this.$refs.content;
          if (scrollTop + clientHeight + 10 > scrollHeight) {
            this.getBooks();
          }
        }, 100);
      },
      async getBooks() {
        if (!this.isLoaded) {
          return;
        }
        this.isLoaded = false;
        let {hasMore, books} = await pagination(this.offset);
        this.hasMore = hasMore;
        this.books.push(...books);
        this.offset = this.books.length;
        this.isLoaded = true;

      },
      async remove(id) {
        await removeBook(id);
        this.books = this.books.filter(item => item.bookId !== id);
      }
    },
    components: {
      MHeader
    }
  }
</script>

<style scoped lang="less">
  .content ul {
    padding: 10px;
    li {
      display: flex;
      padding: 10px;
      border-bottom: 1px solid #f1f1f1;
      img {
        width: 100px;
        height: 110px;
      }
      div {
        h4 {
          color: #2c2c2c;
        }
        p {
          color: #ccc;
          font-size: 12px;
        }
        b {
          color: red;
        }
      }
      button {
        display: block;
        width: 60px;
        height: 20px;
        background: orange;
        color: #fff;
        border: none;
        border-radius: 5px;
      }
    }
  }
</style>
