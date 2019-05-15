<template>
  <div>
    {{dateText}}
    <kv-date-calendar :date="date"
                      v-model="date"></kv-date-calendar>
    <br>
    <kv-date-calendar :date="date"
                      type="month"
                      v-model="date"></kv-date-calendar>
    <br>
    <kv-date-calendar :date="date"
                      type="year"
                      v-model="date"></kv-date-calendar>
  </div>
</template>

<script>
import KvDateCalendar from "./calendar";
import dateFns from "date-fns"

export default {
  name: "KvDatePicker",
  componentName: "KvDatePicker",
  components: { KvDateCalendar },
  data() {
    return {
      date: new Date()
    };
  },
  computed: {
    dateText() {
      return dateFns.format(this.date, "YYYY-MM-DD HH:mm:ss")
    }
  }
};
</script>

