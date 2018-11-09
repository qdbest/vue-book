<template>
  <div>
    <m-header>首页</m-header>
    <div class="content">
      <loading v-if="loading"></loading>
      <template v-else>
        <swiper :swiperSlides="sliders"></swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="book in hotBooks">
              <img v-lazy="book.bookCover"/>
              <b>{{book.bookName}}</b>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue'
  import Loading from '../base/Loading'
  import Swiper from '../base/Swiper.vue'
  import {getAll} from '../api'

  export default {
    data() {
      return {
        sliders: [],
        hotBooks: [],
        loading: true
      }
    },
    computed: {},
    created() {
      this.getData();
    },
    methods: {
      async getData() {
        [this.sliders, this.hotBooks] = await getAll();
        this.loading = false;
      },
    },
    components: {
      Swiper, MHeader,Loading
    }
  }
</script>

<style scoped lang="less">
  h3 {
    color: #999;
    padding: 5px 0;
  }

  .container {
    width: 90%;
    margin: 0 auto;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
