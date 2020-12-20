<template lang="pug">
  .container
    .div.text-center
      .selfPicture.img-fluid
    .name Kai
    .skill
      .code Coding Language
        ul Main
          li Java
          li OracleSQL, PostgreSQL
        ul Side
          li JavaScript
          li CSS
      .devops DevOps
        ul
          li GitLab
          li Drone.io
          li Jenkins
          li LineBot integration
          li Slack integration
    .experience
</template>

<script>
export default {
  name: 'WhoAmI'
}
</script>
<style type="scss">
.selfPicture {
  background: url('~@/assets/images/self.png') no-repeat;
  background-size: 10rem auto;
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  margin: auto;
}
</style>
