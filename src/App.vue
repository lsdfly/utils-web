<template>
  <div id="app">
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    </el-container>
 <el-container style="border: 1px solid #eee">
  <!-- <el-header></el-header> -->
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1','2','3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-loading"></i>常用工具</template>
        <el-menu-item index="1-1"><router-link to="crawler"> 爬虫工具</router-link></el-menu-item> 
        <el-menu-item index="1-2"><router-link to="api">接口测试</router-link></el-menu-item> 
     
        
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-loading"></i>常用工具</template>
        <el-menu-item index="2-1">爬虫工具</el-menu-item> 
        <el-menu-item index="2-2">接口测试</el-menu-item> 
     
        
      </el-submenu> <el-submenu index="3">
        <template slot="title"><i class="el-icon-loading"></i>常用工具</template>
        <el-menu-item index="3-1">爬虫工具</el-menu-item> 
        <el-menu-item index="3-2">接口测试</el-menu-item> 
     
        
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
   
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
.el-menu-item a {
  color: #000;
  display: block;
  width: 140%;
  text-decoration: initial;
}
.el-menu-item.is-active a {
  color: #409eff;
}
</style>
