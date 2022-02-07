<template>
  <div class="card">
    <header>
      <div class="profil">
        <img width="30px" height="30px" :src="item.profileUrl" />
      </div>
      <div class="username">{{ item.username }}</div>
    </header>
    <img :src="item.imageUrl" />
    <div class="action">
      <div class="group">
        <button @click="likePost(index, item.like + 1)">
          <LikeIcon v-if="!liked"></LikeIcon>
          <LikeFillIcon v-else></LikeFillIcon>
          {{ item.like }}
        </button>
        <button>
          <CommentIcon></CommentIcon>
        </button>
        <button>
          <ShareIcon></ShareIcon>
        </button>
      </div>
      <button @click="savePost(index)">
        <SavedFillIcon v-if="item.saved"></SavedFillIcon>
        <SavedIcon v-else></SavedIcon>
      </button>
    </div>
    <div class="text">
      {{ item.text }}
    </div>
  </div>
</template>
//
<script>
import { mapActions } from "vuex";
import LikeIcon from "../icons/like.svg";
import LikeFillIcon from "../icons/likeFill.svg";
import CommentIcon from "../icons/comment.svg";
import ShareIcon from "../icons/share.svg";
import SavedIcon from "../icons/saved.svg";
import SavedFillIcon from "../icons/savedFill.svg";

export default {
  data() {
    return {
      liked: false,
    };
  },
  components: {
    LikeIcon,
    CommentIcon,
    ShareIcon,
    SavedIcon,
    SavedFillIcon,
    LikeFillIcon,
  },
  props: ["item", "index"],
  computed: {
    ...mapActions({
      updateLikePost: "posts/updateLikePost", // for using getters
    }),
  },
  methods: {
    likePost(index, like) {
      this.liked = true;
      this.$store.dispatch("posts/updateLikePost", {
        key: "posts",
        index,
        like,
      });
    },
    savePost(index) {
      this.$store.dispatch("posts/savedPost", {
        key: "posts",
        index,
      });
    },
  },
};
</script>
<style scoped lang="scss">
.card {
  width: 613px;
  border: 1px solid #ddd;

  .profil {
    margin-right: 15px;

    img {
      border-radius: 50%;
    }
  }

  .text {
    margin-top: 15px;
    padding: 20px 20px 40px 20px;
  }

  .action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #ddd;

    .group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }

  header {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 60px;
    border: 1px solid #ddd;
    padding: 0 10px;
  }
}
</style>
