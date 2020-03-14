<template lang="pug">
  .app
    .body
      .menu
        .banner
          .title
            .selfPicture
            span Kai's Blog
        ul
          li 個人專頁
          li 文章分類一號
          li 文章分類二號
          li 文章分類三號
        .link
          .fb
          .github
      .content
        .articles
          .article
            span 文章一，今天學到區塊並行使用 css float: right, or left
          .article
            span 文章二，順便練習 vue-router, 元件 export 名稱請用 routes !!!
          .article
            span 為了 RWD 要改寫 css 為 flexbox 與 rem
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  @import '~@/assets/css/main.scss'
</style>
