<template>
  <div id="nav">
    <h2>NavHeader</h2>

        <router-link class="link" :to="{ name: 'Home' }">Home</router-link> 


  </div>
</template>

<script>

export default {
  name: "NavHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#nav {
  background-color: pink;
}

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
</style>
