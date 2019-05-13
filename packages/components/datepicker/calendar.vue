<template>
  <div class="kv-date-calendar">
    <kv-date-day v-if="view==='day'"
                 v-model="dateValue"
                 @year-click="view==='year'"
                 @month-click="view==='month'"></kv-date-day>
    <!-- <kv-date-year :date.sync="dateValue"></kv-date-year> -->
    <!--  <kv-date-month :date.sync="dateValue"></kv-date-month> -->
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
      view: "day"
    };
  },
  props: {
    date: {
      type: Date,
      default: () => new Date()
    }
  },
  computed: {
    dateValue: {
      get() {
        return this.date;
      },
      set(value) {
        this.$emit("update:date", value);
      }
    }
  }
};
</script>
