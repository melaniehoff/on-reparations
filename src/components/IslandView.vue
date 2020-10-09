<template>
  <div class="about">
    IslandView!!!!!!!!
    <div class="bubble" v-for="q in reparationQuestions" v-bind:key="q">
      {{ q }}

      <router-link class="" :to="{ name: 'ResponsesView', params: { question:  q} }">Bubble Link</router-link>

    </div>
              <router-link class="link" :to="{ name: 'ReparationsDisplay' }">Index View</router-link> 

  </div>
</template>

<script>


export default {
  name: "IslandView",
  data() {
    return {};
  },
  components: {
  },
  computed: {
    reparations() {
      return this.$store.state.reparations;
    },
    reparationQuestions() {
      return this.$store.state.reparationQuestions;
    },
  },
  methods: {
  }
};
</script>


<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: row;
  margin: 10vh 10vw;
}

.bubble {
  background-color: lightblue;
  margin: 30px;
  border-radius: 10px;
}

</style>

