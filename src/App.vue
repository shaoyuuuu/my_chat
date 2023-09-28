<template>
  <div id="app">
  </div>
</template>

<script>
import bot from "./js/chat.js";
bot.run();
import { redStyle } from '@/js/init'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  computed:{

  },
  watch:{

  },
  methods:{},
  mounted(){
    redStyle()
  }
}
</script>

<style lang="less">
</style>
