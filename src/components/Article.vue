<template>
  <div class="article">
    <div class="loading" v-if="isLoading">
      <img src="@/assets/loading.gif">
    </div>
    <div v-else>
      <div class="topic_header">
        <div class="topic_title"> {{ post.title }}</div>

        <ul>
          <li><strong>·</strong>&nbsp发布于：{{ post.create_at | formatDate }}</li>
          &nbsp
          <li><strong>·</strong>&nbsp作者：{{ post.author.loginname }}</li>
          &nbsp
          <li><strong>·</strong>&nbsp{{ post.visit_count }}次浏览</li>
          &nbsp
          <li><strong>·</strong>&nbsp来自{{ post | tabFormatter }}</li>
        </ul>
        <div v-html="post.content" class="topic_content"></div>
      </div>
      <div id="reply">
        <div class="topbar">回复</div>
        <div v-for="(reply,index) in post.replies" class="replySec">
          <div class="replyUp">
            <router-link :to="{
          name:'user_info',
          params:{name:reply.author.loginname}
          }">
              <img :src="reply.author.avatar_url" alt="">
            </router-link>
            <router-link to="user_info">
              <span>{{ reply.author.loginname }}</span>
            </router-link>
            <span>☝{{ index + 1 }}楼</span>
            <span v-if="reply.ups.length>0">
            <icon class="iconfont icon-dianzan"></icon>
            {{ reply.ups.length }}</span>
            <span v-else></span>
          </div>
          <p v-html="reply.content"></p>
        </div>

      </div>
    </div>
  </div>

</template>

<script lang="js">

export default {
  name: "Article",
  data() {
    return {
      isLoading: false,
      post: {}
    };
  },
  methods: {
    getArticleDate() {
      this.$axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then(res => {
            // @ts-ignore
            if (res.data.success == true) {
              // @ts-ignore
              this.isLoading = false
              // @ts-ignore
              this.post = res.data.data
            }
          })
          .catch(function (err) {
            console.log('err');
            console.log(err);

          });
    }
  },

  beforeMount() {
    this.isLoading = true
    this.getArticleDate()
  },
  watch: {
    '$route'(to, from) {
      this.getArticleDate()
    }
  }

}

</script>

<style lang="scss">
@import url('../assets/style/markdown-github.css');

.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 35px;
  font-size: 12px;
  margin-top: 10px;
}

.article:not(:first-child) {
  margin-right: 340px;
  margin-top: 15px;
}

#reply, .topic_header {
  background-color: #fff;
}

#reply {
  margin-top: 15px;
}

#reply img {
  width: 30px;
  height: 30px;
  position: relative;
  bottom: -9px;
}

#reply a, #reply span {
  font-size: 13px;
  color: #666;
  text-decoration: none;
  margin-left: 10px;
}
#reply a, #reply p {
margin-top: 10px;
  margin-left: 5px;
}

.replySec {
  border-bottom: 1px solid #e5e5e5;
  padding: 10px;
}

.loading {
  text-align: center;
  padding-top: 10px;
}

.replyUp a:nth-of-type(2) {
  margin-left: 0;
  display: inline-block;
  height: 25px;
}

.topic_header {
  padding: 10px;
}

.topic_title {
  font-size: 20px;
  font-weight: bold;
  padding-top: 8px;
}

.topic_header ul {
  list-style: none;
  padding: 0 0;
  margin: 6px 0;
}

.topic_header li {
  display: inline-block;
  font-size: 12px;
  color: #838383;
}

.topic_content {
  border-top: 1px solid #e5e5e5;
  padding: 0 10px;
}

.markdown-text img {
  width: 92% !important;
}
</style>
