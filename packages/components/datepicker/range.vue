<template>
  <div class="kv-date-range">
    {{endDateValue}}
    <kv-date-panel class="kv-date-range--left"
                   :date-view="dateView"
                   :type="dataType"
                   :date="startDateValue"
                   :select-value="selectValue"
                   @date-click="handleStartDateClick"
                   @time-click="handleTimeClick"></kv-date-panel>
    <kv-date-panel class="kv-date-range--right"
                   :date-view="dateView"
                   :type="dataType"
                   :date="endDateValue"
                   :select-value="selectValue"
                   @date-click="handleEndDateClick"
                   @time-click="handleTimeClick"></kv-date-panel>
  </div>
</template>
<script>
import KvDatePanel from "./panel";
import dateFns from "date-fns";

export default {
  components: { KvDatePanel },
  props: {
    dateView: {
      validator: function (value) {
        return ["date", "time"].includes(value);
      },
      default: "date"
    },
    date: {
      type: [Date, Array],
      required: true
    },
    selectValue: Array,
    type: {
      type: String,
      default: "date"
    }
  },
  computed: {
    startDateValue() {
      return this.date[0];
    },
    endDateValue() {
      let [start, end] = this.date;
      if (this.type === "yearrange") {
        let startYear = dateFns.getYear(start);
        let endYear = dateFns.getYear(end);
        startYear = startYear - (startYear % 10) - 1;
        endYear = endYear - (endYear % 10) - 1;
        return endYear - startYear < 11 ? dateFns.setYear(new Date(), startYear + 11) : end
      }
    },
    dataType() {
      switch (this.type) {
        case "yearrange":
          return "year";
        default:
          break;
      }
    }
  },
  methods: {
    handleStartDateClick(date) {
      let dateValue = this.selectValue
      let [start, end] = dateValue
      if (start && !end) {
        dateValue = dateFns.isBefore(start, date) ? [start, date] : [date, start]
        this.$emit("date-click", dateValue);
        return
      }
      if (!start && end) {
        dateValue = dateFns.isBefore(end, date) ? [end, date] : [date, end]
        this.$emit("date-click", dateValue);
        return
      }
      this.$emit("date-click", [date]);
    },
    handleEndDateClick(date) {
      let dateValue = this.selectValue
      let [start, end] = dateValue
      if (start && !end) {
        dateValue = dateFns.isBefore(start, date) ? [start, date] : [date, start]
        this.$emit("date-click", dateValue);
        return
      }
      if (!start && end) {
        dateValue = dateFns.isBefore(end, date) ? [end, date] : [date, end]
        this.$emit("date-click", dateValue);
        return
      }
      this.$emit("date-click", [undefined, date]);
    },
    handleTimeClick() { }
  }
};
</script>
<style lang="scss">
.kv-date-range {
  width: 552px;

  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

.kv-date-range--left {
  float: left;
  box-sizing: border-box;
  margin: 0;
}

.kv-date-range--right {
  float: right;
  box-sizing: border-box;
  margin: 0;
}
</style>


