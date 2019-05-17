<template>
  <kv-date-calendar v-if="dateView==='date'"
                    :type="dateType"
                    :date="date"
                    :select-value="selectValue"
                    :max="max"
                    :min="min"
                    @date-click="handleDateClick"
                    @date-change="handleDateChange"></kv-date-calendar>
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
      type: [Date, Array],
      required: true
    },
    selectValue: [Date, Array],
    type: {
      type: String,
      default: "date"
    },
    max: Date,
    min: Date
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
    },
    handleDateChange(date) {
      this.$emit('date-change', date)
    }
  },
}
</script>

