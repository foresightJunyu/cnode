<template>
  <div>
    <Header/>
    <PostList/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import PostList from '@/components/PostList.vue'

@Component({
  components: { Header, PostList }
})
export default class HomePage extends Vue {

}

</script>

<style lang="scss" scoped>

</style>
