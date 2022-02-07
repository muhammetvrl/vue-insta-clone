<template>
  <header>
    <div class="flex-center">
      <router-link to="/"> <IconHome /> Instagram</router-link>
    </div>
    <div class="search">
      <form>
        <input name="search" placeholder="Search" />
      </form>
    </div>

    <nav class="nav-flex">
      <router-link to="/profile">Profile</router-link>
      <router-link to="/direct"><IconDirect /></router-link>
      <router-link to="/explore"><IconMessage /></router-link>
    </nav>
  </header>
</template>

<script>
import IconHome from "../icons/home.svg";
import IconDirect from "../icons/direct.svg";
import IconMessage from "../icons/message.svg";

export default {
  name: "Header",
  components: {
    IconHome,
    IconDirect,
    IconMessage,
  },
};
</script>

<style scoped lang="scss">
header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 60px;
  text-align: center;
  border-bottom: 1px solid rgba(219, 219, 219, 1);
  margin-bottom: 30px;

  .flex-center {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }

  .nav-flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .search {
    input {
      border: none;
      border-radius: 5px;
      padding: 10px;
      width: 60%;
      background: #f5f5f5;
    }
  }
}
</style>
