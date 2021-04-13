<template>
  <div id="app">
    <!-- <div id="nav">
      <br/>
      <router-link to="/Student/login">学生登录</router-link> |
      <router-link to="/Teacher/login">老师登录</router-link> |
      <router-link to="/Admin/login">管理员登录</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
