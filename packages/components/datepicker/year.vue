<template>
  <div class="kv-date-year">
    <div class="kv-date-year--header">
      <i class="kv-date-year--button kv-icon-doubleleft"
         @click="handlePrevYearsClick"></i>
      <span class="kv-date-year--range">{{firstYear}}年-{{lastYear}}年</span>
      <i class="kv-date-year--button kv-icon-doubleright"
         @click="handleNextYearsClick"></i>
    </div>
    <div class="kv-date-year--content">
      <table class="kv-date-year--table">
        <tr v-for="(row,index) in yearRowList"
            :key="index">
          <td class="kv-date-year--cell"
              v-for="{text} in row"
              :key="text">
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
    }
  },
  methods: {
    handlePrevYearsClick() {
      this.$emit("update:date", dateFns.subYears(this.date, 12));
    },
    handleNextYearsClick() {
      this.$emit("update:date", dateFns.addYears(this.date, 12));
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
          rowList[index].push({ text: currentYear });
          currentYear++;
        }
        this.firstYear = rowList[0][0].text;
        this.lastYear = rowList[3][1].text;
        this.yearRowList = rowList;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
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
  line-height: 40px;
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
  padding: 9px 12px;
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
  height: 55px;
  padding: 3px 0;
}

.kv-date-year--text {
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
