<template>
  <div class="kv-date-time">
    <div class="kv-date-time--header">
      <span class="kv-date-time--date">{{dateText}}</span>
    </div>
    <div class="kv-date-time--content">
      <div ref="hour"
           class="kv-date-time--select">
        <ul class="kv-date-time--select-list">
          <li v-for="index in 24"
              :key="index"
              :class="['kv-date-time--select-item',
              {'kv-date-time--select-active':index-1===selectHour}]"
              @click="handleTimeClick(index-1,selectMinute,selectSecond)">{{timeText(index)}}</li>
        </ul>
      </div>
      <div ref="monute"
           class="kv-date-time--select">
        <ul class="kv-date-time--select-list">
          <li v-for="index in 60"
              :key="index"
              :class="['kv-date-time--select-item',
              {'kv-date-time--select-active':index-1===selectMinute}]"
              @click="handleTimeClick(selectHour,index-1,selectSecond)">{{timeText(index)}}</li>
        </ul>
      </div>
      <div ref="second"
           class="kv-date-time--select">
        <ul class="kv-date-time--select-list">
          <li v-for="index in 60"
              :key="index"
              :class="['kv-date-time--select-item',
              {'kv-date-time--select-active':index-1===selectSecond}]"
              @click="handleTimeClick(selectHour,selectMinute,index-1)">{{timeText(index)}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import dateFns from "date-fns";

export default {
  name: "KvDateTime",
  componentName: "KvDateTime",
  props: {
    date: {
      type: Date,
      required: true
    },
    selectValue: {
      type: Date
    }
  },
  computed: {
    dateText() {
      return dateFns.format(this.date, "YYYY年M月D日");
    },
    dateValue() {
      return this.selectValue || this.date;
    },
    selectHour() {
      return dateFns.getHours(this.dateValue);
    },
    selectMinute() {
      return dateFns.getMinutes(this.dateValue);
    },
    selectSecond() {
      return dateFns.getSeconds(this.dateValue);
    }
  },
  methods: {
    calcScrollTop(value) {
      return value * 24;
    },
    handleTimeClick(hour, monute, second) {
      this.$emit("time-click", hour, monute, second);
    },
    timeText(value) {
      return ("0" + (value - 1)).slice(-2);
    }
  },
  watch: {
    selectHour: {
      immediate: true,
      handler(value) {
        this.$nextTick(() => {
          this.$refs.hour.scrollTop = this.calcScrollTop(value);
        });
      }
    },
    selectMinute: {
      immediate: true,
      handler(value) {
        this.$nextTick(() => {
          this.$refs.monute.scrollTop = this.calcScrollTop(value);
        });
      }
    },
    selectSecond: {
      immediate: true,
      handler(value) {
        this.$nextTick(() => {
          this.$refs.second.scrollTop = this.calcScrollTop(value);
        });
      }
    }
  }
};
</script>
<style lang="scss">
@import "../../style/variable.scss";

.kv-date-time {
  display: inline-block;
  font-size: 14px;
}

.kv-date-time--header {
  height: 40px;
  line-height: 40px;
  text-align: center;
  user-select: none;
  position: relative;
  border-bottom: $--datepicker-border;
}

.kv-date-time--date {
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

.kv-date-time--content {
  width: 276px;
  height: 238px;
}

.kv-date-time--select {
  position: relative;
  float: left;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  font-size: 14px;
  border-right: $--datepicker-border;
  width: 33.33%;
  padding-bottom: 214px;

  &:last-child {
    border-right: none;
  }

  &:hover {
    overflow-y: auto;
  }
}

.kv-date-time--select-list {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}

.kv-date-time--select-item {
  box-sizing: content-box;
  width: 100%;
  height: 24px;
  margin: 0;
  padding-left: 36px;
  line-height: 24px;
  list-style: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  user-select: none;

  &:hover {
    background-color: mix($--color--white, $--color--primary, 90%);
  }
}
.kv-date-time--select-active,
.kv-date-time--select-active:hover {
  border-color: $--color--primary;
  color: $--color--white;
  background-color: $--color--primary;
}

// .kv-date-time--table {
//   width: 100%;
//   max-width: 100%;
//   background-color: transparent;
//   border-collapse: collapse;
// }

// .kv-date-time--week {
//   width: 36px;
//   padding: 6px 0;
//   line-height: 18px;
//   text-align: center;
// }

// .kv-date-time--cell {
//   box-sizing: border-box;
//   text-align: center;
//   border: 0;
//   height: 30px;
//   padding: 3px 0;
//   cursor: pointer;
// }

// .kv-date-time--totime {
//   .kv-date-time--text {
//     border-color: $--color--primary;
//     color: $--color--primary;
//   }
// }

// .kv-date-time--prev-month,
// .kv-date-time--next-month {
//   color: $--datepicker-border-color;
// }

// .kv-date-time--cell:hover {
//   .kv-date-time--text {
//     background-color: mix($--color--white, $--color--primary, 90%);
//   }
// }

// .kv-date-time--selected:hover,
// .kv-date-time--selected {
//   .kv-date-time--text {
//     border-color: $--color--primary;
//     color: $--color--white;
//     background-color: $--color--primary;
//   }
// }

// .kv-date-time--text {
//   width: 24px;
//   height: 24px;
//   margin: 0 auto;
//   padding: 0;
//   line-height: 24px;
//   text-align: center;
//   background-color: transparent;
//   border: 1px solid transparent;
//   border-radius: 2px;
//   transition: background-color 0.3s ease;
// }
</style>
