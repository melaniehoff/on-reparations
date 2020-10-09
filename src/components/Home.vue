<template>
  <div class="hello">
    <div class="welcome-container">
<div class="side-by-side">

<img src="@/assets/rep1.png">
<img id="global" src="@/assets/global.png" />
    <!-- <h2>Reparations comes from the word repair.</h2> -->
</div>

<!-- <div class="side-by-side2"> -->
<p>
  Reparations comes from the word repair.
</p>
<!-- <div class="circle">
  <a id="share" target="_blank" href="https://airtable.com/shrj959WnUQbuxKxV">Share yours</a>
</div> -->
<!-- </div> -->
<router-link class="link" :to="{ name: 'Meditation' }">Meditation ⤳</router-link>
  

</div>

</div>
</template>

<script>

export default {
  name: "NavHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@font-face {
    font-family: 'fleurondingbats';
    src: url('/fonts/fleurondingbats-webfont.woff2') format('woff2'),
         url('/fonts/fleurondingbats-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}
@font-face {
    font-family: 'fleuronmixed';
    src: url('/fonts/fleuronmixed-webfont.woff2') format('woff2'),
         url('/fonts/fleuronmixed-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'fleuronregular';
    src: url('/fonts/fleuronregular-webfont.woff2') format('woff2'),
         url('/fonts/fleuronregular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


img {
  width: 50%;
  margin-bottom: 0em;
}
.link {
  text-decoration: none;
  font-size: 3em;
}
.next-container {
  border: solid 4px black;
  border-radius: 50%;
  width: 5em;
  height: 5em;
  margin: auto;
}



#global {
  display: flex;
  float: right;
  width: 30%;
  margin-right: 7em;
}

button {
  font-family: 'MuseoModerno', cursive;
  font-size: 2em;
  background: transparent;
  z-index: 10;
  font-weight: 800;
  border: none;
  border-bottom: 4px solid black;
  
}

button:focus {     
    /* background-color:yellow;     */
}

p {
  font-size: 3em;
  color: #231E20;
  width: fit-content;
  /* font-family: 'Kelly Slab', cursive; */
  font-family: 'MuseoModerno', cursive;
  /* font-family: 'Cinzel Decorative', cursive; */
}


.side-by-side {
  width: 100vw;
}


a, a:visited {
  color: black;

}

a:hover {
  color: pink;
}


</style>
