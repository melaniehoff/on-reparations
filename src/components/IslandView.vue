<template>
  <div class="about">
    IslandView!!!!!!!!
    <div class="bubble" v-for="q in reparationQuestions" v-bind:key="q">
      {{ q }}

      <router-link class="" :to="{ name: 'QuestionView', params: { question:  q} }">Bubble Link</router-link>
      
    </div>
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
      var self = this;
      try { 
        return Object.keys(self.reparations[0].fields);
      } catch(e) {
        return []
      }
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

