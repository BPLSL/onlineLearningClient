<template>
  <div>
    管理员登录界面
    <button @click="click()">点击</button>
  </div>
</template>

<script>

export default {
  name: 'AdminLogin',
  methods: {
    click: function(){
      this.$axios.get('/api/student/20210001')
    }
  },
  components: {
  }
}
</script>
<style lang="less">

</style>