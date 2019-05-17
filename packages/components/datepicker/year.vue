<template>
  <div class="kv-date-year">
    <div class="kv-date-year--header">
      <i v-if="showPrevYears"
         class="kv-date-year--button kv-icon-doubleleft"
         @click="handlePrevYearsClick"></i>
      <span class="kv-date-year--range">{{firstYear}}年-{{lastYear}}年</span>
      <i v-if="showNextYears"
         class="kv-date-year--button kv-icon-doubleright"
         @click="handleNextYearsClick"></i>
    </div>
    <div class="kv-date-year--content">
      <table class="kv-date-year--table">
        <tr v-for="(row,index) in yearRowList"
            :key="index">
          <td v-for="{text,date,selected,isRange} in row"
              :key="text"
              :class="['kv-date-year--cell',
              {'kv-date-year--selected':selected},
              {'kv-date-year--range-select':isRange},
              {'kv-date-year--first':text===firstYear},
              {'kv-date-year--last':text===lastYear},
              ]"
              @click="handleYearClick({date,text})">
            <div class="kv-date-year--text"> {{text}} </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import dateFns from "date-fns";

export default {
  name: "KvDateYear",
  componentName: "KvDateYear",
  data() {
    return {
      yearRowList: [],
      firstYear: null,
      lastYear: null
    };
  },
  props: {
    date: {
      type: Date,
      required: true
    },
    selectValue: [Date, Array],
    max: Date,
    min: Date
  },
  computed: {
    showPrevYears() {
      if (!this.min) return true;
      return dateFns.differenceInCalendarYears(this.date, this.min) > 12;
    },
    showNextYears() {
      if (!this.max) return true;
      return dateFns.differenceInCalendarYears(this.max, this.date) > 12;
    }
  },
  model: {
    prop: "date",
    event: "input"
  },
  methods: {
    handlePrevYearsClick() {
      if (!this.showPrevYears) return;
      this.$emit("input", dateFns.subYears(this.date, 12));
    },
    handleNextYearsClick() {
      if (!this.showNextYears) return;
      this.$emit("input", dateFns.addYears(this.date, 12));
    },
    handleYearClick({ date, text }) {
      if (text === this.firstYear) {
        this.handlePrevYearsClick();
        return;
      }
      if (text === this.lastYear) {
        this.handleNextYearsClick();
        return;
      }
      this.$emit("year-click", date);
    },
    isSelected(year) {
      if (!Array.isArray(this.selectValue)) {
        return dateFns.getYear(this.selectValue) === year;
      }
      let [startValue, endValue] = this.selectValue;
      return (
        dateFns.getYear(startValue) === year ||
        dateFns.getYear(endValue) === year
      );
    },
    isRange(year) {
      if (!Array.isArray(this.selectValue)) return false;
      let [startValue, endValue] = this.selectValue;
      if (!startValue || !endValue) return false;
      return (
        dateFns.getYear(startValue) < year && dateFns.getYear(endValue) > year
      );
    }
  },
  watch: {
    date: {
      immediate: true,
      handler() {
        const rowList = [[], [], [], []];
        let year = dateFns.getYear(this.date);
        let currentYear = year - (year % 10) - 1;
        for (let i = 0; i < 12; i++) {
          let index = Number.parseInt(i / 3);
          rowList[index].push({
            text: currentYear,
            date: dateFns.setYear(this.date, currentYear),
            selected: this.isSelected(currentYear),
            isRange: this.isRange(currentYear)
          });
          currentYear++;
        }
        this.firstYear = rowList[0][0].text;
        this.lastYear = rowList[3][2].text;
        this.yearRowList = rowList;
      }
    }
  }
};
</script>
<style lang="scss">
@import "../../style/variable.scss";

.kv-date-year {
  display: inline-block;
  font-size: 14px;
}

.kv-date-year--header {
  height: 40px;
  line-height: 40px;
  text-align: center;
  user-select: none;
  position: relative;
  border-bottom: 1px solid #b4b4b4;
}

.kv-date-year--range {
  display: inline-block;
  padding: 0 4px;
  font-weight: 500;
  line-height: 40px;
  font-size: 16px;
}

.kv-date-year--button {
  position: absolute;
  top: 0;
  display: inline-block;
  padding: 0 5px;
  font-size: 16px;
  line-height: 40px !important;
  cursor: pointer;

  &.kv-icon-doubleleft {
    left: 7px;
    font-size: 18px;
  }

  &.kv-icon-doubleright {
    right: 7px;
    font-size: 18px;
  }
}

.kv-date-year--content {
  padding: 7px 12px;
}

.kv-date-year--table {
  width: 100%;
  max-width: 100%;
  background-color: transparent;
  border-collapse: collapse;
}

.kv-date-year--cell {
  box-sizing: border-box;
  text-align: center;
  border: 0;
  height: 56px;
  padding: 3px 0;
  width: 84px;
  cursor: pointer;
}

.kv-date-year--cell:hover {
  .kv-date-year--text {
    background-color: mix($--color--white, $--color--primary, 90%);
  }
}

.kv-date-year--selected,
.kv-date-year--selected:hover {
  .kv-date-year--text {
    border-color: $--color--primary;
    color: $--color--white;
    background-color: $--color--primary;
  }
}

.kv-date-year--range-select {
  .kv-date-year--text {
    transition: none;
    width: 100%;
    background-color: mix($--color--white, $--color--primary, 90%);
  }

  &.kv-date-year--first,
  &.kv-date-year--last {
    .kv-date-year--text {
      background-color: $--datepicker-background-color;
      cursor: default;
    }
  }
}

.kv-date-year--first,
.kv-date-year--last {
  color: $--datepicker-border-color;
}

.kv-date-year--text {
  height: 24px;
  width: 60px;
  margin: 0 auto;
  padding: 0;
  line-height: 24px;
  text-align: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 2px;
  transition: background-color 0.3s ease;
}
</style>
