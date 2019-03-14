<!-- src/components/Calc1.vue -->
<template>
    <div>
        <div class="greeting">Exercises typescript - calc2</div>

        <button @click="sumAmount">Sum Amount</button>

        <input placeholder="result" type="text" v-model="sumAmountTotal">
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
      sumAmountTotal: 0
    };
  },
  methods: {
    sumAmount() {
      this.sumAmountTotal = calc2Methods.sumAmount();
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
</style>
