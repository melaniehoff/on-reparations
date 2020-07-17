<template>
  <div id="app">
    <HelloWorld :records="records" />
    <AirtableDisplayExample :records="records" />
    <!-- <HelloWorld /> -->
  </div>
</template>

<script>

/* eslint-disable */


import AirtableDisplayExample from "@/components/AirtableDisplayExample.vue";
import HelloWorld from "@/components/HelloWorld.vue";

const process_api_key = process.env.VUE_APP_AIRTABLE_API_KEY;
const airtable_table = process.env.VUE_APP_AIRTABLE_TABLE;
const airtable_base = process.env.VUE_APP_AIRTABLE_BASE;
const airtable_view = process.env.VUE_APP_AIRTABLE_VIEW ;

export default {
  name: "App",
  components: {
    AirtableDisplayExample,
    HelloWorld,
  },
  data: function() {
    return {
      records: []
    };
  },
  created() {
    this.loadAirtableData();
  },
  methods: {
    loadAirtableData() {
      var Airtable = require("airtable");
      var base = new Airtable({ apiKey: process_api_key }).base(airtable_base);
      let records = [];
      var self = this;

      base(airtable_table)
        .select({
          view: airtable_view,
        })
        .eachPage(
          function page(partialRecords, fetchNextPage) {
            records = [...records, ...partialRecords]
            fetchNextPage();
          },
          function done(err) {
            console.log("done", records);
            self.records = records;
            if (err) {
              console.error(err);
              return;
            }
          }
        );
    }
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
}

#app {
  font-family: 'Red Rose', cursive;
  color: black;
  margin-top: 60px;
  padding: 1em;
}
</style>
