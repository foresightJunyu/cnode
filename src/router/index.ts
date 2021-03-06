import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import PostList from '@/components/PostList.vue';
import Article from "@/components/Article.vue";
import UserInfo from "@/components/UserInfo.vue";
import SlideBar from "@/components/SlideBar.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'root',
        components: {
            main: PostList
        }
    },
    {
        path: '/topic/:id&author=:name',
        name: 'post_content',
        components: {
            main: Article,
            slideBar: SlideBar
        }
    },
    {
        path: '/user_info/:name',
        name: 'user_info',
        components: {
            main: UserInfo
        }
    },


];

const router = new VueRouter({
    routes
});

export default router;
