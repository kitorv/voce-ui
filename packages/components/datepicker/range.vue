<template>
  <div>12346</div>
</template>
<script>
import KvDatePanel from "./panel"

export default {
  components: { KvDatePanel },
  props: {
    dateView: {
      validator: function (value) {
        return ["date", "time"].includes(value);
      },
      default: "date"
    },
    date: {
      type: [Date, Array],
      required: true
    },
    selectValue: Date,
    type: {
      type: String,
      default: "date"
    }
  }
}
</script>

