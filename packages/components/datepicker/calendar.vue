<template>
  <div class="kv-date-calendar">
    <kv-date-day :date.sync="date"></kv-date-day>
    <br>
    <kv-date-year :date.sync="date"></kv-date-year>
    <br>
    <kv-date-month :date.sync="date"></kv-date-month>
  </div>
</template>
<script>
import KvDateYear from "./year";
import KvDateMonth from "./month";
import KvDateDay from "./day";

export default {
  name: "KvDateCalendar",
  componentName: "KvDateCalendar",
  components: { KvDateYear, KvDateMonth, KvDateDay },
  data() {
    return {
      date: new Date()
    };
  }
};
</script>
