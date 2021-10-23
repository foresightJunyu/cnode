<template>
  <div class="PostList">
    <div class="posts">
      <ul>
        <div class="tooBar">
          <span>全部</span>
          <span>精华</span>
          <span>分享</span>
          <span>问答</span>
          <span>招聘</span>
          <span>客户端测试</span>
        </div>
        <li v-for="post in posts">
          <img :src="post.author.avatar_url" alt="">
          <span :class="[{put_good:(post.good == true),
            put_top:(post.top == true),
            'topicList-tab':(post.good !== true && post.top!==true)}]">
            <span>{{ post | tabFormatter }}</span>
          </span>
          <span class="allCount">
            <span class="reply_count">{{ post.reply_count }}</span>
            /{{ post.visit_count }}
          </span>
          <span class="title">
            {{ post.title }}
          </span>
          <span class="last_reply">
            {{ post.last_reply_at | formatDate }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

const axios = require('axios').default

@Component

export default class PostList extends Vue {
  posts: Array<[]> = [];
  props?: ['classSuffix'];
  // getDefaultAdapter() {
  //   let adapter;
  //   if (typeof XMLHttpRequest !== 'undefined') {
  //     // For browsers use XHR adapter
  //     adapter = require('./adapters/xhr');
  //   } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
  //     // For node use HTTP adapter
  //     adapter = require('./adapters/http');
  //   }
  //   return adapter;
  // }
  getData () {
    this.$axios.get('https://cnodejs.org/api/v1/topics', {
      page: 1,
      limit: 20
    })
      .then(res => {
        console.log(res)
        // @ts-ignore
        this.posts = res.data.data

        console.log(this.posts)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  beforeMount () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.PostList {
  display: block;
  background: #e1e1e1;

  .posts {
    padding-top: 20px;
    margin-left: 20px;

    > ul {
      .tooBar {
        height: 40px;
        background: #f5f5f5;

        > span {
          &:hover {
            color: #9e78c0;
          }

          font-size: 14px;
          margin: 0 12px;
          color: #80bd01;
          line-height: 40px;
          cursor: pointer
        }
      }

      list-style: none;
      width: 100%;
      max-width: 1344px;
      margin: 0 auto;

      & li:not(:first-child) {
        padding: 9px;
        font-size: 15px;
        font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
        font-weight: 400;
        background-color: white;
        color: #333;
        border-top: 1px solid #f0f0f0;
      }

      > li {
        padding: 10px 0px 10px 10px;
        font-size: 14px;
        line-height: 28px;

        &:not(first-child):hover {
          background: #f5f5f5;
        }

        &.last-child:hover {
          background: white;
        }

        > img {
          width: 30px;
          height: 30px;
          vertical-align: middle;
        }

        .put_good, .put_top {
          background: #80bd01;
          padding: 2px 4px;
          border-radius: 4px;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          color: #fff;
          font-size: 12px;
          margin-left: 85px;
        }

        .topicList-tab {
          background: #e5e5e5;
          color: #999;
          padding: 2px 4px;
          border-radius: 4px;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          font-size: 12px;
          margin-left: 85px;
        }

        .allCount {
          margin: -115px;
          width: 80px;
          display: inline-block;
          text-align: center;
          font-size: 12px;

          .reply_count {
            color: #9e78c0;
            font-size: 14px;
          }
        }

        .title {
          margin-left: 150px;
        }

        .last_reply {
          text-align: right;
          display: inline-block;
          float: right;
          min-width: 50px;
          white-space: nowrap;
          color: #778087;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
