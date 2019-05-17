<template>
  <div class="kv-date-range">
    <kv-date-panel class="kv-date-range--left"
                   :date-view="dateView"
                   :type="dataType"
                   :date="startDateValue"
                   :select-value="selectValue"
                   :max="maxStartSelectDate"
                   @date-click="handleStartDateClick"
                   @time-click="handleTimeClick"
                   @date-change="handleStartDateChange"></kv-date-panel>
    <kv-date-panel class="kv-date-range--right"
                   :date-view="dateView"
                   :type="dataType"
                   :date="endDateValue"
                   :select-value="selectValue"
                   :min="minEndSelectDate"
                   @date-click="handleEndDateClick"
                   @time-click="handleTimeClick"
                   @date-change="handleEndDateChange"></kv-date-panel>
  </div>
</template>
<script>
import KvDatePanel from "./panel";
import dateFns from "date-fns";

export default {
  components: { KvDatePanel },
  data() {
    return {
      maxStartSelectDate: null,
      minEndSelectDate: null
    };
  },
  props: {
    dateView: {
      validator: function(value) {
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
        return endYear - startYear < 11
          ? dateFns.setYear(new Date(), startYear + 11)
          : end;
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
      let [start, end] = this.selectValue;
      if (start && !end) {
        this.$emit("date-click", [start, date].sort(dateFns.compareAsc));
        return;
      }
      if (!start && end) {
        this.$emit("date-click", [end, date].sort(dateFns.compareAsc));
        return;
      }
      this.$emit("date-click", [date]);
    },
    handleEndDateClick(date) {
      let [start, end] = this.selectValue;
      if (start && !end) {
        this.$emit("date-click", [start, date].sort(dateFns.compareAsc));
        return;
      }
      if (!start && end) {
        this.$emit("date-click", [end, date].sort(dateFns.compareAsc));
        return;
      }
      this.$emit("date-click", [undefined, date]);
    },
    handleTimeClick() {},
    handleStartDateChange(date) {
      this.minEndSelectDate = date;
    },
    handleEndDateChange(date) {
      this.maxStartSelectDate = date;
    }
  },
  created() {
    this.maxStartSelectDate = this.endDateValue;
    this.minEndSelectDate = this.startDateValue;
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


