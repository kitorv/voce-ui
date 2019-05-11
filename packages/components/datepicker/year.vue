<template>
  <table class="kv-date-year">
    <tr v-for="(row,index) in yearRowList"
        :key="index">
      <td class="kv-date-year--cell"
          v-for="{text} in row"
          :key="text">
        <div class="kv-date-year--text"> {{text}} </div>
      </td>
    </tr>
  </table>
</template>
<script>
import dateFns from "date-fns";

export default {
  name: "KvDateYear",
  componentName: "KvDateYear",
  props: {
    date: {
      type: Date,
      required: true
    }
  },
  computed: {
    yearRowList() {
      let rowList = [[], [], []];
      let year = dateFns.getYear(this.date);
      let currentYear = year - (year % 10) - 1;
      for (let i = 0; i < 12; i++) {
        let index = Number.parseInt(i / 4);
        rowList[index].push({ text: currentYear });
        currentYear++;
      }
      return rowList;
    }
  },
  methods: {
    // handleYearSelect(year) {
    //   if (this.isDisabled(year)) {
    //     return;
    //   }
    //   this.$emit("year-click", year);
    // },
    // isSelect(year) {
    //   if (this.value) {
    //     return year === this.value.year();
    //   } else {
    //     return false;
    //   }
    // },
    // isDisabled(year) {
    //   if (this.disabledDate) {
    //     let currentDate = moment({ years: year }).endOf("year");
    //     return this.disabledDate(currentDate);
    //   } else {
    //     return false;
    //   }
    // }
  }
};
</script>