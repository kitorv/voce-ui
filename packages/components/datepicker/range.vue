<template>
  <div class="kv-date-range">
    {{endDateValue}}
    <kv-date-panel class="kv-date-range--left"
                   :date-view="dateView"
                   :type="dataType"
                   :date="startDateValue"
                   :select-value="selectValue"
                   @date-click="handleDateClick"
                   @time-click="handleTimeClick"></kv-date-panel>
    <kv-date-panel class="kv-date-range--right"
                   :date-view="dateView"
                   :type="dataType"
                   :date="endDateValue"
                   :select-value="selectValue"
                   @date-click="handleDateClick"
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
    // handleStartDateClick(date) {
    //   this.selectValue[0] = date;
    //   this.$emit("date-click", this.selectValue);
    // },
    // handleEndDateClick(date) {
    //   this.selectValue[1] = date;
    //   this.$emit("date-click", this.selectValue);
    // },
    handleDateClick(value) {
      let [start, end] = this.selectValue
      let dateValue = []
      if ((start && end) || (!start && !end)) {
        dateValue = [value]
      } else {
        dateValue = [start, value]
      }
      this.$emit("date-click", dateValue);
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


