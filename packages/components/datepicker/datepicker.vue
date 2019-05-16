<template>
  <kv-dropdown class="kv-date-picker"
               :visible.sync="visible">
    <div slot="selection"
         class="kv-date-picker--selection">
      <input v-model="inputText"
             class="kv-date-picker--input"
             :placeholder="placeholder"
             @blur="handleInputBlur" />
      <span class="kv-date-picker--icon">
        <i class="kv-icon-calendar"></i>
      </span>
    </div>
    <div slot="panel"
         class="kv-date-picker--panel">
      <div v-if="shortcuts.length>0"
           class="kv-date-picker--sidebar">
        <div v-for="{value,text} in shortcuts"
             :key="text"
             class="kv-date-picker--sidebar-button"
             @click="handleShortClick(value)">{{text}}</div>
      </div>
      <div class="kv-date-picker--content">
        <kv-date-range v-if="isRange"
                       :date="dateValue"
                       :type="type"
                        :select-value="selectValue"
                       @date-click="handleDateClick">
        </kv-date-range>
        <kv-date-panel v-else
                       :date-view="dateView"
                       :type="type"
                       :date="dateValue"
                       :select-value="selectValue"
                       @date-click="handleDateClick"
                       @time-click="handleTimeClick"></kv-date-panel>
      </div>
      <div class="kv-date-picker--footer"
           v-if="showFooter">
        <a v-if="showTimeCheckButton"
           class="kv-date-picker--button-time"
           @click="handleTimeCheck">选择时间</a>
        <a class="kv-date-picker--button-ok"
           @click="visible=false">确定</a>
      </div>
    </div>
  </kv-dropdown>
</template>

<script>
import KvDropdown from "../dropdown/dropdown";
import KvDatePanel from "./panel";
import KvDateRange from "./range";
import dateFns from "date-fns";

export default {
  name: "KvDatePicker",
  componentName: "KvDatePicker",
  components: { KvDateRange, KvDatePanel },
  data() {
    return {
      visible: false,
      inputText: null,
      dateView: ["time"].includes(this.type) ? "time" : "date"
    };
  },
  props: {
    // TODO 区间
    value: [String, Array],
    type: {
      type: String,
      validator: function(value) {
        return [
          "year",
          "month",
          "date",
          "datetime",
          "time",
          "yearrange"
        ].includes(value);
      },
      default: "date"
    },
    placeholder: {
      type: String,
      default: "请选择日期"
    },
    format: String,
    shortcuts: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    dateValue: {
      get() {
        if (!this.isRange) return this.parseDateValue(this.value);
        let [start, end] = Array.isArray(this.value) ? this.value : [];
        start = start ? this.parseDateValue(start) : new Date();
        end = end ? this.parseDateValue(end) : new Date();
        return [start, end];
      },
      set(value) {
        debugger;
        // TODO 多种情况判断
        this.$emit("input", dateFns.format(value, this.dateFormat));
      }
    },
    selectValue() {
      // TODO 多类型判断
      return this.value ? this.dateValue : null;
    },
    dateText() {
      return this.value ? dateFns.format(this.dateValue, this.dateFormat) : "";
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
    showFooter() {
      return ["datetime", "time"].includes(this.type);
    },
    showTimeCheckButton() {
      return !["time"].includes(this.type);
    },
    isRange() {
      return ["yearrange"].includes(this.type);
    }
  },
  methods: {
    parseDateValue(value) {
      let result = dateFns.parse(value);
      // 单独的时间格式转换补充年月日，等到dateFns后续2.0正式版会解决该问题在替换
      if (!dateFns.isValid(result)) {
        result = dateFns.parse(dateFns.format(new Date(), "YYYYMMDD ") + value);
      }
      return result;
    },
    handleDateClick(value) {
      this.dateValue = value;
      if (this.showFooter) return;
      this.visible = false;
    },
    handleTimeClick(hour, minute, second) {
      let dateValue = dateFns.setHours(this.dateValue, hour);
      dateValue = dateFns.setMinutes(dateValue, minute);
      this.dateValue = dateFns.setSeconds(dateValue, second);
    },
    handleInputBlur() {
      // TODO 光标离开无值清空处理
      let result = dateFns.parse(this.inputText);
      if (dateFns.isValid(result)) {
        this.dateValue = result;
        return;
      }
      this.inputText = this.dateText;
    },
    handleShortClick(value) {
      this.dateValue = typeof value === "function" ? value() : value;
      this.visible = false;
    },
    handleTimeCheck() {
      this.dateView = this.dateView === "date" ? "time" : "date";
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
  width: 100%;
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

.kv-date-picker--content {
  position: relative;
}

.kv-date-picker--sidebar {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 90px;
  border-right: $--datepicker-border;
  box-sizing: border-box;
  padding-top: 6px;
  background-color: $--datepicker-dropdown-background-color;
  overflow: auto;
  text-align: left;

  & + .kv-date-picker--content {
    margin-left: 90px;
  }
}

.kv-date-picker--sidebar-button {
  box-sizing: border-box;
  height: 26px;
  padding: 4px 9px;
  cursor: pointer;

  &:hover {
    color: $--color--primary;
  }
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


