<template>
  <div class="about">
    ResponsesView!!!!!!!!
    for the question:
    {{ question }} 

    <div class="response" v-for="r in reparations" v-bind:key="r.id">
      {{ r.fields[question] }}
    </div>

    <IslandView />
  </div>
</template>

<script>

import IslandView from "@/components/IslandView.vue";

export default {
  name: "ResponsesView",
  data() {
    return {};
  },
  components: {
    IslandView,
  },
  computed: {
    question() {
     return this.$route.params.question;
    },
    reparations() {
      return this.$store.state.reparations;
    },
  },
  methods: {
  }
};
</script>


<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;
  margin: 10vh 10vw;
}

.response {
  margin: 10px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
}

</style>

