<!-- src/components/Calc2.vue -->
<template>
    <div>
        <div class="greeting">{{name}}</div>
        <button @click="calculateTableColors">Calculate table with colors</button>
         <button @click="handleClick">handleClick</button>
  <table>
    <thead>
      <tr>
        <th class="cell-width"></th>
        <th class="cell-width" v-for="(row, idx1) in contentData">{{ idx1+1 }}</th>
      </tr>
    </thead>
    <tbody>
      <tr  v-for="(row, idx1) in contentData">
       <td >{{ idx1+1 }}</td>  
        <td 
        :style="contentData[idx2][idx1] !== '' ? {'background-color': contentData[idx2][idx1] }:{'background-color': '#FFF'}" 
        class="cell-width" 
        v-for="(col, idx2) in row" >
        {{ contentData[idx2][idx1]}}
        </td>  
      </tr>
    </tbody>
  </table>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { calc2Methods } from "../Calc/calc2";

export default Vue.extend({
  props: {},
  data() {
    return {
      arrayColorsWithCells: [{ hex: "", cell: [0, 0] }],
      contentData: [...Array(0)].map(e => Array(0)),
      name: "Exercises typescript - calc2"
    };
  },
  methods: {
    async calculateTableColors() {
      let quantityColumnsRows = await calc2Methods.getquantityColumnsRows();
      this.contentData = await calc2Methods.calculateTableColors(
        quantityColumnsRows
      );
    },
    handleClick: function() {
      //Using an Event Bus to communicate between any component
      this.$root.$emit("clickedSomething");
    }
  },
  computed: {},
  // lifecycle hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
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
td {
  text-align: center;
  vertical-align: middle;
}
.cell-width {
  width: 20px;
}
</style>
