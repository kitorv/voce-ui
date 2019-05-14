<template>
  <div class="kv-date-month">
    <div class="kv-date-month--header">
      <i class="kv-date-month--button kv-icon-doubleleft"
         @click="handlePrevYearClick"></i>
      <span class="kv-date-month--range"
            @click="handleYearClick">{{year}}年</span>
      <i class="kv-date-month--button kv-icon-doubleright"
         @click="handleNextYearClick"></i>
    </div>
    <div class="kv-date-month--content">
      <table class="kv-date-month--table">
        <tr v-for="(row,index) in monthRowList"
            :key="index">
          <td v-for="{text,selected} in row"
              :key="text"
              :class="['kv-date-month--cell',
              {'kv-date-month--selected':selected}]"
              @click="handleMonthClick">
            <div class="kv-date-month--text">{{text}} </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import dateFns from "date-fns";

export default {
  name: "KvDateMonth",
  componentName: "KvDateMonth",
  props: {
    months: {
      type: Array,
      default: () => [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月"
      ]
    },
    date: {
      type: Date,
      required: true
    },
    selectValue: [Date, Array]
  },
  data() {
    return {
      monthRowList: [],
      year: null
    };
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
    handleYearClick() {
      this.$emit("year-click", this.date);
    },
    handleMonthClick() {
      this.$emit("month-click", this.date);
    }
  },
  watch: {
    date: {
      immediate: true,
      handler() {
        const rowList = [[], [], [], []];
        for (let i = 0; i < this.months.length; i++) {
          const month = this.months[i];
          let index = Number.parseInt(i / 3);
          rowList[index].push({
            text: month,
            selected:
              dateFns.isSameYear(this.selectValue, this.date) &&
              i === dateFns.getMonth(this.selectValue)
          });
        }
        this.year = dateFns.getYear(this.date);
        this.monthRowList = rowList;
      }
    }
  }
};
</script>
<style lang="scss" >
@import "../../style/variable.scss";

.kv-date-month {
  display: inline-block;
  font-size: 14px;
}

.kv-date-month--header {
  height: 40px;
  line-height: 40px;
  text-align: center;
  user-select: none;
  position: relative;
  border-bottom: 1px solid #b4b4b4;
}

.kv-date-month--range {
  display: inline-block;
  padding: 0 4px;
  font-weight: 500;
  line-height: 40px;
  font-size: 16px;
  cursor: pointer;
}

.kv-date-month--button {
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

.kv-date-month--content {
  padding: 9px 12px;
}

.kv-date-month--table {
  width: 100%;
  max-width: 100%;
  background-color: transparent;
  border-collapse: collapse;
}

.kv-date-month--cell {
  box-sizing: border-box;
  text-align: center;
  border: 0;
  height: 55px;
  padding: 3px 0;
  width: 84px;
  cursor: pointer;
}

.kv-date-month--cell:hover {
  .kv-date-month--text {
    background-color: mix($--color--white, $--color--primary, 90%);
  }
}

.kv-date-month--selected,
.kv-date-month--selected:hover {
  .kv-date-month--text {
    border-color: $--color--primary;
    color: $--color--white;
    background-color: $--color--primary;
  }
}

.kv-date-month--text {
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
