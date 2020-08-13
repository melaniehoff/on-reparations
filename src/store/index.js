/* eslint-disable */

const process_api_key = process.env.VUE_APP_AIRTABLE_API_KEY;
const airtable_table = process.env.VUE_APP_AIRTABLE_TABLE;
const airtable_base = process.env.VUE_APP_AIRTABLE_BASE;
const airtable_view = process.env.VUE_APP_AIRTABLE_VIEW;

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function loadAirtableData(callback) {
  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: process_api_key }).base(airtable_base);
  let records = [];

  base(airtable_table)
    .select({
      view: airtable_view
    })
    .eachPage(
      function page(partialRecords, fetchNextPage) {
        records = [...records, ...partialRecords];
        fetchNextPage();
      },
      function done(err) {
//        console.log("Fetched Records", records);
        if (err) {
          console.error(err);
          return;
        }
        callback(records);
      }
    );
}


export default new Vuex.Store({
  state: {
    reparations: [],
    hasLoaded: false,
  },
  getters: {
    records(state) {
      return state.records;
    },
  },
  mutations: {
		setReparations(state, r) {
			state.reparations = r;
		},
  },
  actions: {
    fetchData(context) {
      if (!context.state.hasLoaded) {
        context.dispatch("fetchReparations");
      }
    },
    fetchReparations(context) {
      loadAirtableData(function(records) {
        var reparations = records.filter(w => w.fields["Name"]);
        context.commit("setReparations", reparations);
      });
    },
  }
});
