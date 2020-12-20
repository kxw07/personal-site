<template lang="pug">
  .container.custom-container-width
    .div.self
      .picture
      .name Kai
    .div.experience
      .ul 工作經歷 ( Work Experience )
        li 新博軟體 2017/07 ~ 現在
        li 鼎新電腦 2015/11 ~ 2017/06
        hr
    .div.skills 技能 ( Skills )
      .ul 後端及框架 ( Backend & Framework )
        li Java
        li Spring
      .ul 前端及框架 ( Frontend & Framework )
        li JavaScript
        li Vue
        hr
    .div.others 其他 ( Others )
      .ul 資料庫語言 ( SQL )
        li Oracle
        li PostgreSQL
      .ul 程式控管及整合 ( Version Control, CI/CD )
        li Git
        li Drone.io
        li Jenkins
</template>

<script>
export default {
  name: 'WhoAmI'
}
</script>

<style type="scss">
.container.custom-container-width {
  margin-top: 15px;
  max-width: 930px;
}

.self {
  display: flex;
  align-items: baseline;
}

.picture {
  background: url('~@/assets/images/self.png') no-repeat;
  background-size: 10rem auto;
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
}

.name {
  font-size: xxx-large;
  padding-left: 20px;
}
</style>
