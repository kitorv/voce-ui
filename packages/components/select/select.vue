<template>
  <div v-clickoutside="handleClickOutside">
    #select
  </div>
</template>

<script>
import clickoutside from "../../directives/clickoutside.js"

export default {
  name: 'KvSelect',
  componentName: 'KvSelect',
  directives: { clickoutside },
  methods: {
    handleClickOutside() {
      console.log(1);
    }
  },
}
</script>

