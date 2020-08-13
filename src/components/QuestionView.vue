<template>
  <div class="about">
    QuestionView!!!!!!!!
    for the question:
    {{ question }} 
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
    }
  },
  methods: {
  }
};
</script>
<style scoped lang="scss">
.about {
  display: flex;
  min-height: 100vh;
  align-items: stretch;
  flex-direction: row;
  margin: 10vh 10vw;
}

</style>

