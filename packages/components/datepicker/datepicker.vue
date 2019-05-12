<template>
  <div>
    <kv-date-calendar></kv-date-calendar>
  </div>
</template>

<script>
import KvDateCalendar from "./calendar";

export default {
  name: "KvDatePicker",
  componentName: "KvDatePicker",
  components: { KvDateCalendar },
  data() {
    return {
      date: new Date()
    };
  }
};
</script>

