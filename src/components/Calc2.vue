<!-- src/components/Calc1.vue -->
<template>
    <div>
        <div class="greeting">Exercises typescript - calc2</div>

        <button @click="calculateTableColors">Calculate table with colors</button>

  <table>
    <thead>
      <tr>
        <th style="width:20px;"></th>
        <th style="width:20px;" v-for="(item) in quantitySizeTableArr">{{item}}</th>
      </tr>
    </thead>
    <tbody>
      <tr  v-for="(item) in quantitySizeTableArr" :key="i">
       <td >{{ item }}</td>  
        <td style="width:20px;" v-for="(item) in quantitySizeTableArr" :key="j">{{ 'x'}}</td>  
      
       <!-- <td>{{ item.amount }}</td>  -->
      </tr>
    </tbody>
  </table>

    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { calc2Methods } from "../Calc/calc2";

export default Vue.extend({
  props: {
    name: String
  },
  data() {
    return {
      quantitySizeTableArr: new Array(),
      quantitySizeTable: new Number(),
      arrayColorsWithCells: [{ hex: "", cell: [0, 0] }]
    };
  },
  methods: {
    async calculateTableColors() {
      //let colors = await calc2Methods.getDataJSON();
      let quantitySizeTable = 0;
      this.quantitySizeTableArr = [];

      quantitySizeTable = await calc2Methods.getquantityColumnsRows();
      for (let i = 1; i <= quantitySizeTable; i++) {
        this.quantitySizeTableArr.push(i);
      }

      this.arrayColorsWithCells = await calc2Methods.getHexCells();
      console.log(this.arrayColorsWithCells);
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
</style>
