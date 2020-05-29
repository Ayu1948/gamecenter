<template>
  <div class="header">
    <a href="/" class="logo">
      <img :src="logoSrc" alt />
    </a>
    <ul class="nav-ul">
      <li v-for="item in navList" :key="item">
        <a :href="item.href">{{item.name}}</a>
      </li>
    </ul>
    <div class="search-box">
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchInput"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      logoSrc: "http://image.37wan.cn/platform/images/header/logo.png",
      navList: [
        { href: "/", name: "首页" },
        { href: "gamecenter", name: "游戏中心" },
        { href: "usercenter", name: "用户中心" },
        { href: "giftcenter", name: "礼包中心" }
      ],
      searchInput: ""
    };
  }
};
</script>

<style lang="less" scoped>
.header {
  min-width: 1260px;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
a.logo {
  width: 192px;
  height: 80px;
  /* padding-bottom: 8px; */
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 150px;
    height: 40px;
  }
}
ul.nav-ul {
  display: inline-block;
  li {
    width: 94px;
    height: 100%;
    line-height: 80px;
    display: inline-block;
    text-align: center;
    &:first-child {
      width: 90px;
    }
    a {
      color: #676767;
      font-size: 16px;
      text-decoration-line: none;
      padding: 5px 10px;
      border-radius: 15px;
      &.active {
        background: #ff8400;
        color: #fff;
      }
    }
    &:hover a {
      background: #ff8400;
      color: #fff;
    }
  }
}
</style>