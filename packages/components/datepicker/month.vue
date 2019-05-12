<template>
  <div class="kv-date-month">
    <div class="kv-date-month--header">
      <i class="kv-date-month--button kv-icon-doubleleft"
         @click="handlePrevYearClick"></i>
      <span class="kv-date-month--range">{{year}}年</span>
      <i class="kv-date-month--button kv-icon-doubleright"
         @click="handleNextYearClick"></i>
    </div>
    <div class="kv-date-month--content">
      <table class="kv-date-month--table">
        <tr v-for="(row,index) in monthRowList"
            :key="index">
          <td class="kv-date-month--cell"
              v-for="{text} in row"
              :key="text">
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
    }
  },
  data() {
    return {
      monthRowList: [],
      year: null
    };
  },
  methods: {
    handlePrevYearClick() {
      this.$emit("update:date", dateFns.subYears(this.date, 1));
    },
    handleNextYearClick() {
      this.$emit("update:date", dateFns.addYears(this.date, 1));
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
            text: month
          });
        }
        this.year = dateFns.getYear(this.date);
        this.monthRowList = rowList;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
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
  font-weight: bold;
  line-height: 40px;
  font-size: 16px;
}

.kv-date-month--button {
  position: absolute;
  top: 0;
  display: inline-block;
  padding: 0 5px;
  font-size: 16px;
  line-height: 40px;
  cursor: pointer;

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
}

.kv-date-month--text {
  width: 82px;
  height: 24px;
  margin: 0 auto;
  padding: 0;
  line-height: 22px;
  text-align: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 2px;
  transition: background-color 0.3s ease;
}
</style>
