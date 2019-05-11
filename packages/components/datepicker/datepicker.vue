<template>
  <div>
    Date
    <kv-date-day :date="date"></kv-date-day>
    Month
    <kv-date-month></kv-date-month>
    Year
    <kv-date-year :date="date"></kv-date-year>
  </div>
</template>

<script>
import KvDateDay from "./day";
import KvDateMonth from "./month";
import KvDateYear from "./year";

export default {
  name: "KvDatePicker",
  componentName: "KvDatePicker",
  components: { KvDateYear, KvDateMonth, KvDateDay },
  data() {
    return {
      date: new Date()
    };
  }
};
</script>

