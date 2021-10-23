<template>
  <div class="header">
    <a href="/">
      <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" height="30">
    </a>
    <form action="" class="bar-search">
      <input type="text">
    </form>
    <ul class="bar">
      <li>
        <a href="/">首页</a>
      </li>
      <li>
        <a href="/">新手入门</a>
      </li>
      <li>
        <a href="/">API</a>
      </li>
      <li>
        <a href="/">关于</a>
      </li>
      <li>
        <a href="/">注册</a>
      </li>
      <li>
        <a href="/">登录</a>
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {

}

</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.header {
  background: #333;
  font-family: $font-hei;
  display: flex;

  img {
    max-width: 120px;
    margin-left: 50px;
    margin-top: 10px;
  }

  .bar-search {
    margin: 15px;

    input {
      width: 220px;
      height: 26px;
      border-radius: 8px;
      background: #888;
    }
  }

  .bar {
    font-size: 14px;
    justify-content: flex-end;
    margin-left: auto;
    margin-top: 7px;

    li {
      display: inline-block;
      color: #ccc;
      padding: 10px 15px;
    }
  }
}
</style>
