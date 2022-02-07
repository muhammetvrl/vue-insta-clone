<template>
  <div class="home">
    <Container>
      <div class="add-post">
        <button @click="openDialog()">Gönderi Ekle</button>
      </div>
      <template v-for="(item, idx) in posts">
        <Post :item="item" :index="idx" :key="idx"></Post>
      </template>
    </Container>

    <div v-show="opened" class="dialog">
      <label>
        Username
        <input type="text" v-model="username" />
      </label>
      <label>
        İçerik
        <textarea type="text" v-model="content" :cols="10" :rows="10" />
      </label>
      <button @click="closeDialog()">Close</button>
      <button @click="addPost()">Confirm</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import Container from "../../components/Container.vue";
import Post from "../../components/Post.vue";

export default {
  name: "Home",
  data() {
    return {
      username: "",
      content: "",
      opened: false,
    };
  },
  components: {
    Container,
    Post,
  },
  computed: {
    ...mapGetters({
      posts: "posts/getPosts", // for using getters
    }),
  },
  methods: {
    openDialog() {
      this.opened = true;
    },
    closeDialog() {
      this.opened = false;
    },
    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    addPost() {
      this.$store.dispatch("posts/setPosts", {
        id: this.randomIntFromInterval(1, 100),
        username: this.username,
        text: this.content,
        like: 0,
        saved: false,
        imageUrl:
          "https://picsum.photos/1000/1000?random=" +
          this.randomIntFromInterval(1, 100),
        profileUrl:
          "https://picsum.photos/30/30?random=" +
          this.randomIntFromInterval(1, 100),
      });
      this.username = "";
      this.content = "";
      this.closeDialog();
    },
  },
};
</script>
<style scoped lang="scss">
.dialog {
  position: absolute;
  width: 50vw;
  height: auto;
  background-color: #eee;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;

  button {
    background: #2c3e50;
    color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
  }

  label {
    width: 100%;
  }
  input {
    height: 40px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0 10px;
  }

  textarea {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0 10px;
  }
}

.add-post {
  button {
    padding: 10px 20px;
    border: 1px solid peru;
    border-radius: 10px;
  }
}
</style>
