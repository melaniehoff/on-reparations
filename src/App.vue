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

body {
  color: white;
  background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: black;
  margin-top: 60px;
  padding: .5em;
}
</style>
