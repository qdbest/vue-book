<template>
    <div>
      计数器：<button @click="minus">-</button>
      <br>
      当前：{{$store.state.count}}<br>
      计数器：<button @click="add">+</button>
    </div>
</template>

<script>
  import * as Types from '../store/type'
    export default {
        name: "Counter",
        data() {
            return {
            }
        },
        computed: {},
        created() {
        },
        methods: {
          add(){
            this.$store.commit(Types.INCREMENT);
          },
          minus(){
            this.$store.commit(Types.DECREMENT);
          }
        },
        components: {}
    }
</script>

<style scoped>

</style>
