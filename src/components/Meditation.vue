<template>
  <div class="meditation">
    Meditation!!!! Goes!! Here!!

    <br />

    Imagine an intro meditation

    <router-link class="link" :to="{ name: 'IslandView' }">IslandView!!!!k</router-link>
    <router-link class="link" :to="{ name: 'ReparationsDisplay' }">ReparationsDisplay</router-link>
    

  </div>
</template>

<script>

export default {
  name: "Meditation",
  data() {
    return {};
  },
  components: {
  },
  computed: {
  },
  methods: {
  }
};
</script>
<style scoped lang="scss">
.meditation {
  display: flex;
  min-height: 100vh;
  align-items: stretch;
  flex-direction: column;
  margin: 10vh 10vw;
}

</style>

