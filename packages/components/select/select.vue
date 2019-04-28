<template>
  <kv-dropdown class="kv-select"
               :visable.sync="visable">
    <div slot="selection">
      <input class="kv-select--input" />
    </div>
  </kv-dropdown>
</template>

<script>
import KvDropdown from "../dropdown/dropdown"

export default {
  name: 'KvSelect',
  componentName: 'KvSelect',
  data() {
    return {
      visable: false
    }
  },
  methods: {}
}
</script>

