<!-- src/components/Calc1.vue -->
<template>
    <div>
        <div class="greeting">Exercises typescript - calc1</div>
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
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { calc1Methods } from "../Calc/calc1";

export default Vue.extend({
  props: {
    name: String
  },
  data() {
    return {
      sumAmountTotal: 0,
      sumAmountGroupByCountryTotal: new Map(),
      arrayCountryAmount: [{}]
    };
  },
  methods: {
    sumAmount() {
      this.sumAmountTotal = calc1Methods.sumAmount();
    },
    sumAmountGroupByCountry() {
      this.sumAmountGroupByCountryTotal = calc1Methods.sumAmountGroupByCountry();
      let arr2 = [{}];
      this.sumAmountGroupByCountryTotal.forEach(function(key, value) {
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
    //console.log(this.arrayCountryAmount.length);
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
</style>
