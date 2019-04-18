<template>
  <div id="app">
    <img alt="Vue logo"
         src="./assets/logo.png">
    <kv-hello-world-doc></kv-hello-world-doc>
  </div>
</template>

<script>
import KvHelloWorld from "./components/HelloWorld";
import KvHelloWorldDoc from "./components/HelloWorldDoc.md";

export default {
  name: "app",
  components: {
    KvHelloWorld,
    KvHelloWorldDoc
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0 150px;
}
</style>
