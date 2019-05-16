<template>
  <div class="kv-date-range">
    <kv-date-panel class="kv-date-range--left"
                   :date-view="dateView"
                   :type="dataType"
                   :date="startDateValue"
                   :select-value="selectValue"></kv-date-panel>
    <kv-date-panel class="kv-date-range--right"
                   :date-view="dateView"
                   :type="dataType"
                   :date="endDateValue"
                   :select-value="selectValue"></kv-date-panel>
  </div>
</template>
<script>
import KvDatePanel from "./panel";
import dateFns from "date-fns";

export default {
  components: { KvDatePanel },
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
    selectValue: Date,
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
        startYear = startYear - (startYear % 10) - 1;
        return dateFns.getYear(end) - startYear < 12
          ? dateFns.addYears(start, 1)
          : end;
      }

      // const deffYears = dateFns.differenceInCalendarYears(end, start);
      // let currentYear = year - (year % 10) - 1;
      // if (this.type === "yearrange" && deffYears < 12) {
      //   end = dateFns.addYears(start, 11);
      // }
      // return end;
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
  mounted() {
    console.log(this.type);
    console.log(this.date);
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


