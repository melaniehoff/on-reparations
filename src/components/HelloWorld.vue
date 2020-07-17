<template>
  <div class="hello">
    <h2>Reparations comes from the word repair.</h2>

<p>
  Repairing, as an opening towards a global broadening of what reparations is and can become.
</p>
<a href="">Share your responses to these questions</a>
<br />
<br />
</div>
</template>

<script>
export default {
  name: "Hello World",
  props: ["records"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
  font-size: 1.7em;
  color: lightyellow;
}
h2 {
  font-size: 4em;
  color: violet;
  margin-bottom: .5em;
}

a, a:visited {
  color: white;
  border: 2px solid violet;
  padding: .5em;
  border-radius: 10px;
  /* float: right; */
  /* display: flex; */
  position: fixed;
  right: 1em;
  bottom: 1em;
}

a:hover {
  background-color: lightyellow;
  color: black;
}



</style>
