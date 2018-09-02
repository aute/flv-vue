<template>
  <div>
    <button @click="play">play</button>
    <button @click="refresh">refresh</button>
    <button @click="pause">pause</button>
    <flv-player ref="fp" :mediaDataSource='{
      type: "flv",
      url:"http://127.0.0.1:7001/hks/http.flv",
      isLive:true,
      }'
      :config='{
      // enableStashBuffer:false,
      }' />
  </div>
</template>
<script>
/* eslint-disable */

 export default {
    name: 'app',

    data() {
      return {}
    },

    // computed: {},

    // watch: {},

    // beforeCreate: function () {},
    created: function () {
    },
    // beforeMount: function () {},

    mounted: function () {
      
        
    },

    // beforeUpdate: function () {},
    // updated: function () {},
    // beforeDestroy: function () {},
    // destroyed: function () {},

    methods: {
      play(){
        this.$refs.fp.play()
      },
      refresh(){
        this.$refs.fp.refresh()
      },
      pause(){
        this.$refs.fp.pause()
      }
    }
  }
</script>
<style>
  .flv-player {
    width: 30%;
  }

</style>
