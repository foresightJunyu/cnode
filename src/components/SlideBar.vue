<template>
  <div class="authorinfo">
    <div class="authorsummay">
      <div class="topbar">作者</div>
      <router-link :to="{
          name:'user_info',
          params:{
            name:userinfo.loginname
          }
          }">
        <img :src="userinfo.avatar_url">
      </router-link>
    </div>
    <div class="recent_topics">
      <div class="topbar">作者最近主题</div>
      <ul>
        <li v-for="list in topiclimitby5">
          <router-link :to="{
            name: 'post_content',
            params:{
              id: list.id,
              name: list.author.loginname
            }
          }">
            {{ list.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="recent_replies">
      <div class="topbar">最近回复</div>
      <ul>
        <li v-for="list in replylimitby5">
          <router-link :to="{
            name: 'post_content',
            params:{
              id: list.id,
              name: list.author.loginname
            }
          }">
            {{ list.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="js">

export default {
  name: "SlideBar",
  data() {
    return {
      isLoading: false,
      userinfo: {}
    };
  },
  methods: {
    getDate() {
      this.$axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then(res => {
            // @ts-ignore
            if (res.data.success == true) {
              // @ts-ignore
              this.userinfo = res.data.data;
            }
          })
          .catch(function (err) {
            console.log('err');
            console.log(err);

          });
    }
  },

  beforeMount() {
    this.getDate();
  },

  computed: {
    topiclimitby5() {
      if (this.userinfo.recent_topics) {
        return this.userinfo.recent_topics.slice(0, 5)
      }
    },
    replylimitby5() {
      if (this.userinfo.recent_replies) {
        return this.userinfo.recent_replies.slice(0, 5)
      }
    }
  }


};

</script>

<style lang="scss" scoped>
.authorsummay, .recent_replies, .recent_topics {
  background-color: #fff;
}

.authorinfo {
  width: 328px;
  float: right;
  margin-top: 0;
}

li {
  padding: 5px 0;
}

.recent_replies ul, .recent_topics ul {
  margin-top: 0px;
  margin-bottom: 0px;
  list-style: none;
  padding-left: 14px;
}

ul a {
  font-size: 12px;
  text-decoration: none;
  color: #778087;
}

.topbar {
  background-color: #f6f6f6;
  font-size: 12px;
  line-height: 20px;
  height: 35px;
}

img {
  height: 48px;
  width: 48px;
  border-radius: 3px;
  margin: 10px;
}

.loginname {
  width: 100px;
  float: right;
  margin-top: 22px;
  margin-right: 159px;
  font-size: 14px;
}

.loginname a {
  text-decoration: none;
  color: #778087;
}

.authorsummay  {
  margin-top: 0;
}
</style>
