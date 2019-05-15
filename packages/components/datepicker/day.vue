<template>
  <div class="kv-date-day">
    <div class="kv-date-day--header">
      <i class="kv-date-day--button kv-icon-doubleleft"
         @click="handlePrevYearClick"></i>
      <i class="kv-date-day--button kv-icon-left"
         @click="handlePrevMonthClick"></i>
      <span class="kv-date-day--year"
            @click="handleYearClick">{{year}}年</span>
      <span class="kv-date-day--month"
            @click="handleMonthClick">{{month}}月</span>
      <i class="kv-date-day--button kv-icon-right"
         @click="handleNextMonthClick"></i>
      <i class="kv-date-day--button kv-icon-doubleright"
         @click="handleNextYearClick"></i>
    </div>
    <div class="kv-date-day--content">
      <table class="kv-date-day--table">
        <tr>
          <th class="kv-date-day--week"
              v-for="week in weeks"
              :key="week">{{week}}</th>
        </tr>

        <tr v-for="(row,index) in dateRowList"
            :key="index">
          <td v-for="{text,date,type,disabled,selected,isPrevMonth,isNextMonth,isToday} in row"
              :key="text"
              :class="['kv-date-day--cell',
              {'kv-date-day--prev-month':isPrevMonth},
              {'kv-date-day--next-month':isNextMonth},
              {'kv-date-day--today':isToday},
              {'kv-date-day--selected':selected},
              {'kv-date-day--disabled':disabled}
              ]"
              @click="handleDateClick(date)">
            <div class="kv-date-day--text">{{text}}</div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import dateFns from "date-fns";

export default {
  name: "KvDateDay",
  componentName: "KvDateDay",
  data() {
    return {
      dateRowList: []
    };
  },
  props: {
    weeks: {
      type: Array,
      default: () => ["日", "一", "二", "三", "四", "五", "六"]
    },
    date: {
      type: Date,
      required: true
    },
    selectValue: [Date, Array],
    disabled: Function
  },
  computed: {
    year() {
      return dateFns.getYear(this.date);
    },
    month() {
      return dateFns.getMonth(this.date) + 1;
    }
  },
  model: {
    prop: "date",
    event: "input"
  },
  methods: {
    handlePrevYearClick() {
      this.$emit("input", dateFns.subYears(this.date, 1));
    },
    handleNextYearClick() {
      this.$emit("input", dateFns.addYears(this.date, 1));
    },
    handlePrevMonthClick() {
      this.$emit("input", dateFns.subMonths(this.date, 1));
    },
    handleNextMonthClick() {
      this.$emit("input", dateFns.addMonths(this.date, 1));
    },
    handleYearClick() {
      this.$emit("year-click", this.date);
    },
    handleMonthClick() {
      this.$emit("month-click", this.date);
    },
    handleDateClick(date) {
      this.$emit("date-click", date);
    }
  },
  watch: {
    date: {
      immediate: true,
      handler() {
        const firstDate = dateFns.startOfMonth(this.date);
        // 时分秒设置 TODO
        let diffDay = dateFns.getDay(firstDate) || 7;
        const startDate = dateFns.subDays(firstDate, diffDay);
        const rowList = [[], [], [], [], [], []];
        for (let i = 0; i < 6; i++) {
          const row = rowList[i];
          for (let j = 0; j < 7; j++) {
            const currentDate = dateFns.addDays(startDate, i * 7 + j);
            row.push({
              isToday: dateFns.isToday(currentDate),
              isPrevMonth: dateFns.isBefore(
                currentDate,
                dateFns.startOfMonth(this.date)
              ),
              isNextMonth: dateFns.isAfter(
                currentDate,
                dateFns.lastDayOfMonth(this.date)
              ),
              // TODO 数组区间判断
              selected: dateFns.isSameDay(currentDate, this.selectValue),
              disabled: this.disabled ? this.disabled(currentDate) : false,
              text: dateFns.getDate(currentDate),
              date: currentDate
            });
          }
          this.dateRowList = rowList;
        }
      }
    }
  }
};
</script>
<style lang="scss">
@import "../../style/variable.scss";

.kv-date-day {
  display: inline-block;
  font-size: 14px;
}

.kv-date-day--header {
  height: 40px;
  line-height: 40px;
  text-align: center;
  user-select: none;
  position: relative;
  border-bottom: $--datepicker-border;
}

.kv-date-day--year,
.kv-date-day--month {
  display: inline-block;
  padding: 0 4px;
  font-weight: 500;
  line-height: 40px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: $--color--primary;
  }
}

.kv-date-day--button {
  position: absolute;
  top: 0;
  display: inline-block;
  padding: 0 5px;
  font-size: 16px;
  line-height: 40px !important;
  cursor: pointer;

  &:hover {
    color: $--color--primary;
  }

  &.kv-icon-doubleleft {
    left: 7px;
    font-size: 18px;
  }

  &.kv-icon-left {
    left: 30px;
  }

  &.kv-icon-right {
    right: 30px;
  }

  &.kv-icon-doubleright {
    right: 7px;
    font-size: 18px;
  }
}

.kv-date-day--content {
  padding: 8px 12px;
}

.kv-date-day--table {
  width: 100%;
  max-width: 100%;
  background-color: transparent;
  border-collapse: collapse;
}

.kv-date-day--week {
  width: 36px;
  padding: 6px 0;
  line-height: 18px;
  text-align: center;
}

.kv-date-day--cell {
  box-sizing: border-box;
  text-align: center;
  border: 0;
  height: 30px;
  padding: 3px 0;
  cursor: pointer;
}

.kv-date-day--today {
  .kv-date-day--text {
    border-color: $--color--primary;
    color: $--color--primary;
  }
}

.kv-date-day--prev-month,
.kv-date-day--next-month {
  color: $--datepicker-border-color;
}

.kv-date-day--cell:hover {
  .kv-date-day--text {
    background-color: mix($--color--white, $--color--primary, 90%);
  }
}

.kv-date-day--selected:hover,
.kv-date-day--selected {
  .kv-date-day--text {
    border-color: $--color--primary;
    color: $--color--white;
    background-color: $--color--primary;
  }
}

.kv-date-day--text {
  width: 24px;
  height: 24px;
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
