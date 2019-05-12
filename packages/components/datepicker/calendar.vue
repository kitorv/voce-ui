<template>
  <div class="kv-date-calendar">
    <kv-date-day :date="date"></kv-date-day>
  </div>
</template>
<script>
import KvDateDay from "./day";

export default {
  name: "KvDateCalendar",
  componentName: "KvDateCalendar",
  components: { KvDateDay },
  data() {
    return {
      date: new Date()
    };
  }
};
</script>
