<template>
  <div v-title data-title="CMS后台管理">
  <el-container  class="container" v-title data-title="CMS后台管理系统">
    <el-header class="header">
      <Header></Header>
    </el-header>
    <el-container>
      <Left></Left>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>系统管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
          <router-view></router-view>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
  import Header from "../../components/a/Header"
  import Left from "../../components/a/Left";

  export default {
    name: "Index",
    components: {Header,Left},

  }
</script>

<style scoped>
  .container {
    background-color: #f2f2f2;
    position: absolute;
    bottom: 0px;
    top: 0px;
    left: 0px;
    right: 0px;
  }
  .header {
    background-color: #0081BD;
    width: 100%;
  }
  .el-main{
    position: absolute;
    left: 210px;
    top: 60px;
    bottom: 0px;
    right: 10px;
    padding: 0px;
    margin: 0px;
  }
  .el-breadcrumb{
    height: 45px;
    line-height: 45px;
    padding: 0px;
    margin: 0px;
  }
</style>