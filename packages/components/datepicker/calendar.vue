<template>
  <div class="kv-date-calendar">
    {{view}}
    <br />
    <kv-date-day v-if="view==='day'"
                 v-model="dateValue"
                 @year-click="view='year'"
                 @month-click="view='month'"></kv-date-day>
    <kv-date-month v-if="view==='month'"
                   v-model="dateValue"
                   @year-click="view='year'"></kv-date-month>
    <kv-date-year v-if="view==='year'"
                  v-model="dateValue"></kv-date-year>
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
      prevView: null
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
  },
  watch: {
    view(view, prevView) {
      this.prevView = prevView;
    }
  }
};
</script>
