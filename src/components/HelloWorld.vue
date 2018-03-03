<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
// import {axiosServer} from '@/api/judge'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    // init () {
    //   // 使用 Mock
    //   var Mock = require('mockjs')
    //   // const Mock = require('mockjs')
    //   var data = Mock.mock({
    //     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    //     'list|1-10': [{
    //       // 属性 id 是一个自增数，起始值为 1，每次增 1
    //       'id|+1': 1
    //     }]
    //   })
    //   // 输出结果
    //   console.log(JSON.stringify(data, null, 4))
    // },
    // init1 () {
    //   axiosServer({url: '/news/index'}).then((resp) => {
    //     console.log('resp:', resp)
    //   })
    // },
    axiosServer () {
      return axios.post('/news/index', 'type=top&key=123456')
    },
    setNewsApi () {
      this.axiosServer()
      // api.JH_news('/news/index', 'type=top&key=123456')
        .then(res => {
          console.log(res)
          this.newsListShow = res.data.articles
        })
    }
  },
  created () {
    this.setNewsApi()
    // this.init1()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
