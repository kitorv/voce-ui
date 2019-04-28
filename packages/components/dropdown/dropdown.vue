<template>
  <div class="kv-dropdown"
       v-clickoutside="handleClickOutSide">
    <div class="kv-dropdown--selection">
      <slot name="selection"></slot>
    </div>
    <!-- <div class="kv-dropdown--panel">
      <slot name="panel"></slot>
    </div> -->
  </div>
</template>
<script>
import clickoutside from '../../directives/clickoutside.js'

export default {
  name: 'KvDropdown',
  componentName: 'KvDropdown',
  directives: { clickoutside },
  props: {
    visable: Boolean
  },
  methods: {
    handleClickOutSide() {
      //   this.$emit('input', false);
    }
  }
  //     handleSelectionClick() {
  //       if (this.disabled) {
  //         return;
  //       }
  //       this.$emit('input', !this.value);
  //     }
  //   }
}    
</script>