<template>
 <div>
   {{msg}}
   <a href="personal.html">跳转到personal页面</a>
   <p @click="stage">跳转到stage页面</p>
 </div>
</template>

<script>
export default {
  name: 'Cell',
  data () {
    return {
      msg: 'cell页'
    }
  },
  methods: {
    stage () {
      let this_ = this
      this_.$router.push({name: "Stage"})
    }
  }
}
</script>

<style scoped>
  p{
    cursor: pointer;
  }
</style>
