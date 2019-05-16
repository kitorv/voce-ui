<template>
  <kv-dropdown class="kv-date-picker"
               :visible.sync="visible">
    <div slot="selection"
         class="kv-date-picker--selection">
      <input class="kv-date-picker--input"
             v-model="inputText" />
      <span class="kv-date-picker--icon">
        <i class="kv-icon-calendar"></i>
      </span>
    </div>
    <div slot="panel"
         class="kv-date-picker--panel">
      <kv-date-calendar v-if="showCalendar"
                        :type="calendarType"
                        :date="dateValue"
                        :select-value="dateValue"
                        @date-click="handleDateClick"></kv-date-calendar>
      <kv-date-time v-else
                    :date="dateValue"
                    :select-value="dateValue"
                    @time-click="handleTimeClick"></kv-date-time>
      <div class="kv-date-picker--footer"
           v-if="showFooter">
        <a v-if="showTimeSelect"
           class="kv-date-picker--button-time"
           @click="showCalendarPanel=!showCalendarPanel">选择时间</a>
        <a class="kv-date-picker--button-ok"
           @click="visible=false">确定</a>
      </div>
    </div>
  </kv-dropdown>
</template>

<script>
import KvDropdown from "../dropdown/dropdown";
import KvDateCalendar from "./calendar";
import KvDateTime from "./time";
import dateFns from "date-fns";

export default {
  name: "KvDatePicker",
  componentName: "KvDatePicker",
  components: { KvDateCalendar, KvDateTime },
  data() {
    return {
      visible: false,
      inputText: null,
      showCalendarPanel: true
    };
  },
  props: {
    // TODO 区间
    value: [String, Array],
    type: {
      type: String,
      validator: function (value) {
        return ["year", "month", "date", "datetime", "time"].includes(value);
      },
      default: "date"
    },
    format: String
  },
  computed: {
    dateValue: {
      get() {
        let result = dateFns.parse(this.value);
        // 单独的时间格式转换补充年月日，等到dateFns后续2.0正式版会解决该问题在替换
        if (!dateFns.isValid(result)) {
          result = dateFns.parse(dateFns.format(new Date(), "YYYYMMDD ") + this.value);
        }
        return result
      },
      set(value) {
        // TODO 多种情况判断
        this.$emit("input", dateFns.format(value, this.dateFormat));
      }
    },
    dateText() {
      return dateFns.format(this.dateValue, this.dateFormat);
    },
    dateFormat() {
      if (this.format) return this.format;
      const format = {
        date: "YYYY-MM-DD",
        month: "YYYY-MM",
        year: "YYYY",
        datetime: "YYYY-MM-DD HH:mm:ss",
        time: "HH:mm:ss"
      };
      return format[this.type];
    },
    calendarType() {
      if (["datetime", "time"].includes(this.type)) return "date";
      return this.type;
    },
    showCalendar() {
      return !["time"].includes(this.type) && this.showCalendarPanel
    },
    showFooter() {
      return ["datetime", "time"].includes(this.type);
    },
    showTimeSelect() {
      return !["time"].includes(this.type);
    }
  },
  methods: {
    handleDateClick(value) {
      this.dateValue = value;
      if (this.showFooter) return;
      this.visible = false;
    },
    handleTimeClick(hour, minute, second) {
      let dateValue = dateFns.setHours(this.dateValue, hour);
      dateValue = dateFns.setMinutes(dateValue, minute);
      this.dateValue = dateFns.setSeconds(dateValue, second);
    }
  },
  watch: {
    dateValue: {
      immediate: true,
      handler() {
        this.inputText = this.dateText;
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../style/variable.scss";
@import "../dropdown/index.scss";

.kv-date-picker {
  position: relative;
  display: inline-block;
  font-size: 14px;
  zoom: 1;
}

.kv-date-picker--selection {
  position: relative;
  box-sizing: border-box;
}

.kv-date-picker--input {
  background-color: $--datepicker-background-color;
  border: $--datepicker-border;
  border-radius: $--datepicker-border-radius;
  -webkit-appearance: none;
  background-image: none;
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  line-height: 1.5;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;

  &.kv-date-picker--input {
    padding: 4px 30px 4px 11px;
    height: 32px;

    &::placeholder {
      font-size: 14px;
      color: $--datepicker-border-color;
    }
  }
}

.kv-date-picker--icon {
  position: absolute;
  top: 50%;
  right: 10px;
  z-index: 2;
  line-height: 0;
  transform: translateY(-50%);
  color: $--datepicker-icon-color;
  font-size: 18px;
}

.kv-date-picker--panel {
  background-color: $--datepicker-dropdown-background-color;
  margin: 4px 0;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  z-index: 1050;
}

.kv-date-picker--footer {
  padding: 0 12px;
  line-height: 38px;
  border-top: $--datepicker-border;
  text-align: right;
}

.kv-date-picker--button-time {
  display: inline-block;
  margin-right: 8px;
  color: $--color--primary;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  transition: color 0.3s;
  cursor: pointer;
}

.kv-date-picker--button-ok {
  position: relative;
  display: inline-block;
  text-align: center;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  transition: all 0.3s;
  user-select: none;
  color: $--color--white;
  background-color: $--color--primary;
  border-color: $--color--primary;
  height: 24px;
  padding: 0 7px;
  font-size: 14px;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
}
</style>


