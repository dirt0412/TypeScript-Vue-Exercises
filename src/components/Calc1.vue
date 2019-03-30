<!-- src/components/Calc1.vue -->
<template>
    <div id="calc1">
        <div class="greeting">{{name}}</div>
    <p> 
      <button @click="sumAmount">Sum Amount</button>
      <input placeholder="result" type="text" v-model="sumAmountTotal">
    </p>
    <p> 
      <button @click="sumAmountGroupByCountry">Sum Amount Group By Country</button>
    </p>
    <p> 
  <table v-if="arrayCountryAmount.length > 1">
    <thead>
      <tr >
        <th>Country</th>
        <th>Amount</th>     
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,i) in arrayCountryAmount" :key="i">
       <td >{{ item.Title }}</th>  
       <td>{{ item.amount }}</td> 
      </tr>
    </tbody>
  </table>
    </p>
    <h2 id="showAny" v-if="showAny">Event Bus to communicate between Calc1 component: {{showAnyCount}} </h2>
    <p> Communication from parent component App by props: {{ newDate }} </p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { calc1Methods } from "../Calc/calc1";

export default Vue.extend({
  props: ["newDate"], // communication from parent component App by props to children component
  data() {
    return {
      sumAmountTotal: 0,
      mapAmountGroupByCountryTotal: new Map(),
      arrayCountryAmount: [{}],
      name: "Calc1 component",
      showAny: false,
      showAnyCount: 0
    };
  },
  methods: {
    sumAmount() {
      this.sumAmountTotal = calc1Methods.sumAmount();
    },
    sumAmountGroupByCountry() {
      this.mapAmountGroupByCountryTotal = calc1Methods.sumAmountGroupByCountry();
      let arr2 = [{}];
      this.mapAmountGroupByCountryTotal.forEach(function(key, value) {
        arr2.push({ Title: value, amount: Number(key.toFixed(4)) });
      });
      this.arrayCountryAmount = arr2;
    }
  },
  computed: {},

  // lifecycle hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.$root.$on("clickedSomething", () => {
      //Using an Event Bus to communicate between any component
      alert(
        "hello from component Calc1 - Using an Event Bus to communicate between any component!"
      );
      this.showAny = true;
      this.showAnyCount++;
    });
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
});
</script>

<style>
.greeting {
  font-size: 20px;
}
#calc1 {
  background-color: grey;
}
#showAny {
  color: red;
}
</style>
