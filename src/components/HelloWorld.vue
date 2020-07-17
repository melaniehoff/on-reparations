<template>
  <div class="hello">
<div class="side-by-side">

<img src="@/assets/rep1.png">
<img id="global" src="@/assets/global.png" />
    <!-- <h2>Reparations comes from the word repair.</h2> -->
</div>

<div class="side-by-side2">
<p>
  Reparations comes from the word repair.
</p>

<div class="circle">
  <a id="share" target="_blank" href="https://airtable.com/shrj959WnUQbuxKxV">Share yours</a>
</div>

</div>
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
  width: 500px;
  margin-bottom: 2em;
}

p {
  font-size: 3em;
  color: #231E20;
  width: fit-content;
  /* font-family: 'Kelly Slab', cursive; */
  font-family: 'MuseoModerno', cursive;
  /* font-family: 'Cinzel Decorative', cursive; */
}
h2 {
  /* font-size: 7em;
  color: black;
  margin-bottom: .5em;
  font-family: "fleuronmixed"; */
}

.side-by-side {
  width: 100vw;
}


.side-by-side2 {
  width: 100vw;
  display: flex;
}

#global {
  display: flex;
  float: right;
  width: 400px;
  margin-right: 7em;
}

#share {
  display: block;
  position: absolute;
  font-size: 3em;
  color: #231E20;
  font-family: 'MuseoModerno', cursive;
  top: 12em;
  right: 3em;
  transform: rotate(12deg) !important;
}

#share:hover {
  color: #FFDA4C;
}



a, a:visited {
  color: black;

}

a:hover {
  color: pink;
}



</style>
