<template>
  <div id="app">
    <!--<TitleHeader  />
    <ReparationsDisplay  />-->

      <router-view name="header" />
      <router-view name="view" />
    
  </div>
</template>

<script>

/* eslint-disable */


import ReparationsDisplay from "@/components/ReparationsDisplay.vue";
import TitleHeader from "@/components/TitleHeader.vue";

const process_api_key = process.env.VUE_APP_AIRTABLE_API_KEY;
const airtable_table = process.env.VUE_APP_AIRTABLE_TABLE;
const airtable_base = process.env.VUE_APP_AIRTABLE_BASE;
const airtable_view = process.env.VUE_APP_AIRTABLE_VIEW ;

export default {
  name: "App",
  components: {
    ReparationsDisplay,
    TitleHeader,
  },
  data() {
    return {
    };
  },
  created() {
    this.$store.dispatch("fetchData");
  },
  methods: {
  }
};
</script>

<style>


/* font-family: 'Kelly Slab', cursive;
font-family: 'Cinzel Decorative', cursive;
font-family: 'DM Serif Display', serif;
font-family: 'MuseoModerno', cursive;
font-family: 'Red Rose', cursive; */

body {
  background: no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
background-image: linear-gradient(to right top, #e1e992, #c8e18a, #add985, #92d082, #75c780, #74c77b, #73c775, #73c76f, #94ce62, #b7d456, #dad84e, #ffda4c);
}

#app {
  font-family: 'Red Rose', cursive;
  color: black;
  margin-top: 60px;
  padding: 1em;
}

@media only screen and (max-width: 1020px) {
  #app {
    display: none;
  }

  #mobile {
    color: green;
    display: block !important;
    font-size: 3em;
  }
}


</style>
