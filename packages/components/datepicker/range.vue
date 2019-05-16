<template>
  <div>
    <kv-date-panel :date-view="dateView"
                   :type="dataType"
                   :date="startDateValue"
                   :select-value="selectValue"></kv-date-panel>
  </div>
</template>
<script>
import KvDatePanel from "./panel"
import dateFns from "date-fns"

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
  },
  computed: {
    startDateValue() {
      return this.date[0]
    },
    endDateValue() {

    },
    dataType() {
      switch (this.type) {
        case "yearrange":
          return "year"
        default:
          break;
      }
    }
  },
  mounted() {
    console.log(this.type);
    console.log(this.date);
  }
}
</script>

