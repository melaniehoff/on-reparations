<template>
  <div class="about">
    QuestionView!!!!!!!!
    for the question:
    {{ question }} 

    <div class="response" v-for="r in reparations" v-bind:key="r.id">
      {{ r.fields[question] }}
    </div>
  </div>
</template>

<script>

export default {
  name: "QuestionView",
  data() {
    return {};
  },
  components: {
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

