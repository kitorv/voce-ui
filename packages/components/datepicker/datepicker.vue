<template>
  <div>
    DatePicker
    <kv-date-day :date="date"></kv-date-day>
  </div>
</template>

<script>
import KvDateDay from "./day";

export default {
  name: "KvDatePicker",
  componentName: "KvDatePicker",
  components: { KvDateDay },
  data() {
    return {
      date: new Date()
    };
  }
};
</script>

