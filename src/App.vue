<template>
  <div id="app">
    <Header/>
    <div class="main">
      <router-view name="slideBar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>


<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import PostList from '@/components/PostList.vue';

@Component({
  components: {Header, PostList}
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import '~@/assets/style/reset.scss';
@import "~@/assets/style/helper.scss";
</style>
