<template lang="pug">
  .container.custom-container-width
    .div.self
      .picture
      .name Kai
    hr
    .div.aaa
      .h4 工作經歷 ( Work Experience )
      ul
        li 新博軟體 2017/07 ~ 現在
        li 鼎新電腦 2015/11 ~ 2017/06
        br
        hr
      .h4 技能 ( Skills )
      .h5 後端及框架 ( Backend & Framework )
      ul
        li Java
        li Spring
        br
      .h5 前端及框架 ( Frontend & Framework )
      ul
        li JavaScript
        li Vue
        br
      .h5 資料庫語言 ( SQL )
      ul
        li Oracle
        li PostgreSQL
        br
      .h5 版本控管及整合 ( VCS, CI/CD )
      ul
        li Git
        li Drone.io
        li Kubernetes
</template>

<script>
export default {
  name: 'WhoAmI'
}
</script>

<style type="scss">
.container.custom-container-width {
  padding-top: 15px;
  max-width: 750px;
  font-family: "sans-serif";
  background: #e5ffea;
}

.self {
  display: flex;
  align-items: flex-end;
  padding: 0 15px 15px 0;
}

.picture {
  background: url('~@/assets/images/self.png') no-repeat;
  background-size: 10rem auto;
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  border-style: solid;
  border-width: medium;
  border-color: #d6ffeb;
}

.name {
  font-size: 6rem;
  padding-left: 20px;
  font-family: Brush Script MT, Brush Script Std, cursive;
  line-height: 1;
}

/*li {*/
/*  text-indent: 1rem;*/
/*}*/

.h5 {
  text-indent: 1rem;
}
</style>
