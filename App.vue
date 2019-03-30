<template>
 <div id="app">  
     <h2> {{name}} </h2>
     <p id="message" v-if="showInfoFromCalc2Component"> Communication from child component Calc2 by $emit to parent component App </p>
     <div>
        <h1>Calc1 Component</h1>
        <calc1-component :name="name" :newDate="newDateCurrent" />
        <h1>Calc2 Component</h1>
        <calc2-component :name="name" @methodCalc2="communicationToCalc2ByEmitFromApp"  />
    </div>
 </div>    
</template>

<script lang="ts">
import Vue from "vue";
import Calc1Component from "./src/components/Calc1.vue";
import Calc2Component from "./src/components/Calc2.vue";

let type1: String;
let showInfoFromCalc2Component: Boolean;

export default {
  name: "app",
  data() {
    return {
      name: "App Main component - Exercises TypeScript ",
      newDateCurrent: new Date(), // communication from parent component App by props to children component
      showInfoFromCalc2Component: false
    };
  },
  methods: {
    communicationToCalc2ByEmitFromApp: function() {
      //communication from child component Calc2 by $emit to parent component App
      if (type1 === "login") {
        alert(
          "communication from child component Calc2 by $emit to parent component App"
        );
        showInfoFromCalc2Component = true;
      }
    }
  },

  components: {
    Calc1Component,
    Calc2Component
  },
  // lifecycle hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    type1 = "login";
    showInfoFromCalc2Component = false;
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style scoped>
#app {
  background-color: lightblue;
}
#message {
  color: red;
}
</style>


