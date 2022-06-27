<template>
  <div class="home">
    <button @click="setIndex">点击播放</button>
    <player
      :playing="playing"
      :playlist="playlist"
      :currentIndex="currentIndex"
      @set-playing="setPlaying($event)"
      @set-playlist="setPlaylist($event)"
      @set-current-index="setCurrentIndex($event)"
    />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "HomeView",
  data() {
    return {};
  },
  methods: {
    ...mapMutations([
      "getCon",
      "setIndex",
      "setPlaying",
      "setPlaylist",
      "setCurrentIndex",
    ]),
    ...mapActions(["getList"]),
  },
  created() {
    this.getList();
    this.getCon();
  },
  computed: {
    ...mapState(["playing", "playlist", "currentIndex"]),
  },
};
</script>
