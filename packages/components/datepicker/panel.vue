<template>
  <kv-date-calendar v-if="dateView==='date'"
                    :type="dateType"
                    :date="date"
                    :select-value="selectValue"
                    @date-click="handleDateClick"></kv-date-calendar>
  <kv-date-time v-else
                :date="date"
                :select-value="selectValue"
                @time-click="handleTimeClick"></kv-date-time>
</template>
<script>
import KvDateCalendar from "./calendar";
import KvDateTime from "./time";

export default {
  components: {
    KvDateCalendar, KvDateTime
  },
  props: {
    dateView: {
      validator: function (value) {
        return ["date", "time"].includes(value);
      },
      default: "date"
    },
    date: {
      type: Date,
      required: true
    },
    selectValue: Date,
    type: {
      type: String,
      default: "date"
    }
  },
  computed: {
    dateType() {
      return ["year", "month", "date"].includes(this.type) ? this.type : "date";
    },
  },
  methods: {
    handleDateClick(value) {
      this.$emit("date-click", value);
    },
    handleTimeClick(hour, monute, second) {
      this.$emit("time-click", hour, monute, second);
    }
  },
}
</script>

