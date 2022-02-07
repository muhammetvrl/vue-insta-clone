/* eslint-disable vue/valid-template-root */
<template>
  <div>
    <h1>Profile</h1>
    <div id="nav">
      <router-link to="/profile">post |</router-link> |
      <router-link to="/profile/igtv">igtv |</router-link>
      <router-link to="/profile/save">save |</router-link>
      <router-link to="/profile/tag">tag |</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>
