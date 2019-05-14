<template>
  <div class="kv-date-calendar">
    <kv-date-day v-if="view==='day'"
                 v-model="dateValue"
                 :select-value="value"
                 @year-click="view='year'"
                 @month-click="view='month'"></kv-date-day>
    <kv-date-month v-if="view==='month'"
                   v-model="dateValue"
                   :select-value="value"
                   @year-click="view='year'"></kv-date-month>
    <kv-date-year v-if="view==='year'"
                  v-model="dateValue"
                  :select-value="value"></kv-date-year>
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
      view: "day",
      dateValue: this.date,
      prevView: null
    };
  },
  props: {
    date: {
      type: Date,
      required: true
    },
    value: [Date, Array]
  },
  watch: {
    view(view, prevView) {
      this.prevView = prevView;
    },
    date(value) {
      this.dateValue = value;
    }
  }
};
</script>
