<template>

  <div class="meditation">
    <h1>Meditation</h1>

    <br />
<audio controls>
  <source src="med.ogg" type="audio/ogg">
  <source src="med.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
    <p>Imagine a world repaired</p>

<div class="next-container">
    
    <router-link class="link" :to="{ name: 'IslandView' }">🏝</router-link> 
    </div>

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
  background-color: #00000050;
  border-radius: 5%;
  padding: 2em;
  text-align: center;
}

.meditation h1 {
  font-size: 3em;
}

/* .meditation h2 {
  font-size: 2em;
} */

.next-container {
  border: solid 4px black;
  border-radius: 50%;
  width: 5em;
  height: 5em;
  margin: auto;
  font-size: 3em;
}

.next-container a {
  text-decoration: none;
}

audio {
  /* background-color: yellow; */
  border: solid green 4px;
  border-radius: 30px;
  margin: auto;
}

</style>

