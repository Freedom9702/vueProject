<template>
  <div id="app">
      <loading v-show='this.$root.$data.bloading'></loading>
     <app-header v-show="this.$root.$data.headerdisplay"></app-header>
     <router-view></router-view>
     <app-footer v-show="this.$root.$data.footerdisplay"></app-footer>
  </div>
</template>
<script>
import AppHeader from "./common/AppHeader";
import AppFooter from "./common/AppFooter";
export default {
  components: { AppHeader, AppFooter}
};
</script>

