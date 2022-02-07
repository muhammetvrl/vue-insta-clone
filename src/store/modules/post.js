const posts = {
  namespaced: true,
  state: {
    posts: [
      {
        id: 1,
        username: "uiuxbunker",
        like: 0,
        saved: false,
        text: "Türkiye’nin çeşitli noktalarında yeşil ışık saçan bir meteor görüntülendi.Türkiye Uzay Ajansı konuyla ilgili açıklamalarda bulunduDüşen meteor hakkında ne biliyoruz?",
        imageUrl: "https://picsum.photos/1000/1000?random=1",
        profileUrl: "https://picsum.photos/30/30?random=1",
      },
      {
        id: 2,
        username: "yenisafak",
        like: 8,
        saved: false,
        text: "Türkiye’nin çeşitli noktalarında yeşil ışık saçan bir meteor görüntülendi.Türkiye Uzay Ajansı konuyla ilgili açıklamalarda bulunduDüşen meteor hakkında ne biliyoruz?",
        imageUrl: "https://picsum.photos/1000/1100?random=2",
        profileUrl: "https://picsum.photos/30/30?random=2",
      },
    ],
  },
  getters: {
    getPosts: (state) => state.posts,
  },
  mutations: {
    setPost(state, payload) {
      debugger;
      state.posts.unshift(payload);
    },
    Update_Like(state, payload) {
      state.posts[payload.index].like = payload.like;
    },
    Saved_Like(state, payload) {
      state.posts[payload.index].saved = !state.posts[payload.index].saved;
    },
  },
  actions: {
    setPosts({ commit }, payload = []) {
      commit("setPost", payload);
    },
    updateLikePost({ commit }, data) {
      commit("Update_Like", data);
    },
    savedPost({ commit }, data) {
      commit("Saved_Like", data);
    },
  },
};

export default posts;
