<template>
  <table>
    <tr v-for="(row,index) in monthRowList"
        :key="index">
      <td v-for="{text} in row"
          :key="text">
        <div>{{text}} </div>
      </td>
    </tr>
  </table>
</template>
<script>
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
    }
    // dateValue: {
    //     type: moment,
    //     required: true
    // },
    // value: {
    //     type: moment
    // },
    // disabledDate: Function
  },
  data() {
    return {};
  },
  computed: {
    monthRowList() {
      const rowList = [[], [], []];
      for (let i = 0; i < this.months.length; i++) {
        const month = this.months[i];
        let index = Number.parseInt(i / 4);
        rowList[index].push({
          text: month,
          selected: false,
          disabled: false
        });
      }
      return rowList;
    }
  },
  methods: {
    // isSelected(month) {
    //     if (this.dateValue.isSame(this.value, 'month')) {
    //         return month === this.value.month();
    //     } else {
    //         return false;
    //     }
    // },
    // handleMonthClick(monthText) {
    //     this.$emit('month-click', this.months.indexOf(monthText));
    // },
    // isDisabled(month) {
    //     if (this.disabledDate) {
    //         let currentDate = moment({ years: this.dateValue.year(), months: month }).endOf('month');
    //         return this.disabledDate(currentDate);
    //     } else {
    //         return false;
    //     }
    // }
  }
};
</script>