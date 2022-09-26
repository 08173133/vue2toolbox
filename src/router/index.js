import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import box1 from "../components/box1"
import box2 from "../components/box2"

const routes = [{
    path: '/',
    redirect: '/box1'
},
{
    path: '/box1',
    components: {
        forbox1: box1,
        forbox2: box2
    }

},
{
    path: '/box2',
    components:{
        forbox2: box2
    }
}
]

export default new Router({
    mode: 'history',
    routes
})