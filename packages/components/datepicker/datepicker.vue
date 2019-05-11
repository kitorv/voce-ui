<template>
  <div>
    DatePicker
    <kv-date-day :date="date"></kv-date-day>
    Month
    <kv-date-month></kv-date-month>
  </div>
</template>

<script>
import KvDateDay from "./day";
import KvDateMonth from "./month"

export default {
  name: "KvDatePicker",
  componentName: "KvDatePicker",
  components: { KvDateMonth,KvDateDay },
  data() {
    return {
      date: new Date()
    };
  }
};
</script>

