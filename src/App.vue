<template>
  <div id="app" class="box-border">
    <Header />
    <router-view></router-view>

  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    Header: Header,
  },
};
</script>

<style></style>
